'use strict'

var express = require('express');

var app = express();

const hbs = require('hbs');

const port = process.env.PORT || 3000
app.use(express.static(__dirname+ '/public'));

hbs.registerPartials(__dirname + '/views/parciales');

app.set('View engine','hbs')

//Helpers

hbs.registerHelper('getAnio',()=>{
    return new Date().getFullYear();
})

hbs.registerHelper('capitalizar',(texto)=>{
    let palabras = texto.split('');
    palabras.forEach((palabra,ind) => {
        palabras[ind] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();

    });

    return palabras.join('');
})

app.get('/', function(req,res){
    res.render('home.hbs',{
        nombre:'Cristhian',
    })
});

app.get('/data',(req,res)=>{

    res.render('about.hbs',{
        nombre:'Cristhian',
    });
})

app.listen(port, ()=>{
    console.log(`escuchando peticiones en el puerto ${port}`);
});