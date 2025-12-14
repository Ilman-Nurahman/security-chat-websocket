const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });


let receiverSocket = null;


wss.on('connection', (ws) => {
    ws.on('message', (msg) => {
        const data = JSON.parse(msg);


        if (data.type === 'receiver') {
            receiverSocket = ws;
            console.log('Receiver connected');
        }


        if (data.type === 'message' && receiverSocket) {
            receiverSocket.send(JSON.stringify(data.payload));
        }
    });
});


console.log('WebSocket server running on ws://localhost:8080');