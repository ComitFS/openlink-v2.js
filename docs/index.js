import Openlink 		from "./openlink-v2.js";
import streamDeckXL 	from "./stream-deck-xl.js";
import streamDeck 		from "./stream-deck.js";
import JabraSpeak410 	from "./jabra-speak-410.js";
import JabraSpeak510 	from "./jabra-speak-510.js";
import BrowserDetect	from "./browser-detect.js";

const browser_detect = new BrowserDetect();
const stream_deck = new streamDeck();
const stream_deck_xl = new streamDeckXL();
const openlink = new Openlink();
const data = {buttons: [], jabra: null};

window.addEventListener("unload", function()
{
    window.eventChannel.close();
    if (window.streamDeck?.device) window.streamDeck.disconnect();
	disconnectJabra();
});

window.addEventListener("load", function()
{
	setupStreamDeck();
	setupOpenlink();	
});

async function setupOpenlink()
{	
	const profile = (browser_detect.browser + "_" + browser_detect.OS).toLowerCase();	
	await openlink.connect({profile, url: URL});
	
	openlink.source.addEventListener('onConnect', event => {
		console.debug("onConnect", event);		
	});
	
	openlink.source.addEventListener('onAction', event => {
		console.debug("onAction", event);	
		openlink.executeAction(event.data);		
	});	
	
	openlink.source.addEventListener('onEvent', event => {
		const data = JSON.parse(event.data);
		console.debug("onEvent", data);		
		const xml = txml.simplify(txml.parse(data.xml));	
		
		if (xml.callstatus)
		{
			let calls = xml.callstatus.call;			
			if (!Array.isArray(calls)) calls = [calls];
			
			calls.forEach(call =>
			{
				handleCallStatus(call);				
			});			
		}
	});		
		
	console.debug("Openlink ready", openlink.token);	
}

function handleCallStatus(call)
{	
	const button = findButton(call);	
	console.debug("handleCallStatus", call, button);	
			
	if (button)
	{
		if (call.state == "CallOriginated"  && call.direction == "Outgoing")
		{	
			startRinging("outgoing");	
			window.streamDeck.writeText(button.key, button.id, "white", "orange");	
			button.call = call;			
		}
		else
			
		if (call.state == "CallEstablished")
		{
			stopRinging();
			
			if (data.jabra)
			{
				data.jabra.connect();
				data.jabra.call = call;			
			}				
			window.streamDeck.writeText(button.key, button.id, "white", "green");	
			button.call = call;				
		}
		else
			
		if ((call.state == "ConnectionCleared" || call.state == "CallMissed") && button.call?.id == call.id)
		{
			stopRinging();
			
			if (data.jabra)
			{
				data.jabra.clear();
				delete data.jabra.call;			
			}
						
			window.streamDeck.writeText(button.key, button.id, "white", button.background);	
			delete button.call;
		}	
		else
			
		if (call.state == "CallDelivered" && call.direction == "Incoming")
		{
			startRinging("incoming");
			
			if (data.jabra)
			{
				data.jabra.ring();
				data.jabra.call = call;			
			}			
			window.streamDeck.writeText(button.key, button.id, "white", "red");	
			button.call = call;				
		}			
	}
}

function findButton(call)
{	
	for (let i=0; i<data.buttons.length; i++)
	{
		if (call.called?.number == data.buttons[i].label || call.called?.name == data.buttons[i].label)
		{
			return data.buttons[i];
		}
	};
	
	return null;
}
	
function setupStreamDeck()
{
    const streamdeck_div = document.getElementById("streamdeck");

    const connect = document.getElementById("connect");
    connect.addEventListener('click', event =>
    {
        getStreamDeck();

        if (connect.dataset.status == "off")
        {
            window.streamDeck.connect(function(error)
            {
                if (!error)
                {
                    window.streamDeck.reset();
                    window.streamDeck.setBrightness(80);

                    connect.innerHTML = "Disconnect Device";
                    connect.dataset.status = "on";
                }
                else alert("Stream Deck device not found");
            });
			
			connectJabra();
        }
        else {
            window.streamDeck.reset();
            window.streamDeck.disconnect();
			disconnectJabra();

            connect.innerHTML = "Connect Device";
            connect.dataset.status = "off";
        }
    });

    const showui = document.getElementById("showui");
    showui.addEventListener('click', event =>
    {
        getStreamDeck();

        window.streamDeck.showUI(function()
        {
            window.actionChannel = new BroadcastChannel('stream-deck-action');
            window.actionChannel.postMessage({action: 'refresh'});

        }, streamdeck_div);
    });

    const load = document.getElementById("load");
    load.addEventListener('click', async event =>
    {
		let i = 0;
		const data1 = await openlink.getInterests();
		console.debug("load telephone interests", data1);
		const interests = data1.interests || data1.interest;
		
		if (interests) interests.forEach(interest =>
		{
			interest.background = "blue";
			interest.key = i;
			data.buttons[i] = interest;
			window.streamDeck.writeText(i++, interest.id, "white", interest.background);			
		});
		
		const data2 = await openlink.getFeatures();
		console.debug("load telephone features", data2);
		const features = data2.features || data2.feature;		
		
		if (features) features.forEach(feature =>
		{
			feature.background = "purple";			
			feature.key = i;
			data.buttons[i] = feature;
			window.streamDeck.writeText(i++, feature.id, "white", feature.background);			
		});	
    });

    setupEventHandler();	
}

function disconnectJabra()
{
	data.jabra?.detach();	
}

function connectJabra()
{
    const speaker = document.getElementById("speaker");	
	data.jabra = speaker.value == "jabra-410" ? new JabraSpeak410() : new JabraSpeak510();	
	
	data.jabra.attach(event => 
	{
		console.debug("jabra event", event);
		
		if (event == "active")
		{
			if (data.jabra.call && data.jabra.call.state == "CallDelivered" && data.jabra.call.direction == "Incoming")
			{	
				openlink.requestAction("AnswerCall", data.jabra.call);		
			}		
		}
		else
			
		if (event == "idle")
		{
			if (data.jabra.call && data.jabra.call.state == "CallEstablished")
			{
				openlink.requestAction("ClearConnection", data.jabra.call);				
			}
		}		
			
	});	
}
function getStreamDeck()
{
    const device = document.getElementById("device");
    console.debug("device", device.value);

    window.streamDeck = (device.value == "stream-deck") ? stream_deck : stream_deck_xl;
}

function setupEventHandler()
{
    window.eventChannel = new BroadcastChannel('stream-deck-event');
    window.eventChannel.addEventListener('message', event =>
    {
        if (event.data.event == "keys")
        {
            const keys = event.data.keys;
			
			for (let i=0; i<32; i++)
			{
				if (keys[i]?.down && data.buttons[i])
				{
					const call = data.buttons[i].call;
					console.debug("key press", i, data.buttons[i], call);	

					if (call)
					{
						if (call.state == "CallDelivered") 		openlink.requestAction("AnswerCall", call);
						if (call.state == "CallEstablished") 	openlink.requestAction("ClearConnection", call);							
					}						
					else {	
						if (data.buttons[i].type == "SpeedDial") openlink.makeDefaultCall(data.buttons[i].label);							
						if (data.buttons[i].type == "L") 		 openlink.makeCallDirectLine(data.buttons[i].id);
						if (data.buttons[i].type == "D") 		 openlink.makeCall(data.buttons[i].id, prompt("Destination"));																		
					}
				}					
			}
        }
        else

        if (event.data.event == "images")
        {
            window.streamDeck.handleScreen(event);
        }
    });
}
function stopRinging() 
{
    console.debug("stopRinging");	
	data.ringer?.pause();	
}

function startRinging(ringtone) 
{
    console.debug("startRinging", ringtone);	
	
	if (!data.ringer) 
	{			
		data.ringer = document.createElement('audio');
		data.ringer.loop = true;
		document.body.appendChild(data.ringer);		
	}
	data.ringer.src = "./sounds/" + ringtone + ".mp3";
	data.ringer.play();
}