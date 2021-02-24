var express = require('express');
var router = express.Router();

router.get("/", function(peticion, respuesta){
	respuesta.render('dinamico');
});

router.get("/:datoURL/:id", function(peticion, respuesta){
	
	respuesta.render('dinamico',{
		datos:{
			titulo:peticion.params.datoURL,
			id:peticion.params.id
		}
	} );
	///respuesta.send("Informacion Dinamica: " +  peticion.params.datoURL);
});

module.exports = router;