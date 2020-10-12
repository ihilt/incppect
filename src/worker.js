var ws = new WebSocket('ws://localhost:5000/incppect');

ws.binaryType = 'arraybuffer';

ws.onmessage = function(evt) {
    let data = {type: 'message', data: evt.data};
    postMessage(data);
};

ws.onerror = function(evt) {
    let data = {type: 'error', data: evt.data};
    postMessage(data);
};

ws.onopen = function(evt) {
    let data = {type: 'open', data: evt.data};
    postMessage(data);
};

ws.onclose = function(evt) {
    let data = {type: 'close', data: evt.data};
    postMessage(data);
};

onmessage = function(evt) {
    if (ws.readyState == ws.OPEN) {
        ws.send(evt.data);
    }
};
