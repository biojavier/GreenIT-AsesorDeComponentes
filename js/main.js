var controller = (function (jsonDB) {
	
	//esta función evita que se carguen elementos repetidos 
	hasValue = function(element, value) {
		var results = true;
			for (var i=element.options.length-1; i >= 0; i--) (function() {
        if (element.options[i].value == value) (function() { 
					results = false;
        }());
    }());
    return (results);
	};
	
	
	removeOptions = function (selectbox){
    var i;
    for(i=selectbox.options.length-1;i>=0;i--){
        selectbox.remove(i);
    }
	}

	//este filtro se aplica para el resto de los elementos de cada tipo(procesador, fuente, disco, etc).
	filtroPrivate = function(valor){
		console.log("cambia!!!");
		switch(valor){
			//en caso de que seleccione la marca del procesador
			case 'marcaProcesador':
				var marcas = document.getElementsByName("marcasRadio");
				console.log(marcas);
				for(var i = 0; i < marcas.length; i++) {
					if(marcas[i].checked == true) {
						marcaSeleccionada = marcas[i].value;
					}
				}				
			
				elemDelDOM2 = document.getElementById("nucleosProcesador");	
				elemDelDOM3 = document.getElementById("velocidadProcesador");	
				elemDelDOM4 = document.getElementById("cacheProcesador");	
				removeOptions(document.getElementById("nucleosProcesador"));
				removeOptions(document.getElementById("velocidadProcesador"));
				removeOptions(document.getElementById("cacheProcesador"));
				var i = 0;	
				for(i=0;i<parseInt(jsonDB.producto.cantidadProcesadores);i++){
					var opcion2 = document.createElement("option");
					var opcion3 = document.createElement("option");
					var opcion4 = document.createElement("option");
					if(jsonDB.producto.procesadores[i].marca == marcaSeleccionada){
						console.log("entroo");
						opcion2.text = opcion2.value = jsonDB.producto.procesadores[i].nucleos;
						if(hasValue(elemDelDOM2, opcion2.text)){
							elemDelDOM2.add(opcion2);
						}
						opcion3.text = opcion3.value = jsonDB.producto.procesadores[i].velocidad;
						if(hasValue(elemDelDOM3, opcion3.text)){
							elemDelDOM3.add(opcion3);
						}
						opcion4.text = opcion4.value = jsonDB.producto.procesadores[i].cache;
						if(hasValue(elemDelDOM4, opcion4.text)){
							elemDelDOM4.add(opcion4);
						}
					}
				}
				break;	
			
			//en caso de que cambie la cantidad de nucleos 
			case 'cantidadNucleos':
				nucleosProcesador = document.getElementById("nucleosProcesador").value;
				elemDelDOM3 = document.getElementById("velocidadProcesador");	
				elemDelDOM4 = document.getElementById("cacheProcesador");	
				removeOptions(document.getElementById("velocidadProcesador"));
				removeOptions(document.getElementById("cacheProcesador"));
				var i = 0;	
				for(i=0;i<parseInt(jsonDB.producto.cantidadProcesadores);i++){
					var opcion3 = document.createElement("option");
					var opcion4 = document.createElement("option");
					if(jsonDB.producto.procesadores[i].nucleos == nucleosProcesador){
						console.log("entroo");
						opcion3.text = opcion3.value = jsonDB.producto.procesadores[i].velocidad;
						if(hasValue(elemDelDOM3, opcion3.text)){
							elemDelDOM3.add(opcion3);
						}
						opcion4.text = opcion4.value = jsonDB.producto.procesadores[i].cache;
						if(hasValue(elemDelDOM4, opcion4.text)){
							elemDelDOM4.add(opcion4);
						}
					}
				}
				break;	
			
			//en caso de que cambie la velocidad del procesador 
			case 'velocidadProcesador':
				velocidadProcesador = document.getElementById("velocidadProcesador").value;
				elemDelDOM2 = document.getElementById("nucleosProcesador");	
				elemDelDOM4 = document.getElementById("cacheProcesador");	
				removeOptions(document.getElementById("nucleosProcesador"));
				removeOptions(document.getElementById("cacheProcesador"));
				var i = 0;	
				for(i=0;i<parseInt(jsonDB.producto.cantidadProcesadores);i++){
					var opcion2 = document.createElement("option");
					var opcion4 = document.createElement("option");
					if(jsonDB.producto.procesadores[i].velocidad == velocidadProcesador){
						console.log("entroo");
						opcion2.text = opcion2.value = jsonDB.producto.procesadores[i].nucleos;
						if(hasValue(elemDelDOM2, opcion2.text)){
							elemDelDOM2.add(opcion2);
						}
						opcion4.text = opcion4.value = jsonDB.producto.procesadores[i].cache;
						if(hasValue(elemDelDOM4, opcion4.text)){
							elemDelDOM4.add(opcion4);
						}
					}
				}
				break;	
			
			//en caso de que cambie la cache del procesador
			case 'cacheProcesador':
				cacheProcesador = document.getElementById("cacheProcesador").value;
				elemDelDOM2 = document.getElementById("nucleosProcesador");	
				elemDelDOM3 = document.getElementById("velocidadProcesador");	
				removeOptions(document.getElementById("nucleosProcesador"));
				removeOptions(document.getElementById("velocidadProcesador"));
				var i = 0;	
				for(i=0;i<parseInt(jsonDB.producto.cantidadProcesadores);i++){
					if(jsonDB.producto.procesadores[i].marca == marcaSeleccionada){
						var opcion2 = document.createElement("option");
						var opcion3 = document.createElement("option");
						console.log("entroo");
						opcion2.text = opcion2.value = jsonDB.producto.procesadores[i].nucleos;
						if(hasValue(elemDelDOM2, opcion2.text)){
							elemDelDOM2.add(opcion2);
						}
						opcion3.text = opcion3.value = jsonDB.producto.procesadores[i].velocidad;
						if(hasValue(elemDelDOM3, opcion3.text)){
							elemDelDOM3.add(opcion3);
						}
					}
				}
				break;	
				
			//en caso de que cambie la marca de la memoria ram
			case 'marcaMemoria':
				marcaMemoria = document.getElementById("marcaRamAdvSeleccion").value;
				console.log("cambia marca" + marcaMemoria);
				elemDelDOM3 = document.getElementById("cantidadMemoriaRam");	
				elemDelDOM4 = document.getElementById("velocidadMemoriaRam");	
				removeOptions(document.getElementById("cantidadMemoriaRam"));
				removeOptions(document.getElementById("velocidadMemoriaRam"));
				var i = 0;	
				for(i=0;i<parseInt(jsonDB.producto.cantidadMemoriasRam);i++){
					if(jsonDB.producto.memoriasRam[i].nombre == marcaMemoria){
						var opcion3 = document.createElement("option");
						var opcion4 = document.createElement("option");
						opcion3.text = opcion3.value = jsonDB.producto.memoriasRam[i].capacidad;
						if(hasValue(elemDelDOM3, opcion3.text)){
							elemDelDOM3.add(opcion3);
						}
						opcion4.text = opcion4.value = jsonDB.producto.memoriasRam[i].velocidad;
						if(hasValue(elemDelDOM4, opcion4.text)){
							elemDelDOM4.add(opcion4);
						}
					}
				}
				break;	
				
			//en caso de que cambie el tamaño de la memoria ram
			case 'cantidadMemoria':
				cantidadMemoria = document.getElementById("cantidadMemoriaRam").value;
				elemDelDOM2 = document.getElementById("marcaRamAdvSeleccion");	
				elemDelDOM4 = document.getElementById("velocidadMemoriaRam");	
				removeOptions(document.getElementById("marcaRamAdvSeleccion"));
				removeOptions(document.getElementById("velocidadMemoriaRam"));
				var i = 0;	
				for(i=0;i<parseInt(jsonDB.producto.cantidadMemoriasRam);i++){
					if(jsonDB.producto.memoriasRam[i].capacidad= cantidadMemoria){
						var opcion2 = document.createElement("option");
						var opcion4 = document.createElement("option");
						opcion2.text = opcion2.value = jsonDB.producto.memoriasRam[i].nombre;
						if(hasValue(elemDelDOM2, opcion2.text)){
							elemDelDOM2.add(opcion2);
						}
						opcion4.text = opcion4.value = jsonDB.producto.memoriasRam[i].velocidad;
						if(hasValue(elemDelDOM4, opcion4.text)){
							elemDelDOM4.add(opcion4);
						}
					}
				}		
				break;	
			
			//en caso de que cambie la velocidad de la memoria ram
			case 'velocidadMemoria':
				velocidadMemoria = document.getElementById("velocidadMemoriaRam").value;
				elemDelDOM2 = document.getElementById("marcaRamAdvSeleccion");	
				elemDelDOM3 = document.getElementById("cantidadMemoriaRam");	
				removeOptions(document.getElementById("marcaRamAdvSeleccion"));
				removeOptions(document.getElementById("cantidadMemoriaRam"));
				var i = 0;	
				for(i=0;i<parseInt(jsonDB.producto.cantidadMemoriasRam);i++){
					if(jsonDB.producto.memoriasRam[i].velocidad == velocidadMemoria){
						var opcion2 = document.createElement("option");
						var opcion3 = document.createElement("option");
						opcion2.text = opcion2.value = jsonDB.producto.memoriasRam[i].nombre;
						if(hasValue(elemDelDOM2, opcion2.text)){
							elemDelDOM2.add(opcion2);
						}
						opcion3.text = opcion3.value = jsonDB.producto.memoriasRam[i].capacidad;
						if(hasValue(elemDelDOM3, opcion3.text)){
							elemDelDOM3.add(opcion3);
						}
					}						
				}
				break;	
			
			//en caso de que cambie la marca del disco
			case 'marcaDisco':
				marcaDisco = document.getElementById("marcaDisco").value;
				elemDelDOM3 = document.getElementById("capacidadDisco");	
				elemDelDOM4 = document.getElementById("tipoDisco");	
				elemDelDOM5 = document.getElementById("cacheDisco");	
				removeOptions(document.getElementById("capacidadDisco"));
				removeOptions(document.getElementById("tipoDisco"));
				removeOptions(document.getElementById("cacheDisco"));
				var i = 0;	
				for(i=0;i<parseInt(jsonDB.producto.cantidadDiscos);i++){
					if(jsonDB.producto.discos[i].nombre == marcaDisco){
						var opcion3 = document.createElement("option");
						var opcion4 = document.createElement("option");
						var opcion5 = document.createElement("option");
						opcion3.text = opcion3.value = jsonDB.producto.discos[i].capacidad;
						if(hasValue(elemDelDOM3, opcion3.text)){
							elemDelDOM3.add(opcion3);
						}						
						opcion4.text = opcion4.value = jsonDB.producto.discos[i].tipo;
						if(hasValue(elemDelDOM4, opcion4.text)){
							elemDelDOM4.add(opcion4);
						}						
						opcion5.text = opcion5.value = jsonDB.producto.discos[i].cache;
						if(hasValue(elemDelDOM5, opcion5.text)){
							elemDelDOM5.add(opcion5);
						}										
					}
				}
				break;	
			
			//en caso de que cambie la capacidad del disco
			case 'capacidadDisco':
				capacidadDisco = document.getElementById("capacidadDisco").value;
				elemDelDOM2 = document.getElementById("marcaDisco");	
				elemDelDOM4 = document.getElementById("tipoDisco");	
				elemDelDOM5 = document.getElementById("cacheDisco");	
				removeOptions(document.getElementById("marcaDisco"));
				removeOptions(document.getElementById("tipoDisco"));
				removeOptions(document.getElementById("cacheDisco"));
				var i = 0;	
				for(i=0;i<parseInt(jsonDB.producto.cantidadDiscos);i++){
					if(jsonDB.producto.discos[i].capacidad == capacidadDisco){
						var opcion2 = document.createElement("option");
						var opcion4 = document.createElement("option");
						var opcion5 = document.createElement("option");
						opcion2.text = opcion2.value = jsonDB.producto.discos[i].nombre;
						if(hasValue(elemDelDOM2, opcion2.text)){
							elemDelDOM2.add(opcion2);
						}
						opcion4.text = opcion4.value = jsonDB.producto.discos[i].tipo;
						if(hasValue(elemDelDOM4, opcion4.text)){
							elemDelDOM4.add(opcion4);
						}						
						opcion5.text = opcion5.value = jsonDB.producto.discos[i].cache;
						if(hasValue(elemDelDOM5, opcion5.text)){
							elemDelDOM5.add(opcion5);
						}										
					}
				}
				break;	
			
			//en caso de que cambie el tipo de disco
			case 'tipoDisco':
				tipoDisco = document.getElementById("tipoDisco").value;
				elemDelDOM2 = document.getElementById("marcaDisco");	
				elemDelDOM3 = document.getElementById("capacidadDisco");	
				elemDelDOM5 = document.getElementById("cacheDisco");	
				removeOptions(document.getElementById("marcaDisco"));
				removeOptions(document.getElementById("capacidadDisco"));
				removeOptions(document.getElementById("cacheDisco"));
				var i = 0;	
				for(i=0;i<parseInt(jsonDB.producto.cantidadDiscos);i++){
					if(jsonDB.producto.discos[i].tipo == tipoDisco){
						var opcion3 = document.createElement("option");
						var opcion4 = document.createElement("option");
						var opcion5 = document.createElement("option");
						opcion3.text = opcion3.value = jsonDB.producto.discos[i].capacidad;
						if(hasValue(elemDelDOM3, opcion3.text)){
							elemDelDOM3.add(opcion3);
						}						
						opcion4.text = opcion4.value = jsonDB.producto.discos[i].tipo;
						if(hasValue(elemDelDOM4, opcion4.text)){
							elemDelDOM4.add(opcion4);
						}						
						opcion5.text = opcion5.value = jsonDB.producto.discos[i].cache;
						if(hasValue(elemDelDOM5, opcion5.text)){
							elemDelDOM5.add(opcion5);
						}										
					}
				}
				break;	
			
			//en caso de que cambie la cache del disco
			case 'cacheDisco':
				cacheDisco = document.getElementById("cacheDisco").value;
				elemDelDOM2 = document.getElementById("marcaDisco");	
				elemDelDOM3 = document.getElementById("capacidadDisco");	
				elemDelDOM4 = document.getElementById("tipoDisco");	
				removeOptions(document.getElementById("marcaDisco"));
				removeOptions(document.getElementById("capacidadDisco"));
				removeOptions(document.getElementById("tipoDisco"));
				var i = 0;	
				for(i=0;i<parseInt(jsonDB.producto.cantidadDiscos);i++){
					if(jsonDB.producto.discos[i].cache == cacheDisco){
						var opcion2 = document.createElement("option");
						var opcion3 = document.createElement("option");
						var opcion4 = document.createElement("option");
						opcion2.text = opcion2.value = jsonDB.producto.discos[i].nombre;
						if(hasValue(elemDelDOM2, opcion2.text)){
							console.log("encontró marca");
							console.log(opcion2.text);
							elemDelDOM2.add(opcion2);
						}						
						opcion3.text = opcion3.value = jsonDB.producto.discos[i].capacidad;
						if(hasValue(elemDelDOM3, opcion3.text)){
							elemDelDOM3.add(opcion3);
						}						
						opcion4.text = opcion4.value = jsonDB.producto.discos[i].tipo;
						if(hasValue(elemDelDOM4, opcion4.text)){
							elemDelDOM4.add(opcion4);
						}										
					}
				}
				break;	
				
				case 'marcaFuente':
					marcaFuente = document.getElementById("marcaFuente").value;
					elemDelDOM2 = document.getElementById("wattsFuente");	
					removeOptions(document.getElementById("wattsFuente"));
					var i = 0;	
					for(i=0;i<parseInt(jsonDB.producto.cantidadFuentes);i++){
						if(jsonDB.producto.discos[i].nombre == marcaFuente){
							var opcion2 = document.createElement("option");
							opcion2.text = opcion2.value = jsonDB.producto.fuentes[i].descripcion;
							if(hasValue(elemDelDOM2, opcion2.text)){
								elemDelDOM2.add(opcion2);
							}
						}
					}
					break;
				
				case 'wattsFuente':
						wattsFuente = document.getElementById("wattsFuente").value;	
						elemDelDOM = document.getElementById("marcaFuente");
						removeOptions(document.getElementById("marcaFuente"));
						var i = 0;	
						for(i=0;i<parseInt(jsonDB.producto.cantidadFuentes);i++){
							if(jsonDB.producto.fuentes[i].descripcion == wattsFuente){
								var opcion = document.createElement("option");
								opcion.text = opcion.value = jsonDB.producto.fuentes[i].nombre;
								elemDelDOM.add(opcion);												
							}
						}
						break;
				
				case 'marcaPlacaMadre':
					marcaPlacaMadre = document.getElementById("marcaPlacaMadre").value;	
					elemDelDOM2 = document.getElementById("socketPlacaMadre");			
					removeOptions(document.getElementById("socketPlacaMadre"));
					var i = 0;	
					for(i=0;i<parseInt(jsonDB.producto.cantidadPlacasMadre);i++){
						if(jsonDB.producto.placasMadre[i].nombre == marcaPlacaMadre){
								var opcion = document.createElement("option");
								var opcion2 = document.createElement("option");
								opcion.text = opcion.value = jsonDB.producto.placasMadre[i].nombre;
								elemDelDOM.add(opcion);	
								opcion2.text = opcion2.value = jsonDB.producto.placasMadre[i].socket;
								if(hasValue(elemDelDOM2, opcion2.text)){
									elemDelDOM2.add(opcion2);
								}			
						}
					}
					break;
				
				case 'socketPlacaMadre':
					socketPlacaMadre = document.getElementById("socketPlacaMadre");		
					elemDelDOM = document.getElementById("marcaPlacaMadre");	
					removeOptions(document.getElementById("marcaPlacaMadre"));		
					var i = 0;	
					for(i=0;i<parseInt(jsonDB.producto.cantidadPlacasMadre);i++){
						if(jsonDB.producto.placasMadre[i].socket == socketPlacaMadre){
							var opcion = document.createElement("option");
							opcion.text = opcion.value = jsonDB.producto.placasMadre[i].nombre;
							elemDelDOM.add(opcion);	
						}
					}	
	
					break;			
		}
	}
	//---------------------FIN DEL FILTRO-------------------------------------
	
	
	getElementsPrivate = function(){
		//--------- OPCIONES PARA INTERMEDIO ----------------
		//Modelo procesador
		elemDelDOM = document.getElementById("procesadorMarca");	
		elemDelDOM2 = document.getElementById("nucleosProcesador");	
		elemDelDOM3 = document.getElementById("velocidadProcesador");	
		elemDelDOM4 = document.getElementById("cacheProcesador");	
		var i = 0;	
		for(i=0;i<parseInt(jsonDB.producto.cantidadProcesadores);i++){
			var opcion = document.createElement("option");
			var opcion2 = document.createElement("option");
			var opcion3 = document.createElement("option");
			var opcion4 = document.createElement("option");
			opcion.text = opcion.value = jsonDB.producto.procesadores[i].nombre;
			elemDelDOM.add(opcion);					
			opcion2.text = opcion2.value = jsonDB.producto.procesadores[i].nucleos;
			if(hasValue(elemDelDOM2, opcion2.text)){
				elemDelDOM2.add(opcion2);
			}
			opcion3.text = opcion3.value = jsonDB.producto.procesadores[i].velocidad;
			if(hasValue(elemDelDOM3, opcion3.text)){
				elemDelDOM3.add(opcion3);
			}
			opcion4.text = opcion4.value = jsonDB.producto.procesadores[i].cache;
			if(hasValue(elemDelDOM4, opcion4.text)){
				elemDelDOM4.add(opcion4);
			}
		}		
		//Tipo memoria
		elemDelDOM = document.getElementById("marcaRamSeleccion");	
		elemDelDOM2 = document.getElementById("marcaRamAdvSeleccion");	
		elemDelDOM3 = document.getElementById("cantidadMemoriaRam");	
		elemDelDOM4 = document.getElementById("velocidadMemoriaRam");	
		var i = 0;	
		for(i=0;i<parseInt(jsonDB.producto.cantidadMemoriasRam);i++){
			var opcion = document.createElement("option");
			var opcion2 = document.createElement("option");
			var opcion3 = document.createElement("option");
			var opcion4 = document.createElement("option");
			opcion.text = opcion.value = jsonDB.producto.memoriasRam[i].nombre;
			elemDelDOM.add(opcion);					
			opcion2.text = opcion2.value = jsonDB.producto.memoriasRam[i].nombre;
			if(hasValue(elemDelDOM2, opcion2.text)){
				elemDelDOM2.add(opcion2);
			}
			opcion3.text = opcion3.value = jsonDB.producto.memoriasRam[i].capacidad;
			if(hasValue(elemDelDOM3, opcion3.text)){
				elemDelDOM3.add(opcion3);
			}
			opcion4.text = opcion4.value = jsonDB.producto.memoriasRam[i].velocidad;
			if(hasValue(elemDelDOM4, opcion4.text)){
				elemDelDOM4.add(opcion4);
			}
		}		
		//Tipo disco rígido
		elemDelDOM = document.getElementById("discoRigidoSeleccion");	
		elemDelDOM2 = document.getElementById("marcaDisco");	
		elemDelDOM3 = document.getElementById("capacidadDisco");	
		elemDelDOM4 = document.getElementById("tipoDisco");	
		elemDelDOM5 = document.getElementById("cacheDisco");	
		var i = 0;	
		for(i=0;i<parseInt(jsonDB.producto.cantidadDiscos);i++){
			var opcion = document.createElement("option");
			var opcion2 = document.createElement("option");
			var opcion3 = document.createElement("option");
			var opcion4 = document.createElement("option");
			var opcion5 = document.createElement("option");
			opcion.text = opcion.value = jsonDB.producto.discos[i].nombre;
			elemDelDOM.add(opcion);		
			opcion2.text = opcion2.value = jsonDB.producto.discos[i].nombre;
			if(hasValue(elemDelDOM2, opcion2.text)){
				elemDelDOM2.add(opcion2);
			}
			opcion3.text = opcion3.value = jsonDB.producto.discos[i].capacidad;
			if(hasValue(elemDelDOM3, opcion3.text)){
				elemDelDOM3.add(opcion3);
			}						
			opcion4.text = opcion4.value = jsonDB.producto.discos[i].tipo;
			if(hasValue(elemDelDOM4, opcion4.text)){
				elemDelDOM4.add(opcion4);
			}						
			opcion5.text = opcion5.value = jsonDB.producto.discos[i].cache;
			if(hasValue(elemDelDOM5, opcion5.text)){
				elemDelDOM5.add(opcion5);
			}										
		}	
		
		//Tipo fuente
		elemDelDOM = document.getElementById("marcaFuente");
		elemDelDOM2 = document.getElementById("wattsFuente");	
		elemDelDOM3 = document.getElementById("fuenteSeleccion");
		var i = 0;	
		for(i=0;i<parseInt(jsonDB.producto.cantidadFuentes);i++){
			var opcion = document.createElement("option");
			var opcion2 = document.createElement("option");
			var opcion3 = document.createElement("option");
			opcion.text = opcion.value = jsonDB.producto.fuentes[i].nombre;
			elemDelDOM.add(opcion);					
			opcion2.text = opcion2.value = jsonDB.producto.fuentes[i].descripcion;
			if(hasValue(elemDelDOM2, opcion2.text)){
				elemDelDOM2.add(opcion2);
			}
			opcion3.text = opcion3.value = jsonDB.producto.fuentes[i].nombre;
			elemDelDOM3.add(opcion3);		
		}
		
		//Tipo placa madre
		elemDelDOM = document.getElementById("marcaPlacaMadre");	
		elemDelDOM2 = document.getElementById("socketPlacaMadre");			
		elemDelDOM3 = document.getElementById("placaMadreSeleccion");			
		var i = 0;	
		for(i=0;i<parseInt(jsonDB.producto.cantidadPlacasMadre);i++){
			var opcion = document.createElement("option");
			var opcion2 = document.createElement("option");
			var opcion3 = document.createElement("option");
			opcion.text = opcion.value = jsonDB.producto.placasMadre[i].nombre;
			elemDelDOM.add(opcion);	
			opcion2.text = opcion2.value = jsonDB.producto.placasMadre[i].socket;
			if(hasValue(elemDelDOM2, opcion2.text)){
				elemDelDOM2.add(opcion2);
			}			
			opcion3.text = opcion3.value = jsonDB.producto.placasMadre[i].nombre;
			elemDelDOM3.add(opcion3);
		}	
		//Tipo de placa de video
		elemDelDOM = document.getElementById("marcaPlacaVideo");	
		elemDelDOM2 = document.getElementById("placaVideoSeleccion");	
		var i = 0;	
		for(i=0;i<parseInt(jsonDB.producto.cantidadPlacasVideo);i++){
			var opcion = document.createElement("option");
			var opcion2 = document.createElement("option");
			opcion.text = opcion.value = jsonDB.producto.placasVideo[i].nombre;
			elemDelDOM.add(opcion);					
			opcion2.text = opcion2.value = jsonDB.producto.placasVideo[i].nombre;
			elemDelDOM2.add(opcion2);					
		}
		//Dinero a invertir -- seccion principiante
		elemDelDOM = document.getElementById("dineroAInvertir");		
		//vamos a poner solo 3 rangos
			var opcion = document.createElement("option");			
			opcion.text = "Menos de 6000";
			elemDelDOM.add(opcion);
			opcion = document.createElement("option");			
			opcion.text = "Menos de 8000";
			elemDelDOM.add(opcion);
			opcion = document.createElement("option");			
			opcion.text = "De 8000 en adelante";
			elemDelDOM.add(opcion);		
	}
	
	
	//-----------------buscadores, uno para cada tipo de elemento
	getDescriptionProcesorPrivate = function(){
	  var x = document.getElementById("procesadorMarca").value;
		//busco ese elemento
		for(i=0;i<parseInt(jsonDB.producto.cantidadProcesadores);i++){
			if(jsonDB.producto.procesadores[i].nombre == x){
				document.getElementById("descripcionProcesador").innerHTML = "Descripción: " + jsonDB.producto.procesadores[i].nucleos
																																										 + " - "
																																										 + jsonDB.producto.procesadores[i].velocidad
																																										 + " - "
																																										 + jsonDB.producto.procesadores[i].cache;				
			}		
		}
	}
	
	getDescriptionMemoriaRamPrivate = function(){
	  var x = document.getElementById("marcaRamSeleccion").value;
		for(i=0;i<parseInt(jsonDB.producto.cantidadMemoriasRam);i++){
			if(jsonDB.producto.memoriasRam[i].nombre == x){
				document.getElementById("descripcionMemoriaRam").innerHTML = "Descripción: " + jsonDB.producto.memoriasRam[i].capacidad
																																										 + " - "
																																										 + jsonDB.producto.memoriasRam[i].velocidad
																																										 + " - "
																																										 + jsonDB.producto.memoriasRam[i].tipo;				
			}		
		}
	}	
	getDescriptionDiscoRigidoPrivate = function(){
	  var x = document.getElementById("discoRigidoSeleccion").value;
		for(i=0;i<parseInt(jsonDB.producto.cantidadDiscos);i++){
			if(jsonDB.producto.discos[i].nombre == x){
				document.getElementById("descripcionDiscoRigido").innerHTML = "Descripción: " + jsonDB.producto.discos[i].capacidad 
																																											+ " - "
																																											+ jsonDB.producto.discos[i].tipo
																																											+ " - "
																																											+ jsonDB.producto.discos[i].cache;				
			}		
		}
	}
	getDescriptionFuentePrivate = function(){
	  var x = document.getElementById("fuenteSeleccion").value;
		for(i=0;i<parseInt(jsonDB.producto.cantidadFuentes);i++){
			if(jsonDB.producto.fuentes[i].nombre == x){
				document.getElementById("descripcionFuente").innerHTML = "Descripción: " + jsonDB.producto.fuentes[i].descripcion;				
			}		
		}
	}
	getDescriptionPlacaMadrePrivate = function(){
	  var x = document.getElementById("placaMadreSeleccion").value;
		for(i=0;i<parseInt(jsonDB.producto.cantidadPlacasMadre);i++){
			if(jsonDB.producto.placasMadre[i].nombre == x){
				document.getElementById("descripcionPlacaMadre").innerHTML = "Descripción: " + jsonDB.producto.placasMadre[i].descripcion;				
			}		
		}
	}
	descripcionPlacaVideoPrivate = function(){
	  var x = document.getElementById("placaVideoSeleccion").value;
		for(i=0;i<parseInt(jsonDB.producto.cantidadPlacasVideo);i++){
			if(jsonDB.producto.placasVideo[i].nombre == x){
				document.getElementById("descripcionPlacaVideo").innerHTML = "Descripción: " + jsonDB.producto.placasVideo[i].descripcion;				
			}		
		}	
	}
	
	//--------------------------fin de buscadores
		
	//recolector de datos de la máquina a armar
	miMaquinaPrivate = function(){
		localStorage.setItem("procesador",document.getElementById("procesadorMarca").value);
	    localStorage.setItem("memoriaRam",document.getElementById("marcaRamSeleccion").value);
		localStorage.setItem("discoRigido",document.getElementById("discoRigidoSeleccion").value);
		localStorage.setItem("fuente",document.getElementById("fuenteSeleccion").value);
		localStorage.setItem("placaMadre",document.getElementById("placaMadreSeleccion").value);
		localStorage.setItem("placaVideo",document.getElementById("placaVideoSeleccion").value);
	}
	
	//searchItem busca en un conjunto de elementos aquel del cual el uso sugerido matchea 
	//con el uso Seleccionado que se busca, lo almacena el el LocalStorage y retorna un array 
	//de2 elemntos - el primero es el costo del item - y - el segundo es el consumo del item -	
	searchItem = function(cantItems, vectorDeItems, usoSeleccionado, nombreLocalStorage, extra){		
		var i=0;
		encuentra=false;					
		while(!encuentra && i<cantItems){
			sugerido = vectorDeItems[i].sugerido;
			if(sugerido == usoSeleccionado){
				localStorage.setItem(nombreLocalStorage,vectorDeItems[i].nombre);
				encuentra=true;				
				return ([parseInt(vectorDeItems[i].precio),parseInt(vectorDeItems[i].consumo)]);
			}else{
				i++;
			}
		}
		if(!encuentra){
			localStorage.setItem(nombreLocalStorage,extra);
			return ([0,0]);
		}
	}
	
	irAPCBuildPrivate = function(nivelDeDificultad){	
		console.log(nivelDeDificultad.toString());		
		var ndd = nivelDeDificultad.toString();
		var usoSeleccionado="";
		localStorage.setItem("nivelDeDificultad", ndd);
		if(ndd == "Principiante"){
			var usos = document.getElementsByName("uso");
			for(var i = 0; i < usos.length; i++) {
				if(usos[i].checked == true) {
					usoSeleccionado = usos[i].value;
				}
			}
			//para cada componente, recolecto aquel que este recomendado para ese uso seleccionado			
			costo=0;
			totalWatts=0;
			var vec;
			
			vec = searchItem(parseInt(jsonDB.producto.cantidadProcesadores),
				jsonDB.producto.procesadores, usoSeleccionado, "procesador", "");
			costo += vec[0];
			totalWatts += vec[1];
			
			vec = searchItem(parseInt(jsonDB.producto.cantidadDiscos),
				jsonDB.producto.discos, usoSeleccionado, "discoRigido", "");
			costo += vec[0];	
			totalWatts += vec[1];
			
			vec = searchItem(parseInt(jsonDB.producto.cantidadFuentes),
				jsonDB.producto.fuentes, usoSeleccionado, "fuente", "");	
			costo += vec[0];
			totalWatts += vec[1];
			
			vec = searchItem(parseInt(jsonDB.producto.cantidadMemoriasRam),
				jsonDB.producto.memoriasRam, usoSeleccionado, "memoriaRam", "");	
			costo += vec[0];
			totalWatts += vec[1];
			
			vec = searchItem(parseInt(jsonDB.producto.cantidadPlacasMadre),
				jsonDB.producto.placasMadre, usoSeleccionado, "placaMadre", "");
			costo += vec[0];
			totalWatts += vec[1];
			
			vec = searchItem(parseInt(jsonDB.producto.cantidadPlacasVideo),
				jsonDB.producto.placasVideo, usoSeleccionado, "placaVideo", "ninguna");
			costo += vec[0];
			totalWatts += vec[1];
			localStorage.setItem("costoTotal",costo);
			
			//Segun el costo total de la maquina y lo que el usuario esta dispuesto a invertir
			//se chequea si al usuario le alcanza el dinero para pagar la PC
			var dineroAInvertir = document.getElementById("dineroAInvertir").value;
			if(dineroAInvertir == "Menos de 6000"){
				if(costo <= 6000) 
				{localStorage.setItem("alcanzaElDinero","SI");}else
				{localStorage.setItem("alcanzaElDinero","NO");}
			}else{
				if(dineroAInvertir == "Menos de 8000"){
					if(costo <= 8000) 
					{localStorage.setItem("alcanzaElDinero","SI");}else
					{localStorage.setItem("alcanzaElDinero","NO");}
				}else{
					localStorage.setItem("alcanzaElDinero","SI");					
				}			
			}
			
			//------- TOMAMOS EL COSTO DEL KILOWATT HORA EN 0.32 CENTAVOS DE PESO
			//------- POR LO TANTO 0.32/1000 NOS DA UN COSTO DE WATT DE 0.00032 CENTAVOS
			var res = totalWatts*0.00032;
			//la funcion toFixed corta el numero en 4 decimales
			localStorage.setItem("costoWattsTotal",res.toFixed(4));			
		}else{
			if(ndd == "Intermedio"){
				//se cargan los componentes del intermedio
				miMaquinaPrivate();
			}else{
				//aca se cargarían los componentes para el avanzado
				
			}
		}
		window.location = "./PCBuild.html";		
	}
	
	return{
		getElements: getElementsPrivate,
		getDescriptionProcesor: getDescriptionProcesorPrivate,
		getDescriptionMemoriaRam: getDescriptionMemoriaRamPrivate,
		getDescriptionDiscoRigido: getDescriptionDiscoRigidoPrivate,
		getDescriptionFuente: getDescriptionFuentePrivate,
		getDescriptionPlacaMadre: getDescriptionPlacaMadrePrivate,
		getDescriptionPlacaVideo: descripcionPlacaVideoPrivate,
		irAPCBuild: irAPCBuildPrivate,		
		filtro: filtroPrivate
	}
})(datos);