var express = require('express');

var app = express();

app.all('/', function(peticion, respuesta){
    respuesta.send("Hola");
});

app.get('/acerca', function(peticion, respuesta){
    respuesta.send("Acerca de");
});

app.post('/form', function(peticion, respuesta){
    respuesta.send("Método Post");
});

app.delete('/trash', function(peticion, respuesta){
    respuesta.send("Método Delete");
});

app.put('/put', function(peticion, respuesta){
    respuesta.send("Método put");
});

var server = app.listen(3000, function(){

});