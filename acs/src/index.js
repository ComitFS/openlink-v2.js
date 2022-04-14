import { CommunicationIdentityClient } from "@azure/communication-identity";
import { CallClient, LocalVideoStream, Features, VideoStreamRenderer} from "@azure/communication-calling";
import { ChatClient } from '@azure/communication-chat';
import { SmsClient } from "@azure/communication-sms";
import { AzureCommunicationTokenCredential } from "@azure/communication-common";
import { PublicClientApplication, LogLevel, InteractionRequiredAuthError } from "@azure/msal-browser";
import { LitElement, html, css } from 'lit';

window.ACS =  { CommunicationIdentityClient, 
				ChatClient, 
				CallClient, 
				SmsClient,
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