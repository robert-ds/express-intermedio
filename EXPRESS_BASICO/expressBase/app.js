var fs = require('fs');

//Lectura de Carpetas
fs.readdir('./archivos', {withFileTypes:true}, (error, items)=>{
	console.log(items);
});