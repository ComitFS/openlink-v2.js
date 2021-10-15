import { CommunicationIdentityClient } from "@azure/communication-identity";
import { CallClient, CallAgent, Renderer, LocalVideoStream} from "@azure/communication-calling";
import { AzureCommunicationTokenCredential } from "@azure/communication-common";
import { PublicClientApplication, LogLevel, InteractionRequiredAuthError } from "@azure/msal-browser";

window.ACS =  {CommunicationIdentityClient, CallClient, CallAgent, AzureCommunicationTokenCredential, PublicClientApplication, LogLevel, InteractionRequiredAuthError};