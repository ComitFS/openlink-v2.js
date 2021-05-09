import Openlink 		from "./openlink-v2.js";
import streamDeckXL 	from "./stream-deck-xl.js";
import streamDeck 		from "./stream-deck.js";
import JabraSpeak410 	from "./jabra-speak-410.js";
import JabraSpeak510 	from "./jabra-speak-510.js";

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
	BrowserDetect.init();		
	const profile = (BrowserDetect.browser + "_" + BrowserDetect.OS).toLowerCase();	
	await openlink.connect({profile, url: URL});
	
	openlink.source.addEventListener('onConnect', event => {
		console.log("onConnect", event);		
	});
	
	openlink.source.addEventListener('onAction', event => {
		console.log("onAction", event);	
		openlink.requestAction(event.data);		
	});	
	
	openlink.source.addEventListener('onEvent', event => {
		const data = JSON.parse(event.data);
		console.log("onEvent", data);		
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
		
	console.log("Openlink ready", openlink.token);	
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
		const json = await openlink.getFeatures();
		console.debug("load telephone features", json.features);
		
		json.features.forEach(feature =>
		{
			feature.key = i;
			data.buttons[i] = feature;
			window.streamDeck.writeText(i++, feature.id, "white", "black");			
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
					console.debug("key press", i, data.buttons[i]);	
					
					if (data.buttons[i].type == "SpeedDial")
					{
						const callstatus = openlink.makeCall(data.buttons[i].label);
						console.debug("speed dial", callstatus);
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

function handleCallStatus(call)
{	
	const button = findButton(call);	
	console.debug("handleCallStatus", call, button);	
			
	if (openlink.calls[call.id])
	{
		if (call.state == "CallOriginated")
		{		
			if (button) window.streamDeck.writeText(button.key, button.id, "white", "orange");	
		}
		else
			
		if (call.state == "CallEstablished")
		{
			data?.jabra?.connect();		
			if (button) window.streamDeck.writeText(button.key, button.id, "white", "green");	
		}
		else
			
		if (call.state == "ConnectionCleared")
		{
			data?.jabra?.clear();
			if (button) window.streamDeck.writeText(button.key, button.id, "white", "black");			
		}		
	}

}

function findButton(call)
{	
	for (let i=0; i<data.buttons.length; i++)
	{
		if (call.called?.number == data.buttons[i].label) return data.buttons[i];
	};
	
	return null;
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