export default class Openlink
{
    constructor()
    {
		this.register = false;	
		this.token = null;
		this.url = null;
    }

    async connect(options)
    {
		this.url = options?.url || (location.protocol + "//" + location.host);
		console.debug("openlink-v2.js", options);	
		
		if (options.id && options.password)
		{
			this.token = await this.getToken(options);	  
			console.debug("Issued token from provided creds:", this.token);	
			return;
		}
		
		let creds = await navigator.credentials.get({password: true});

		if (creds)
		{
			this.token = await this.getToken({...options, ...creds});	  
			console.debug("Issued token from stored creds:", this.token);
			return;
		}

		const id = options.id || prompt("Username");	

		if (id)
		{
			let password = await this.webAuthn(id);
			
			if (!password)
			{
				this.register = true;
				password = prompt("Password");
			}
			
			if (password)
			{
				creds = {password: {id, password}};
				this.token = await getToken({...options, ...creds.password});	
				console.debug("Issued token from new creds:", this.token);	

				if (this.token)
				{
					const credentials = await navigator.credentials.create(creds);
					await navigator.credentials.store(credentials);
					
					if (this.register)
					{
						const resp = await this.webRegister(creds.password);	
						console.debug("web authn registration response", resp);	
					}
				}
			}
		}
    }
	
	async getToken(options)
	{
		const authorization = "Basic " + btoa(options.id + ":" + options.password);
		const response = await fetch(this.url, {method: "GET", headers: {authorization}});
		const config = await response.json();

		if (config.acs_endpoint)
		{
			const client = new ACS.CommunicationIdentityClient(config.acs_endpoint);
			const scopes = ["voip"];

			if (!options.profile) options.profile = "acs_profile_default";
			
			if (!config[options.profile])
			{
				const user = await client.createUser();	
				console.debug("Created user endpoint", user);		
				config[options.profile] = user.communicationUserId;	
				const request = {method: "POST", headers: {authorization}, body: config[options.profile] };			
				const response = await fetch(this.url + "/" + options.profile, request);
			}
			
			return client.getToken({communicationUserId: config[options.profile]}, scopes);
		}	
	}	

	async webAuthn(id)
	{
		console.debug("webAuthn step 1", id);
		const response = await fetch(this.url + "/authenticate/start/" + id, {method: "POST"});
		const options =  await response.json();
		
		if (options.publicKeyCredentialRequestOptions.allowCredentials.length == 0)
		{
			return null;
		}
			
		options.publicKeyCredentialRequestOptions.allowCredentials.forEach(function (listItem) 
		{
			listItem.id = this.bufferDecode(listItem.id)
		});
		console.debug("webAuthn step 2", options);	
		
		options.publicKeyCredentialRequestOptions.challenge = this.bufferDecode(options.publicKeyCredentialRequestOptions.challenge);						
		const assertion = await navigator.credentials.get({publicKey: options.publicKeyCredentialRequestOptions});	
		console.debug("webAuthn step 3", assertion, assertion.id, assertion.type);	
		
		const credential = {};
		credential.id =     assertion.id;
		credential.type =   assertion.type;
		credential.rawId =  this.bufferEncode(assertion.rawId);

		if (assertion.response) {
			const clientDataJSON = this.bufferEncode(assertion.response.clientDataJSON);
			const authenticatorData = this.bufferEncode(assertion.response.authenticatorData);
			const signature = this.bufferEncode(assertion.response.signature);
			const userHandle = this.bufferEncode(assertion.response.userHandle);
			credential.response = {clientDataJSON, authenticatorData,	signature, userHandle};
			if (!credential.clientExtensionResults) credential.clientExtensionResults = {};						  
		}
		console.debug("webAuthn step 4", credential);
		const response2 = await fetch(this.url + "/authenticate/finish/" + id, {method: "POST", body: JSON.stringify(credential)});
		console.debug("webAuthn step 5", response2);
		return credential.id;
	}


	async webRegister(creds)
	{
		console.debug("webRegister step 1", creds);
		const authorization = "Basic " + btoa(creds.id + ":" + creds.password);
		const response = await fetch(this.url + "/register/start", {method: "POST", headers: {authorization}});	
		const credentialCreationOptions =  await response.json();
			
		if (credentialCreationOptions.excludeCredentials) 
		{
			credentialCreationOptions.excludeCredentials.forEach(function (listItem) 
			{
				listItem.id = this.bufferDecode(listItem.id)
			});
		}
		
		credentialCreationOptions.challenge = this.bufferDecode(credentialCreationOptions.challenge);
		credentialCreationOptions.user.id = this.bufferDecode(credentialCreationOptions.user.id);
		const cred = await navigator.credentials.create({publicKey: credentialCreationOptions});	
		console.debug("webRegister step 2", creds, cred);
		
		const credential = {};
		credential.id =     cred.id;
		credential.rawId =  this.bufferEncode(cred.rawId);
		credential.type =   cred.type;

		if (cred.response) {
		  const clientDataJSON = this.bufferEncode(cred.response.clientDataJSON);
		  const attestationObject = this.bufferEncode(cred.response.attestationObject);
		  credential.response = {clientDataJSON, attestationObject};
		  if (!credential.clientExtensionResults) credential.clientExtensionResults = {};
		}

		console.debug("webRegister step 3", credential);		
		const response2 = await fetch(this.url + "/register/finish", {method: "POST", headers: {authorization}, body: JSON.stringify(credential)});	
		console.debug("webRegister step 4", response2);	
		return response2;
	}
	
	bufferDecode(e) 
	{
		const t = "==".slice(0, (4 - e.length % 4) % 4),
			n = e.replace(/-/g, "+").replace(/_/g, "/") + t,
			r = atob(n),
			o = new ArrayBuffer(r.length),
			c = new Uint8Array(o);
		for (let e = 0; e < r.length; e++) c[e] = r.charCodeAt(e);
		return o;
	}

	bufferEncode(e) 
	{
		const t = new Uint8Array(e);
		let n = "";
		for (const e of t) n += String.fromCharCode(e);
		return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
	}
	
}