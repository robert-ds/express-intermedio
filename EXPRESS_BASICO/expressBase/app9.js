var fs = require('fs');

function copiarArchivo(rutaOriginal, nuevaRuta, archivoParaCopiar) {
	fs.copyFile(rutaOriginal + '/' + archivoParaCopiar, nuevaRuta + '/' + archivoParaCopiar,
		(error) => {

			if (error) {
				console.log("Ha Ocurrido Un Error");
			} else {
				eliminarArchivo(rutaOriginal, archivoParaCopiar);
			}

		});
}

function eliminarArchivo(rutaOriginal, archivoParaCopiar) {
	fs.unlink(rutaOriginal + '/' + archivoParaCopiar, (error) => {
		if (error) {
			console.log("Error Al Eliminar el Archivo");
		} else {
			console.log("El Archivo ha Sido Movido Exitosamente");
		}
	});
}

copiarArchivo('./archivos', 'Otros_archivos', 'confirmacion.txt');