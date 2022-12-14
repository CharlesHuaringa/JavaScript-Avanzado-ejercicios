const http = require('http')

const hostname = '127.0.0.1'
const port = 3000
let nombre_completo = "Charles Hugo Huaringa Valverde"

const server = http.createServer((req,res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.end(`${nombre_completo}`);
});

server.listen(port, hostname, () =>{
    console.log(`El servidor se esta ejecutando en http://${hostname}:${port}/`);
});
console.log(`${nombre_completo}`)


// const express = require('express')

// const app = express()
// const port = 3000
// let number = 50 + 50

// app.get('/' ,(req, res)=>{
//     res.send(`El resultado de la operación Aritmética es ${number}`)
// })

// app.listen(port,() =>{
//     console.log(`El servidor esta escuchando en http://Localhost:${port}/`);
// });
// console.log(`El resultado de la operación Aritmética es ${number}`)