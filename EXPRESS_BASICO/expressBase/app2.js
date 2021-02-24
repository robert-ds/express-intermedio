var fs = require('fs');

//var contenido = fs.readFileSync('./archivos/Intro.mp4', 'utf8');

//Lectura Asincrona de Archivos - Callback
var contenido = fs.readFile('./archivos/texto.txt', 'utf8', function(error, datos){
	console.log(datos);
});

console.log(contenido);