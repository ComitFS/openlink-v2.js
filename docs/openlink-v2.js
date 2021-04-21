export default class Openlink
{
    constructor()
    {
		this.register = false;	
		this.token = null;
		this.url = null;
		this.options = {};	
		this.config = {}
    }

    async connect(options)
    {
		this.options = options;
		this.url = options?.url || (location.protocol + "//" + location.host);
			
		console.debug("openlink-v2.js", options);
			
		if (this.options.id && this.options.password)
		{
			this.token = this.getToken(this.options);	  
			console.debug("Issued token from provided creds:", this.token);	
			return;
		}
		
		let creds = await navigator.credentials.get({password: true});

		if (creds)
		{
			this.options.id = creds.id;
			this.options.password = creds.password;
			this.token = this.getToken();	  
			console.debug("Issued token from stored creds:", this.token);
			return;
		}

		const id = this.options.id || prompt("Username");	

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
				this.options.id = id;
				this.options.password = password;				
				this.token = getToken();	
				console.debug("Issued token from new creds:", this.token);	

				if (this.token)
				{
					creds = {password: {id, password}};					
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
	
	async getToken()
	{
		console.debug("getToken", this.options);		
		const authorization = "Basic " + btoa(this.options.id + ":" + this.options.password);
		const url = this.url + "/acs/api/openlink/config";
		const response = await fetch(url, {method: "GET", headers: {authorization}});
		const config = await response.json();

		if (config.acs_endpoint)
		{
			const client = new ACS.CommunicationIdentityClient(config.acs_endpoint);
			const scopes = ["voip"];

			if (!this.options.profile) this.options.profile = "default";
			const profile = "acs_profile_" + this.options.profile;			
			
			if (!config[profile])
			{
				const user = await client.createUser();	
				console.debug("getToken - created user endpoint", user);		
				config[profile] = user.communicationUserId;	
				const request = {method: "POST", headers: {authorization}, body: config[profile] };			
				const response = await fetch(url + "/" + profile, request);
			}
			
			const token = await client.getToken({communicationUserId: config[profile]}, scopes);

			this.config = config;	
			this.source = new EventSource(this.url + "/acs/sse?id=" + this.options.id);	
			return token;
		}	
	}	

	async webAuthn(id)
	{
		console.debug("webAuthn step 1", id);
		const url = this.url + "/acs/api/openlink/config";		
		const response = await fetch(url + "/authenticate/start/" + id, {method: "POST"});
		const params =  await response.json();
		
		if (params.publicKeyCredentialRequestOptions.allowCredentials.length == 0)
		{
			return null;
		}
			
		params.publicKeyCredentialRequestOptions.allowCredentials.forEach(function (listItem) 
		{
			listItem.id = this.bufferDecode(listItem.id)
		});
		console.debug("webAuthn step 2", params);	
		
		params.publicKeyCredentialRequestOptions.challenge = this.bufferDecode(params.publicKeyCredentialRequestOptions.challenge);						
		const assertion = await navigator.credentials.get({publicKey: params.publicKeyCredentialRequestOptions});	
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
		const response2 = await fetch(url + "/authenticate/finish/" + id, {method: "POST", body: JSON.stringify(credential)});
		console.debug("webAuthn step 5", response2);
		return credential.id;
	}


	async webRegister(creds)
	{
		console.debug("webRegister step 1", creds);
		const authorization = "Basic " + btoa(creds.id + ":" + creds.password);
		const url = this.url + "/acs/api/openlink/config";			
		const response = await fetch(url + "/register/start", {method: "POST", headers: {authorization}});	
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
		const response2 = await fetch(url + "/register/finish", {method: "POST", headers: {authorization}, body: JSON.stringify(credential)});	
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