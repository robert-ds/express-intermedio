var fs = require('fs');

//Procesos Asincronos Encadenados
fs.copyFile('./archivos/textoNew.txt', './Otros_archivos/textoNew.txt', (error)=>{

	if(error){
		console.log("Ha Ocurrido un Error");
	}else{
		
		fs.writeFile('./archivos/confirmacion.txt', 'Archivo copiado Exitosamente', (error)=>{
			console.log("Proceso Finalizado");
		});

	}

});