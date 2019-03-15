# chatter App

A single-page chat application. Multiple clients sharing the same server can have usernames, send messages and actions to each other.

This was a week-long project to introduce and better understand how React and Websockets work.

### Setup

Install the dependencies and start the server.

```
npm install
npm start
open http://localhost:3000
```

### Dependencies

- React
- Webpack
- [babel-loader](https://github.com/babel/babel-loader)
- [webpack-dev-server](https://github.com/webpack/webpack-dev-server)

---

### Using chatter

![Main application: Clients are able to have a username (which can be altered) send messages to each other, and describe actions.](https://github.com/jfcon/chatter/blob/master/docs/chatter%20example.png?raw=true)

Main application: Clients are able to have a username (which can be altered) send messages to each other, and describe actions. Messages are displayed to all clients who have a window open on <http://localhost:3000>.

To create an action (or meMessage) post, the user begins typing in the message field with '/me '. Any text that follows will be treated as an action, and will be displayed accordingly.

Entering an empty message will prompt an alert notifying the user that they must have value inside the message field. Empty messages will not be sent to the server.

---

![Multiple clients: The amount of clients (or users) on the server will be displayed in the top-right corner of the app. Every time a connection to the server is opened or closed, the count will update accordingly. Image: One user on the server.](https://github.com/jfcon/chatter/blob/master/docs/Single%20online%20user.png?raw=true)
![Image: Multiple users on the server.](https://github.com/jfcon/chatter/blob/master/docs/multiple%20online%20users.png?raw=true)

Multiple clients: The amount of clients (or users) on the server will be displayed in the top-right corner of the app. Every time a connection to the server is opened or closed, the count will update accordingly.]
