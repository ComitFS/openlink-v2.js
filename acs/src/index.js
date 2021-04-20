import { CommunicationIdentityClient } from "@azure/communication-identity";
import { CallClient, CallAgent, Renderer, LocalVideoStream} from "@azure/communication-calling";
import { AzureCommunicationTokenCredential } from "@azure/communication-common";

window.openlink_acs =  {CommunicationIdentityClient, CallClient, CallAgent};