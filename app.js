'use strict';
//
const net =require ('net');

const client= new net.Socket();


client.connect(3001,'localhost',() => {})



const events = ['read', 'save','error']

server.on('connection')

client.write(`${event} An Event of ${event} just happen`)

// const fs = require('fs');

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
