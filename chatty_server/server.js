// server.js

const express = require('express');
const SocketServer = require('ws');

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
  // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on Port ${PORT}`));

// Create the WebSockets server
const wss = new SocketServer.Server({ server });

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on('connection', ws => {
  console.log('Client connected');

  ws.on('message', message => {
    let msg = JSON.parse(message);
    msg.type = 'textMessage';

    if (msg.content[0] === '/') {
      const parts = msg.content.split(' ');
      const cmd = parts[0].replace('/', '').toLowerCase();
      msg.content = parts.slice(1).join(' ');

      switch (cmd) {
        case 'me':
          msg.type = 'meMessage';
          break;
        default:
          msg.type = 'errorMessage';
          break;
      }
    }

    // console.log(`User ${msg.username} says "${msg.content}" with id ${msg.id}`);
    wss.clients.forEach(client => {
      if (client.readyState === SocketServer.OPEN) {
        client.send(JSON.stringify(msg));
      }
    });
  });

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => console.log('Client disconnected'));
});
