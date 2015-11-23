    db   		    = 	require('./database'),
	date 			= 	new Date(),
    db.conectaDatabase();

var getQuestions =  function(req, res)
{
		db.queryMysql("select numpregunta, pregunta, opcion1, opcion2, opcion3, opcion4 from preguntas order by rand();", function(err, data){
			if (err) throw err;
			res.json(data);
		});
};

var isValid =  function(req, res)
{
	devuelve(req.body, 1,  function(err, data){
			res.json(data);
	});

};

var devuelve = function(data, tipo, callback)
{
	db.queryMysql("SELECT correcta AS respuestaCorrecta, ( correcta =" + data.respuesta + ") AS correcto FROM preguntas WHERE numpregunta = " + data.numPregunta +";", function(err, data){
			if (err) throw err;
			callback(err, data);
		});
}

var notFound404 = function(req, res)
{
	res.status(404).send("Página no encontrada :( en el momento");
};

//Exportar las rutas...
module.exports.getQuestions = getQuestions;
module.exports.isValid = isValid;
module.exports.notFound404 = notFound404;