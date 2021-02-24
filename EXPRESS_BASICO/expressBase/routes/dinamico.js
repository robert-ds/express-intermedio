var express = require('express');
var router = express.Router();

router.get("/", function(peticion, respuesta){
	respuesta.send("Informacion Dinamica");
});

router.get("/:datoURL", function(peticion, respuesta){
	respuesta.send("Informacion Dinamica: " +  peticion.params.datoURL);
});

module.exports = router;