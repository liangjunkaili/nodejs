const WebSocket = require('ws');
// let ws = new WebSocket('ws://localhost:3000/test');

// ws.on('open',function(){
//   console.log('client open()');
//   ws.send('hello');
// })

// ws.on('message',function(message){
//   console.log(`[CLIENT] Received: ${message}`);
// })
var ws = new WebSocket('ws://localhost:3000/ws/chat');

ws.onmessage = function (event) {
  var data = event.data;
  console.log(data);
  var msg = JSON.parse(data);
  if (msg.type === 'list') {
    vmUserList.users = msg.data;
  } else if (msg.type === 'join') {
    addToUserList(vmUserList.users, msg.user);
    addMessage(vmMessageList.messages, msg);
  } else if (msg.type === 'left') {
    removeFromUserList(vmUserList.users, msg.user);
    addMessage(vmMessageList.messages, msg);
  } else if (msg.type === 'chat') {
    addMessage(vmMessageList.messages, msg);
  }
};

var vmMessageList = new Vue({
  el: '#message-list',
  data: {
    messages: []
  }
});

var vmUserList = new Vue({
  el: '#user-list',
  data: {
    users: []
  }
});
