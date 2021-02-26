var fs = require('fs');

//Eliminar Archivos del Sistema
fs.unlink('./archivos/archivo_incorrecto.txt', (error)=>{
	
	if(error){
		console.log("Error al Eliminar El Archivo");
		throw error;
	}else{
		console.log("Archivo Eliminado Exitosamente");
	}
});