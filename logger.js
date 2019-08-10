'use strict'

const net = ('net');

const client = new net.Socket();

client.on('data', function(data){
    let payload = JSON.parse(data);
});

client.on('close', function(){
    console.log('connection closed')
})