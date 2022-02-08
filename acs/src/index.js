import { CommunicationIdentityClient } from "@azure/communication-identity";
import { CallClient, LocalVideoStream, Features, VideoStreamRenderer} from "@azure/communication-calling";
import { ChatClient } from '@azure/communication-chat';
import { AzureCommunicationTokenCredential } from "@azure/communication-common";
import { PublicClientApplication, LogLevel, InteractionRequiredAuthError} from "@azure/msal-browser";
import {LitElement, html, css} from 'lit';

window.ACS =  { CommunicationIdentityClient, 
				ChatClient, 
				CallClient, 
				AzureCommunicationTokenCredential, 
				PublicClientApplication, 
				LogLevel, 
				InteractionRequiredAuthError, 
				LocalVideoStream, 
				Features,
				VideoStreamRenderer
};

window.LIT =  { LitElement,
				html, 
				css
};