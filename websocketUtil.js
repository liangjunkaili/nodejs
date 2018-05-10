const WebSocket = require('ws');
const server = WebSocket.Server;

const wss = new server({
  port:3000
});

wss.on('connection',function(ws){
  console.log('server connection');
  ws.on('message',function(message){
    console.log(`server recevied: ${ message }`);
    ws.send('echo:${message}',(err)=>{
      if(err){
        console.log('server err:${err}');
      }
    });
  })
});
