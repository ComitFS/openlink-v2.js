import Openlink from "./openlink-v2.js";
import streamDeckXL from "./stream-deck-xl.js";
import streamDeck from "./stream-deck.js";
import JabraSpeak410 from "./jabra-speak-410.js";

const stream_deck = new streamDeck();
const stream_deck_xl = new streamDeckXL();
const openlink = new Openlink();
const jabra = new JabraSpeak410();

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
	
	const url = "https://pade.chat:5443";		
	const profile = (BrowserDetect.browser + "_" + BrowserDetect.OS).toLowerCase();
	
	await openlink.connect({profile, url});
	
	openlink.source.addEventListener('onConnect', event => {
		console.log("onConnect", event);		
	});
	
	openlink.source.addEventListener('onAction', event => {
		console.log("onAction", event);	
		openlink.requestAction(event.data);		
	});	
	
	openlink.source.addEventListener('onEvent', event => {
		console.log("onEvent", event);	
		openlink.handleEvent(event.data);		
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
    load.addEventListener('click', event =>
    {
        window.streamDeck.writeText(0, "Jappy", "white", "black");
        window.streamDeck.writeText(1, "Chris", "white", "black");
		window.streamDeck.writeText(2, "Oliver", "white", "black");

    });

    setupEventHandler();	
}

function disconnectJabra()
{
	jabra?.detach();	
}

function connectJabra()
{
	jabra?.attach(event => 
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
            console.debug("key press", keys);

            if (keys[0]?.down) console.log("key 0 pressed");
            if (keys[1]?.down) console.log("key 1 pressed");
            if (keys[2]?.down) console.log("key 2 pressed");
        }
        else

        if (event.data.event == "images")
        {
            window.streamDeck.handleScreen(event);
        }
    });
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