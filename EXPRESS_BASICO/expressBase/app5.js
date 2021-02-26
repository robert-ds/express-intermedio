var fs = require('fs');

//Inserta texto sin eliminar los anteriores
fs.appendFile( './archivos/textoNew.txt', ' \nNuevos Datos 2', (error)=>{

	if(error){
		console.log("Error al Escribir el Archivo")
	}else{
		console.log("Archivo Modificado Exitosamente");
	}

} );

//Escribe Datos en el Archivo y lo Crea si no Existe
/* fs.writeFile( './archivos/textoNew.txt', ' \nNuevos Datos 2', (error)=>{

	if(error){
		console.log("Error al Escribir el Archivo")
	}else{
		console.log("Archivo Modificado Exitosamente");
	}

} ); */