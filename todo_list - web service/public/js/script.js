window.onload = function()
{
		//Para los servicios que se consumirán...
	
	var nomServicios = [
	                        {
	                            servicio 	: 	"Trae todas las tareas",
	                            urlServicio	: 	"getAllTask",
	                            metodo		: 	"GET"
	                        },
	                        {
	                            servicio 	: 	"Crear una nueva tarea",
	                            urlServicio	: 	"createTask",
	                            metodo		: 	"POST"
	                        },
	                        {
	                            servicio 	: 	"Editar una tarea",
	                            urlServicio	: 	"updateTask",
	                            metodo		: 	"PUT"
	                        },
	                        {
	                            servicio 	: 	"Eliminar Tarea",
	                            urlServicio	: 	"deleteTask",
	                            metodo		: 	"DELETE"
	                        },
	                        {
	                            servicio 	: 	"Trae una sola tarea",
	                            urlServicio	: 	"getTask",
	                            metodo		: 	"GET"
	                        }
	                    ];

	var consumeServicios = function(tipo, val, callback)
	{
	    var servicio = {
	                        url 	: nomServicios[tipo - 1].urlServicio,
	                        metodo	: nomServicios[tipo - 1].metodo,
	                        datos 	: ""
	                    };
	    if(tipo === 4 || tipo === 5)
	    {
	        servicio.url += "/" + val;
	    }
	    else
	    {
	        servicio.datos = val !== "" ? JSON.stringify(val) : "";
	    }
	    //Invocar el servicio...	    
	    $.ajax(
	    {
	        url 		: servicio.url,
	        type 		: servicio.metodo,
	        data 		: servicio.datos,
	        dataType 	: "json",
	        contentType: "application/json; charset=utf-8"
	    }).done(function(data)
	    {
	        listaTareas = data;
	        imprimeUsuarios();
	    });
	};

	var imprimeUsuarios = (function imprimeUsuarios()
	{
		var txt = "";
		var k=0;
		for(var i = 0; i < listaTareas.length; i++)
		{
			k=1;
			var datosTarea = listaTareas[i];
			if(datosTarea.finish == false){
				txt += "<div class='tarea' id='activa'>";
				txt += "<center>"+(datosTarea.task)+"</center>";
				txt += "<img src = 'img/terminada.png' border = '0' id = 'e_"+i+"'/>";
				txt += "<img align='right' src = 'img/elimina.png' border = '0' id = 'd_"+i+"'/>";
				txt += "</div>";
			}
			else{
				txt += "<div class='tarea' id='desactiva'>";
				txt += "<center>"+(datosTarea.task)+"</center>";
				txt += "<img src = 'img/terminada2.png' border = '0' id = 'e_"+i+"'/>";
				txt += "<img align='right' src = 'img/elimina2.png' border = '0' id = 'd_"+i+"'/>";
				txt += "</div>";
			}
			
		}

		if(k == 0){
			var datosTarea = listaTareas;
			if(datosTarea.datos.finish == false){
				txt += "<div class='tarea' id='activa'>";
				txt += "<center>"+(datosTarea.datos.task)+"</center>";
				txt += "<img src = 'img/terminada.png' border = '0' id = 'e_"+0+"'/>";
				txt += "<img align='right' src = 'img/elimina.png' border = '0' id = 'd_"+0+"'/>";
				txt += "</div>";
			}
			else{
				txt += "<div class='tarea' id='desactiva'>";
				txt += "<center>"+(datosTarea.datos.task)+"</center>";
				txt += "<img src = 'img/terminada2.png' border = '0' id = 'e_"+0+"'/>";
				txt += "<img align='right' src = 'img/elimina2.png' border = '0' id = 'd_"+0+"'/>";
				txt += "</div>";
			}
			nom_div("imprime").innerHTML = txt;
			//Editar...
			nom_div("e_" + 0).addEventListener('click', function(event)
			{
				var ind = event.target.id.split("_")[1];
				var idUser = datosTarea.datos.task;
				ind = buscaIndice(idUser);

				var datos = {
				  "id": ind,
			      "field": "finish",
			      "data": true,
			      "finish": true
				};

				consumeServicios(3,datos,"");
				consumeServicios(1,"","");

				limpiarCampos();

			});

			//Eliminar...
			nom_div("d_" + 0).addEventListener('click', function(event)
			{
				var ind = event.target.id.split("_")[1];
				var idUser = datosTarea.datos.task;
				swal({   
				title: "¿Está segur@ que desea eliminar esta tarea?",   
				text: "Se eliminara permanentemente!",   
				type: "warning",   
				showCancelButton: true,   
				confirmButtonColor: "#DD6B55",   
				confirmButtonText: "Eliminar!",   
				closeOnConfirm: false }, 
				function(){   
					ind = buscaIndice(idUser);

					consumeServicios(4,ind,"");
					consumeServicios(1,"","");

					limpiarCampos();
					swal("Deleted!", "Your imaginary file has been deleted.", "success"); 
				});

			});
		}else{
			nom_div("imprime").innerHTML = txt;
		}
		//Poner las acciones de editar y eliminar...
		for(var i = 0; i < listaTareas.length; i++)
		{
			
			//Editar...
			nom_div("e_" + i).addEventListener('click', function(event)
			{
				var ind = event.target.id.split("_")[1];
				var idUser = listaTareas[ind].task;
				ind = buscaIndice(idUser);

				var datos = {
				  "id": ind,
			      "field": "finish",
			      "data": true,
			      "finish": true
				};

				consumeServicios(3,datos,"");
				consumeServicios(1,"","");

				limpiarCampos();

			});

			//Eliminar...
			nom_div("d_" + i).addEventListener('click', function(event)
			{
				var ind = event.target.id.split("_")[1];
				var idUser = listaTareas[ind].task;
				swal({   
				title: "¿Está segur@ que desea eliminar esta tarea?",   
				text: "Se eliminara permanentemente!",   
				type: "warning",   
				showCancelButton: true,   
				confirmButtonColor: "#DD6B55",   
				confirmButtonText: "Eliminar!",   
				closeOnConfirm: false }, 
				function(){   
					ind = buscaIndice(idUser);

					consumeServicios(4,ind,"");
					consumeServicios(1,"","");

					limpiarCampos();
					swal("Deleted!", "Your imaginary file has been deleted.", "success"); 
				});

			});
		}

		$('#paginador').smartpaginator({ totalrecords: listaTareas.length,
                                        recordsperpage: 3,
                                        datacontainer: 'imprime', 
                                        dataelement: 'div',
                                        theme: 'black' });

		return imprimeUsuarios;
	})

	var indEdita = -1; //El índice de Edición...
	var elementos = ["textbox"];


	consumeServicios(1,"","");

	
	
	//Imprimer usuarios en pantalla...
	
	//Dada la identificación, buscar la posición donde se encuentra almacenado...
	var buscaIndice = function(id)
	{
		var indice = -1;
		for(var i in listaTareas)
		{
			if(listaTareas[i].task === id)
			{
				indice = listaTareas[i].id;
				break;
			}
		}
		return indice;
	}

	//Limpia los campos del formulario...
	var limpiarCampos = function()
	{
		indEdita = -1; //No se está editando nada...
		for(var i = 0; i < elementos.length; i++)
		{
			nom_div(elementos[i]).value = "";	
		}
	}

	//Saber si un usuario ya existe, bien por identificación o por e-mail...
	function existeTarea(id)
	{
		var existe = 0; //0 Ningún campo existe...
		for(var i in listaTareas)
		{
			//Cédula...
			if(i !== indEdita)
			{
				if(listaTareas[i].task.trim().toLowerCase() === id.trim().toLowerCase())
				{
					existe = 1; 
					break;
				}
			}
		}
		return existe;
	}

	//Acciones sobre el botón guardar...
	nom_div("guarda").addEventListener('click', function(event)
	{
		var correcto = true;
		var valores = [];
		for(var i = 0; i < elementos.length; i++)
		{
			if(nom_div(elementos[i]).value === "")
			{
				alert("Digite una tarea");
				nom_div(elementos[i]).focus();
				correcto = false;
				break;
			}
			else
			{
				valores[i] = nom_div(elementos[i]).value;
			}
		}
		if(correcto)
		{
			var existeDatos = existeTarea(valores[0]);
			if(existeDatos === 0) //No existe...
			{
				if(indEdita < 0)
				{
					var datos = {
					  "task": valores[0],
					  "finish": false
					};

					consumeServicios(2,datos,"");
					consumeServicios(1,"","");
				}
				//else
				//{
				//	listaTareas[indEdita].identificacion = valores[0];
				//}

				localStorage.setItem("listado", JSON.stringify(listaTareas));
				imprimeUsuarios();
				limpiarCampos();

			}
			else
			{
				alert("Ya existe la tarea " + valores[0] + ".");
				nom_div(elementos[0]).focus();
			}
		}

	});


	//Acciones sobre el botón buscar...
	nom_div("buscar").addEventListener('click', function(event)
	{
		var correcto = true;
		var valores = [];
		var idUser = "";

		if(nom_div("busca").value === "")
		{
			alert("Digite el nombre de una tarea");
			nom_div("busca").focus();
			correcto = false;
		}
		else
		{
			valores = nom_div("busca").value;
			idUser = valores;
		}

		if(correcto)
		{
			var existeDatos = existeTarea(valores);
			if(existeDatos === 1) //existe...
			{
				ind = buscaIndice(idUser);
				consumeServicios(5,ind,"");
				limpiarCampos();
			}
			else{
				swal("La tarea no existe")
			}
		}
		

	});

	//Accedera los elementos de HTML...
	function nom_div(div)
	{
		return document.getElementById(div);
	}

}