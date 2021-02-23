var http = require('http');

var servidor = http.createServer(function(peticion, respuesta){
	respuesta.writeHead(200, {'Content-type':'text/html'});
	respuesta.write("Respuesta para la direccion" + peticion.url);
	console.log("Petición Web");
});

servidor.listen(3000);

console.log("Ejecuntando Servidor Nodejs");