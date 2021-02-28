var fs = require('fs');

//Forma Adecuada de Leer Archivos Json
fs.readFile('./libros.json', (error, datos) => {
	console.log(JSON.parse(datos).Autor);
});