"use strict";
var express 		= 	require("express"),
	app				= 	express(),
	cons 			=	require("consolidate"),
	puerto 			= 	process.env.PORT || 3000,
	db   			= 	require('./modulos/database'),
	rutas			=	require('./modulos/rutas'),
	bodyParser  	=   require('body-parser');

	db.conectaDatabase();

	//consolidate integra swig con express...
	app.engine("html", cons.swig); //Template engine...
	app.set("view engine", "html");
	app.set("views", __dirname + "/vistas");
	app.use(express.static('public'));


    //Para indicar que se envía y recibe información por medio de Json...
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));

	app.get("/", function(req, res)
	{
		res.render("index", {
			titulo 	:  	"Trivia"
		});
	});

	//Traer todas las tareas...
	app.get('/getQuestions', rutas.getQuestions);

	app.post('/isValid', rutas.isValid);


	//Para cualquier url que no cumpla la condición...
	app.get("*", rutas.notFound404);
	//Iniciar el Servidor...
	var server = app.listen(puerto, function(err) {
	   if(err) throw err;
	   var message = 'Servidor corriendo en @ http://localhost:' + server.address().port;
	   console.log(message);
	});
