var fs = require('fs');

fs.readFile('./archivos/texto.txt1', 'utf8', (error, datos)=>{
	
	if(error){
		console.log("Error de Lectura");
		throw error;
	}else{
		console.log(datos);
	}

});