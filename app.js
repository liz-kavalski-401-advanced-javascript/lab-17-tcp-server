'use strict';
//
const net =require ('net');
//const fs = require('./files/test.txt');

const client= new net.Socket();


client.connect(3001,'localhost',() => {})



const events = ['read','create','save','delete', 'error']

// server.on('connection')
setInterval(()=>{
  let events =events[Math.floor(Math.random()* events.length)];
  client.write(`${events} An Event of ${events} just happen`)
},1000);

client.on('close',function(){
  console.log('connection has closed for the day. Have a nice day!')
})




// const alterFile = (file) => {
//   fs.readFile( file, (err, data) => {
//     if(err) { throw err; }
//     let text = data.toString().toUpperCase();
//     fs.writeFile( file, Buffer.from(text), (err, data) => {
//       if(err) { throw err; }
//       console.log(`${file} saved`);
//     });
//   });
// };

// let file = process.argv.slice(2).shift();
// alterFile(file);
