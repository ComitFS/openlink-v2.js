
const url = "https://pade.chat:5443/acs/api/openlink/config";	
  
async function main() {
  console.log("openlink-v2.js");
  let creds = await navigator.credentials.get({password: true});
  let token;
  
  if (creds)
  {
	token = await getToken(creds);	  
	console.log("Issued token from stored creds:", token);	  
  }
  else {
	const id = prompt("Username");	
	let register = false;
	
	if (id)
	{
		let password = await webAuthn(id);
		
		if (!password)
		{
			register = true;
			password = prompt("Password");
		}
		
		if (password)
		{
			creds = {password: {id, password}};
			token = await getToken(creds.password);	
			console.log("Issued token from new creds:", token);	

			if (token)
			{
				const credentials = await navigator.credentials.create(creds);
				await navigator.credentials.store(credentials);
				
				if (register)
				{
					const resp = await webRegister(creds.password);	
					console.log("web authn registration response", resp);	
				}
			}
		}
	}
  }
}
async function webAuthn(id)
{
	console.debug("webAuthn step 1", id);
	const response = await fetch(url + "/authenticate/start/" + id, {method: "POST"});
	const options =  await response.json();
	
	if (options.publicKeyCredentialRequestOptions.allowCredentials.length == 0)
	{
		return null;
	}
		
	options.publicKeyCredentialRequestOptions.allowCredentials.forEach(function (listItem) 
	{
		listItem.id = bufferDecode(listItem.id)
	});
	console.debug("webAuthn step 2", options);	
	
	options.publicKeyCredentialRequestOptions.challenge = bufferDecode(options.publicKeyCredentialRequestOptions.challenge);						
	const assertion = await navigator.credentials.get({publicKey: options.publicKeyCredentialRequestOptions});	
	console.debug("webAuthn step 3", assertion, assertion.id, assertion.type);	
	
	const credential = {};
	credential.id =     assertion.id;
	credential.type =   assertion.type;
	credential.rawId =  bufferEncode(assertion.rawId);

	if (assertion.response) {
		const clientDataJSON = bufferEncode(assertion.response.clientDataJSON);
		const authenticatorData = bufferEncode(assertion.response.authenticatorData);
		const signature = bufferEncode(assertion.response.signature);
		const userHandle = bufferEncode(assertion.response.userHandle);
		credential.response = {clientDataJSON, authenticatorData,	signature, userHandle};
		if (!credential.clientExtensionResults) credential.clientExtensionResults = {};						  
	}
	console.debug("webAuthn step 4", credential);
	const response2 = await fetch(url + "/authenticate/finish/" + id, {method: "POST", body: JSON.stringify(credential)});
	console.debug("webAuthn step 5", response2);
	return credential.id;
}


async function webRegister(creds)
{
	console.debug("webRegister step 1", creds);
	const authorization = "Basic " + btoa(creds.id + ":" + creds.password);
	const response = await fetch(url + "/register/start", {method: "POST", headers: {authorization}});	
	const credentialCreationOptions =  await response.json();
		
	if (credentialCreationOptions.excludeCredentials) 
	{
		credentialCreationOptions.excludeCredentials.forEach(function (listItem) 
		{
			listItem.id = bufferDecode(listItem.id)
		});
	}
	
	credentialCreationOptions.challenge = bufferDecode(credentialCreationOptions.challenge);
	credentialCreationOptions.user.id = bufferDecode(credentialCreationOptions.user.id);
	const cred = await navigator.credentials.create({publicKey: credentialCreationOptions});	
	console.debug("webRegister step 2", creds, cred);
	
	const credential = {};
	credential.id =     cred.id;
	credential.rawId =  bufferEncode(cred.rawId);
	credential.type =   cred.type;

	if (cred.response) {
	  const clientDataJSON = bufferEncode(cred.response.clientDataJSON);
	  const attestationObject = bufferEncode(cred.response.attestationObject);
	  credential.response = {clientDataJSON, attestationObject};
	  if (!credential.clientExtensionResults) credential.clientExtensionResults = {};
	}

	console.debug("webRegister step 3", credential);		
	const response2 = await fetch(url + "/register/finish", {method: "POST", headers: {authorization}, body: JSON.stringify(credential)});	
	console.debug("webRegister step 4", response2);	
	return response2;
}

async function getToken(creds)
{
  const authorization = "Basic " + btoa(creds.id + ":" + creds.password);
  const response = await fetch(url, {method: "GET", headers: {authorization}});
  const config = await response.json();
  
  if (config.acs_endpoint)
  {
	const client = new openlink_acs.CommunicationIdentityClient(config.acs_endpoint);
	const scopes = ["voip"];
	
	BrowserDetect.init();
	const profile = "acs_profile_" + (BrowserDetect.browser + "_" + BrowserDetect.OS).toLowerCase();	

	if (!config[profile])
	{
		const user = await client.createUser();	
		console.log("Created user endpoint", user);		
		config[profile] = user.communicationUserId;	
		const options = {method: "POST", headers: {authorization}, body: config[profile] };			
		const response = await fetch(url + "/" + profile, options);
	}

	return client.getToken({communicationUserId: config[profile]}, scopes);
  }	
}

main().catch((error) => {
  console.error("Encountered an error while issuing token: ", error);
});

function bufferDecode(e) 
{
	const t = "==".slice(0, (4 - e.length % 4) % 4),
		n = e.replace(/-/g, "+").replace(/_/g, "/") + t,
		r = atob(n),
		o = new ArrayBuffer(r.length),
		c = new Uint8Array(o);
	for (let e = 0; e < r.length; e++) c[e] = r.charCodeAt(e);
	return o;
}

function bufferEncode(e) 
{
	const t = new Uint8Array(e);
	let n = "";
	for (const e of t) n += String.fromCharCode(e);
	return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
}

const BrowserDetect = {
	init: function () {
		this.browser = this.searchString(this.dataBrowser) || "unknown";
		this.version = this.searchVersion(navigator.userAgent)
			|| this.searchVersion(navigator.appVersion)
			|| "unknown";
		this.OS = this.searchString(this.dataOS) || "unknown";

		this.width = 0;
		this.height = 0;

		if ( typeof( window.innerWidth ) == 'number' )
		{
			this.width = window.innerWidth;
			this.height = window.innerHeight;

		} else if ( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {

			this.width = document.documentElement.clientWidth;
			this.height = document.documentElement.clientHeight;

		} else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {

			this.width = document.body.clientWidth;
			this.height = document.body.clientHeight;
		}
	},

	searchString: function (data) {
		for (var i=0;i<data.length;i++) {
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			}
			else if (dataProp)
				return data[i].identity;
		}
	},

	searchVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	},

	dataBrowser: [
		{
			string: navigator.userAgent,
			subString: "Chrome",
			identity: "Chrome"
		},
		{   string: navigator.userAgent,
			subString: "OmniWeb",
			versionSearch: "OmniWeb/",
			identity: "OmniWeb"
		},
		{
			string: navigator.vendor,
			subString: "Apple",
			identity: "Safari",
			versionSearch: "Version"
		},
		{
			prop: window.opera,
			identity: "Opera"
		},
		{
			string: navigator.vendor,
			subString: "iCab",
			identity: "iCab"
		},
		{
			string: navigator.vendor,
			subString: "KDE",
			identity: "Konqueror"
		},
		{
			string: navigator.userAgent,
			subString: "Firefox",
			identity: "Firefox"
		},
		{
			string: navigator.vendor,
			subString: "Camino",
			identity: "Camino"
		},
		{       // for newer Netscapes (6+)
			string: navigator.userAgent,
			subString: "Netscape",
			identity: "Netscape"
		},
		{
			string: navigator.userAgent,
			subString: "MSIE",
			identity: "Explorer",
			versionSearch: "MSIE"
		},
		{
			string: navigator.userAgent,
			subString: "Gecko",
			identity: "Mozilla",
			versionSearch: "rv"
		},
		{       // for older Netscapes (4-)
			string: navigator.userAgent,
			subString: "Mozilla",
			identity: "Netscape",
			versionSearch: "Mozilla"
		}
	],

	dataOS : [
		{
			string: navigator.userAgent,
			subString: "Windows NT 10.0; Win64",
			identity: "Win10.64"
		},
		{
			string: navigator.userAgent,
			subString: "Windows NT 10.0",
			identity: "Win10"
		},
		{
			string: navigator.platform,
			subString: "Win",
			identity: "Win"
		},
		{
			string: navigator.platform,
			subString: "Mac",
			identity: "Mac"
		},
		{
		   string: navigator.userAgent,
		   subString: "iPhone",
		   identity: "iPhone"
		},
		{
			string: navigator.platform,
			subString: "Linux",
			identity: "Linux"
		}
	]
};