export default class Openlink
{
    constructor()
    {
		this.register = false;	
		this.token = null;
		this.url = null;
		this.destination = null;
		this.options = {};	
		this.config = {};
		this.calls = {};		
		this.missed = {};				
    }

	executeAction(data) 
	{  
		const request = JSON.parse(data);
		console.debug("executeAction", request);
		
		if (request.action == "MakeCall")
		{		
			this.requestMakeCall(request);
		}
		else

		if (request.action == "ClearConnection" || request.action == "ClearCall")
		{
			if (this.calls[request.callId])
			{
				this.calls[request.callId].hangUp();
			}
		}	
		else

		if (request.action == "AnswerCall")
		{
			if (this.calls[request.callId])
			{
				this.calls[request.callId].accept();
			}
		}
		
	}
	
	async requestMakeCall(request) 
	{  
		console.debug("requestMakeCall start", request.dialDigits, request.ddi);
		let call = null;
		this.destination = request.dialDigits;	
		this.interest = request.ddi;
	
		if (request.dialDigits.startsWith("+"))
		{
			let phoneNumber = request.ddi;
			if (phoneNumber.indexOf("+") == -1) phoneNumber = "+" + phoneNumber;

			call = await this.callAgent.startCall([{phoneNumber: request.dialDigits}], { alternateCallerId: {phoneNumber}});	 			
		}
		else {
			call = await this.callAgent.startCall([{ communicationUserId: request.ddi }], {});
		}	
	
	}	

    async connect(options)
    {
		this.options = options;
		this.url = options?.url || (location.protocol + "//" + location.host);
		const that = this;
		
		window.ACS.onRemoteMedia = function(streams)
		{
			console.debug("onRemoteMedia", streams, that.call);			
			if (that.call) that.startStreamer(streams, that.call.id);
		}		
			
		console.debug("connect", options);
        this.actionChannel = new BroadcastChannel('openlink-webpush-action');	
		
		this.actionChannel.addEventListener('message', event =>
		{
			console.debug("openlink-webpush-action", event.data);
			
			if (event.data.action == "accept")
			{
				this.calls[event.data.payload.id].accept();
			}
			else
				
			if (event.data.action == "reject")
			{				
				this.calls[event.data.payload.id].reject();
			}			
				
		});		
			
		if (this.options.id && this.options.password)
		{
			await this.getToken(this.options);	  
			console.debug("Issued token from provided creds:", this.token);	
			return;
		}
		
		let creds = await navigator.credentials.get({password: true});

		if (creds)
		{
			this.options.id = creds.id;
			this.options.password = creds.password;
			await this.getToken();	  
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
				await this.getToken();	
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
			
			const json = await client.getToken({communicationUserId: config[profile]}, scopes);			
			const request2 = {method: "POST", headers: {authorization}, body: json.token };			
			const response2 = await fetch(url + "/acs_user_token", request2);
			
			if (config.publicKey)
			{	
				try {
					config.subscription = await this.getSubscription(config.publicKey);
					console.debug("getToken getSubscription", config.subscription);	
					const webpush = "webpush.subscribe." + this.options.profile;
					const request3 = {method: "POST", headers: {authorization}, body: JSON.stringify(config.subscription) };			
					const response3 = await fetch(url + "/" + webpush, request3);	
				} catch (e) {
					console.error("getToken - unable to create webpush subcription", e);	
				}					
			}
							
			this.token = json;
			this.config = config;	
			this.source = new EventSource(this.url + "/acs/sse?id=" + this.options.id + "&token=" + json.token);

			const tokenCredential = new ACS.AzureCommunicationTokenCredential(json.token);
			this.callClient = new ACS.CallClient();
			this.deviceManager = await this.callClient.getDeviceManager();	

			const localCameras = await this.deviceManager.getCameras();
			const localMicrophones = await this.deviceManager.getMicrophones();
			const localSpeakers = await this.deviceManager.getSpeakers();

			console.debug("getToken devices", localCameras, localMicrophones, localSpeakers); 
				
			this.callAgent = await this.callClient.createCallAgent(tokenCredential, { displayName: config.name });

			this.callAgent.on('incomingCall', async event => 
			{
				const call = event.incomingCall;
				console.debug("incomingCall", call.callerInfo); 

				call.on('callEnded', endedCall => {
					console.debug("endedCall", endedCall, call);
					this.postCallStatus(call._callInternal);	
					delete this.calls[call._callInternal._id];	
				});				

				this.calls[call._callInternal._id] = call;	
				this.postCallStatus(call._callInternal);
				this.missed[call._callInternal._id] = true;	
			});

			this.callAgent.on('callsUpdated', event => 
			{
				console.debug("callsUpdated", event); 
				
				event.removed.forEach(removedCall => {
					console.debug("removedCall", removedCall.callEndReason, removedCall.callerInfo);
					delete this.calls[removedCall._id];				
				})
				
				event.added.forEach(addedCall => {
					console.debug("addedCall", addedCall, addedCall.callerInfo);	
					this.calls[addedCall._id] = addedCall;	
					this.missed[addedCall._id] = false;		
					this.call = addedCall;

					addedCall.on('stateChanged', () => {
						console.debug("addedCall state", addedCall.state);	
						this.postCallStatus(addedCall);							
							
						if (addedCall.state == "Disconnected")
						{
							this.stopStreamer();
							this.call = null;							
							addedCall.off('stateChanged', () => {});							
						}
					});						
				});				
			})
  
			return;
		}	
	}	
	
	async getInterests()
	{
		console.debug("getInterests", this.options);		
		const authorization = "Basic " + btoa(this.options.id + ":" + this.options.password);
		const url = this.url + "/acs/api/openlink/profiles/" + this.options.id + "/interests";
		const response = await fetch(url, {method: "GET", headers: {authorization}});
		return response.json();	
	}
	
	async getFeatures()
	{
		console.debug("getFeatures", this.options);		
		const authorization = "Basic " + btoa(this.options.id + ":" + this.options.password);
		const url = this.url + "/acs/api/openlink/profiles/" + this.options.id + "/features";
		const response = await fetch(url, {method: "GET", headers: {authorization}});
		return response.json();	
	}	

	async makeCallDirectLine(destination)
	{
		console.debug("makeCallDirectLine", destination);	

		const authorization = "Basic " + btoa(this.options.id + ":" + this.options.password);
		const url = this.url + "/acs/api/openlink/makecall/" + this.options.id + "/" + destination;
		const response = await fetch(url, {method: "POST", headers: {authorization}});
		return response.json();		
	}

	async makeDefaultCall(destination)
	{
		console.debug("makeCall", destination);	

		const authorization = "Basic " + btoa(this.options.id + ":" + this.options.password);
		const url = this.url + "/acs/api/openlink/makecall/" + this.options.id + "/" + destination;
		const response = await fetch(url, {method: "PUT", headers: {authorization}});
		return response.json();	
	}
	
	async makeCall(interest, destination)
	{
		console.debug("makeCall", interest, destination);	

		const authorization = "Basic " + btoa(this.options.id + ":" + this.options.password);
		const url = this.url + "/acs/api/openlink/makecall/" + this.options.id + "/" + interest + "/" + destination;
		const response = await fetch(url, {method: "POST", headers: {authorization}});
		return response.json();	
	}
	
	async requestAction(action, call, value)
	{
		console.debug("requestAction", action, call);	

		const authorization = "Basic " + btoa(this.options.id + ":" + this.options.password);
		const url = this.url + "/acs/api/openlink/requestaction/" + call.interest + "/" + action + "/" + call.id;
		const response = await fetch(url, {method: "POST", headers: {authorization}, body: value});
		return response.json();	
	}
	
	async postCallStatus(call)
	{
		console.debug("postCallStatus", call.id, call.state);
		
		const payload = {
			id: call.id, 
			interest: this.interest,
			destination: this.destination,			
			direction: call.direction,
			state: call.state,
			missed: !!this.missed[call.id],
			callerInfo: call.callerInfo
		};		
		const authorization = "Basic " + btoa(this.options.id + ":" + this.options.password);
		const url = this.url + "/acs/api/openlink/callstatus";			
		const response = await fetch(url, {method: "POST", headers: {authorization}, body: JSON.stringify(payload)});				
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
			
		params.publicKeyCredentialRequestOptions.allowCredentials.forEach(listItem => 
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
			credentialCreationOptions.excludeCredentials.forEach(listItem => 
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

	async getSubscription(publicKey)
	{	
		console.debug("getSubscription", publicKey);
		
        if (!('showNotification' in ServiceWorkerRegistration.prototype)) {
            console.warn('Notifications aren\'t supported.');
            return;
        }

        if (Notification.permission === 'denied') {
            console.warn('The user has blocked notifications.');
            return;
        }

        if (!('PushManager' in window)) {
            console.warn('Push messaging isn\'t supported.');
            return;
        }

        const registration = await navigator.serviceWorker.register('./openlink-push-sw.js', {scope: './'});			
        console.debug("initialiseState", registration);
		
		const serviceWorkerRegistration = await navigator.serviceWorker.ready;
        console.debug("initialiseState ready", serviceWorkerRegistration);

		let subscription = await serviceWorkerRegistration.pushManager.getSubscription();

		if (!subscription && publicKey) 
		{
            subscription = await serviceWorkerRegistration.pushManager.subscribe({userVisibleOnly: true, applicationServerKey: this.base64UrlToUint8Array(publicKey)});
		}		
		return subscription;
    }
	
	stopStreamer()
	{
		if (this.streamer) this.streamer.stop();
		this.streamer = null;		
	}
	
    async startStreamer(streams, callId) 
	{	
		console.debug("startStreamer", callId, streams);
		
		if (streams)
		{
			const localStream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });			
			console.debug("startStreamer", streams, localStream);

            const tracks = [
                ...localStream.getVideoTracks(),
                ...this.mergeAudioStreams(localStream, streams)
            ];

            const liveStream = new MediaStream(tracks);	
			console.debug("startStreamer mixed audio", liveStream);
			
			let websocket = this.connectLiveStream(callId);
			this.streamer = new MediaRecorder(liveStream, { mimeType: 'audio/webm;codecs=opus' });

			this.streamer.ondataavailable = function (e) {
				websocket.send(e.data);
			}

			this.streamer.onstop = function (e) {
				websocket.close();
				websocket = null;
			}

			this.streamer.start(1000);
		}
    }
	
    connectLiveStream(callId) 
	{
		const url = "wss://" + this.url.split("/")[2] + "/acs-ws/";
        const metadata = { user: this.options.id, id: callId};
        const ws = new WebSocket(url);

        ws.onopen = (event) => {
            console.debug(`Connection opened: ${JSON.stringify(event)}`);
            ws.send(JSON.stringify(metadata));
        };

        ws.onclose = (event) => {
            console.debug(`Connection closed: ${JSON.stringify(event)}`);
        };

        ws.onerror = (event) => {
            console.debug(`An error occurred with websockets: ${JSON.stringify(event)}`);
        };
        return ws;
    }	

    mergeAudioStreams(localStream, remoteStreams) {
        const context = new AudioContext();
        const destination = context.createMediaStreamDestination();
		const source1 = context.createMediaStreamSource(localStream);
		const localGain = context.createGain();
		localGain.gain.value = 0.5;
		source1.connect(localGain).connect(destination);

        remoteStreams.forEach(remoteStream => {
            const source2 = context.createMediaStreamSource(remoteStream.clone());
            const remoteGain = context.createGain();
            remoteGain.gain.value = 0.5;
            source2.connect(remoteGain).connect(destination);
        })

        return destination.stream.getAudioTracks();
    }	

    base64UrlToUint8Array(base64UrlData)
    {
        const padding = '='.repeat((4 - base64UrlData.length % 4) % 4);
        const base64 = (base64UrlData + padding)
            .replace(/\-/g, '+')
            .replace(/_/g, '/');

        const rawData = atob(base64);
        const buffer = new Uint8Array(rawData.length);

        for (let i = 0; i < rawData.length; ++i) {
            buffer[i] = rawData.charCodeAt(i);
        }

        return buffer;
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