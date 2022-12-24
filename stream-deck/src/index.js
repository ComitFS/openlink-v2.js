import { requestStreamDecks, getStreamDecks, StreamDeckWeb, DeviceModelId, openDevice } from '@elgato-stream-deck/webhid'

window.Buffer = require('buffer/').Buffer 
window.CASTouch =  { requestStreamDecks, getStreamDecks, StreamDeckWeb,	DeviceModelId, openDevice};