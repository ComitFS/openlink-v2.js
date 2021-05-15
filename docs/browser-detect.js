export default class BrowserDetect
{
    constructor() 
	{
		this.dataBrowser = [
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
		];

		this.dataOS = [
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
		];
		
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
	}

	searchString(data) {
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
	}

	searchVersion(dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	}
};