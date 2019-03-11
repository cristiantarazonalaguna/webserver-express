'use strict'

const http = require('http');

http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'aplication/json'});
    let salida ={
        nombre:'Cristhian',
        edad: 34,
        url: req.url,
    }
    res.write(JSON.stringify(salida));
    res.end();
})
.listen(8089);

console.log('Escuchando en el puerto 8089');