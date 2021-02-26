var fs = require('fs');

//Copiar Archivo en una ruta
fs.copyFile('./archivos/textoNew.txt', './archivos/archivoNew.txt', (error)=>{
	if(error){
		console.log("Error al Copiar");
		throw error;
	}else{
		console.log("Archivo Copiado Exitosamente");
	}
});