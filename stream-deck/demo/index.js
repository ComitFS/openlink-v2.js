
function appendLog(str) {
    console.debug(str);
}

async function DomImageDemo() {
	
}

async function ChaseDemo() {
	
}
	
async function drawButtons(device, canvas, c) {
	const ctx = canvas.getContext('2d');

	for (let i = 0; i < device.NUM_KEYS; i++) {
		if (ctx) {
			const n = c + i;
			ctx.save();
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			// Start with a font that's 80% as high as the button. maxWidth
			// is used on the stroke and fill calls below to scale down.
			ctx.font = `${canvas.height * 0.8}px "Arial"`;
			ctx.strokeStyle = 'blue';
			ctx.lineWidth = 1;
			ctx.strokeText(n.toString(), 8, canvas.height * 0.9, canvas.width * 0.8);
			ctx.fillStyle = 'white';
			ctx.fillText(n.toString(), 8, canvas.height * 0.9, canvas.width * 0.8);
			const id = ctx.getImageData(0, 0, canvas.width, canvas.height);
			device.fillKeyBuffer(i, Buffer.from(id.data), { format: 'rgba' });
			ctx.restore();
		}
	}
}
	
async function drawLCDs(device, canvas, c) {
	const ctx = canvas.getContext('2d');

	for (let i = 0; i < device.NUM_ENCODERS; i++) {
		if (ctx) {
			const n = c + i;
			ctx.save();
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.font = `${canvas.height * 0.8}px "Arial"`;
			ctx.strokeStyle = 'blue';
			ctx.lineWidth = 1;
			ctx.strokeText(n.toString(), 8, canvas.height * 0.9, canvas.width * 0.8);
			ctx.fillStyle = 'white';
			ctx.fillText(n.toString(), 8, canvas.height * 0.9, canvas.width * 0.8);
			const id = ctx.getImageData(0, 0, canvas.width, canvas.height);
			device.fillEncoderLcd(i, Buffer.from(id.data), { format: 'rgba' });
			ctx.restore();
		}
	}
}
	
async function ChaseDemo(device) {
	await device.clearPanel();
	counter = 0;
	const canvas = new OffscreenCanvas(device.ICON_SIZE, device.ICON_SIZE); //document.createElement('canvas');
	canvas.width = device.ICON_SIZE;
	canvas.height = device.ICON_SIZE;		
	await drawButtons(device, canvas, counter);

	const lcdCanvas = new OffscreenCanvas(device.ICON_SIZE, device.ICON_SIZE); //document.createElement('canvas');
	lcdCanvas.width = device.LCD_ENCODER_SIZE.width;
	lcdCanvas.height = device.LCD_ENCODER_SIZE.height;				
	await drawLCDs(device, lcdCanvas, counter);
	
	const doThing = async () => {
		await drawLCDs(device, lcdCanvas, ++counter);
		await drawButtons(device, canvas, ++counter);
	};
	
	const nterval = window.setInterval(() => {
		doThing().catch((e) => console.error(e));
	}, 1000 / 5);
}

async function FillWhenPressedDemo() {
	
}

async function RapidFillDemo(device) {
	const doThing = async () => {
		const r = getRandomIntInclusive(0, 255);
		const g = getRandomIntInclusive(0, 255);
		const b = getRandomIntInclusive(0, 255);
		console.log('Filling with rgb(%d, %d, %d)', r, g, b);

		for (let i = 0; i < device.NUM_KEYS; i++) {
			device.fillKeyColor(i, r, g, b);
		}
	};
	const intervalFill = window.setInterval(() => {
		doThing().catch((e) => console.log(e));
	}, 1000 / 5);
}


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function demoChange() {
    if (demoSelect) {
        console.log(`Selected demo: ${demoSelect.value}`);
        if (device) {
            //await currentDemo.stop(device);
        }
        switch (demoSelect.value) {
            case 'rapid-fill':
                currentDemo = RapidFillDemo;
                break;
            case 'dom':
                currentDemo = DomImageDemo;
                break;
            case 'chase':
                currentDemo = ChaseDemo;
                break;
            case 'fill-when-pressed':
            default:
                currentDemo = FillWhenPressedDemo;
                break;
        }
        if (device) {
            await currentDemo(device);
        }
    }
}

async function openDevice(device) {
    appendLog(`Device opened. Serial: ${await device.getSerialNumber()} Firmware: ${await device.getFirmwareVersion()}`);
    device.on('down', (key) => {
        appendLog(`Key ${key} down`);
        //currentDemo.keyDown(device, key).catch(console.error);
    });
    device.on('up', (key) => {
        appendLog(`Key ${key} up`);
        //currentDemo.keyUp(device, key).catch(console.error);
    });
    device.on('encoderDown', (encoder) => {
        appendLog(`Encoder ${encoder} down`);
    });
    device.on('encoderUp', (encoder) => {
        appendLog(`Encoder ${encoder} up`);
    });
    device.on('rotateLeft', (encoder, amount) => {
        appendLog(`Encoder ${encoder} left (${amount})`);
    });
    device.on('rotateRight', (encoder, amount) => {
        appendLog(`Encoder ${encoder} right (${amount})`);
    });
    device.on('lcdShortPress', (encoder, position) => {
        appendLog(`LCD short press ${encoder} (${position.x},${position.y})`);
    });
    device.on('lcdLongPress', (encoder, position) => {
        appendLog(`LCD long press ${encoder} (${position.x},${position.y})`);
    });
    device.on('lcdSwipe', (_fromEncoder, _toEncoder, fromPosition, toPosition) => {
        appendLog(`LCD swipe (${fromPosition.x},${fromPosition.y}) -> (${toPosition.x},${toPosition.y})`);
    });
    await currentDemo(device);
    // Sample actions
    await device.setBrightness(70);
    //device.fillColor(2, 255, 0, 0)
    //device.fillColor(12, 0, 0, 255)
}

const demoSelect = document.getElementById('demo-select');
const consentButton = document.getElementById('consent-button');

let pressed = [];
let counter = 0;
let device = null;
let currentDemo = FillWhenPressedDemo;

if (consentButton) {
    const doLoad = async () => {
        // attempt to open a previously selected device.
        const devices = await (0, window.CASTouch.getStreamDecks)();
        if (devices.length > 0) {
            device = devices[0];
            openDevice(device).catch(console.error);
        }
        console.log(devices);
    };
    window.addEventListener('load', () => {
        doLoad().catch((e) => console.error(e));
    });
    const brightnessRange = document.getElementById('brightness-range');
    if (brightnessRange) {
        brightnessRange.addEventListener('input', (_e) => {
            const value = brightnessRange.value;
            if (device) {
                device.setBrightness(value).catch(console.error);
            }
        });
    }
    if (demoSelect) {
        demoSelect.addEventListener('input', () => {
            demoChange().catch(console.error);
        });
        demoChange().catch(console.error);
    }
    const consentClick = async () => {
        if (device) {
            appendLog('Closing device');
            //currentDemo.stop(device).catch(console.error);
            await device.close();
            device = null;
        }
        // Prompt for a device
        try {
            const devices = await (0, window.CASTouch.requestStreamDecks)();
            device = devices[0];
            if (devices.length === 0) {
                appendLog('No device was selected');
                return;
            }
        }
        catch (error) {
            appendLog(`No device access granted: ${error}`);
            return;
        }
        openDevice(device).catch(console.error);
    };
    consentButton.addEventListener('click', () => {
        consentClick().catch((e) => console.error(e));
    });
    appendLog('Page loaded');
}