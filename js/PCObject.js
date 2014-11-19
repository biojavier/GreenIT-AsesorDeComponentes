function PC() {
	discoNombre = null, 
	discoConsumo = null,
	discoCapacidad = null,
	discoTipo = null,
	discoCache = null,
	discoPrecio = null,
	
	fuenteNombre = null,
	fuenteConsumo = null,
	fuenteDescripcion = null,
	fuentePrecio = null,
	
	memoriaNombre = null,
	memoriaConsumo = null,
	memoriaTipo = null,
	memoriaCapacidad = null,
	memoriaPrecio = null,
	
	procesadorNombre = null,
	procesadorConsumo = null,
	procesadorNucleos = null,
	procesadorVelocidad = null,
	procesadorCache = null,
	procesadorPrecio = null,

	placaMadreNombre = null,
	placaMadreConsumo = null,
	placaMadreSocket = null,
	placaMadrePrecio = null,
	
	placaVideoNombre = null,
	placaVideoConsumo = null,
	placaVideoDescripcion = null,
	placaVideoPrecio = null,
	
	horasDeUso = null,
	
	costoTotal = null,

	wattsTotal = null,
	
	costoWattsTotal = null,
	
	PC.prototype.setProcesador = function(marca, jsonDB){
	 	var i=0;
		encuentra=false;
		while(!encuentra && i<parseInt(jsonDB.producto.cantidadProcesadores)){
			if(jsonDB.producto.procesadores[i].nombre == marca){
				encuentra=true;
				this.procesadorNombre = jsonDB.producto.procesadores[i].nombre;
				this.procesadorConsumo = jsonDB.producto.procesadores[i].consumo;
				this.procesadorNucleos = jsonDB.producto.procesadores[i].nucleos;
				this.procesadorVelocidad = jsonDB.producto.procesadores[i].velocidad;
				this.procesadorCache = jsonDB.producto.procesadores[i].cache;
				this.procesadorPrecio = jsonDB.producto.procesadores[i].precio;
				this.costoTotal += jsonDB.producto.procesadores[i].precio;
				this.wattsTotal += jsonDB.producto.procesadores[i].consumo;
			}else{
				i++;
			}
			console.log(this.costoTotal);			
		};
	}
	
	PC.prototype.setMemoria = function(tagId, jsonDB){
		var i=0;
		encuentra=false;
		while(!encuentra && i<parseInt(jsonDB.producto.cantidadMemoriasRam)){
			if(jsonDB.producto.memoriasRam[i].nombre == document.getElementById(tagId).value){
				encuentra=true;
				this.memoriaNombre = jsonDB.producto.memoriasRam[i].nombre;
				this.memoriaConsumo = jsonDB.producto.memoriasRam[i].consumo;
				this.memoriaTipo = jsonDB.producto.memoriasRam[i].tipo;
				this.memoriaCapacidad = jsonDB.producto.memoriasRam[i].capacidad;
				this.memoriaPrecio = jsonDB.producto.memoriasRam[i].precio;
				this.costoTotal += jsonDB.producto.memoriasRam[i].precio;
				this.wattsTotal += jsonDB.producto.memoriasRam[i].consumo;
			}else{
				i++;
			}			
			console.log(this.costoTotal);			
		}
	}
	
	PC.prototype.setDisco = function(tagId, jsonDB){
		var i=0;
		encuentra=false;
		while(!encuentra && i<parseInt(jsonDB.producto.cantidadDiscos)){
			if(jsonDB.producto.discos[i].nombre == document.getElementById(tagId).value){
				encuentra=true;
				this.discoNombre = jsonDB.producto.discos[i].nombre;
				this.discoConsumo = jsonDB.producto.discos[i].consumo;
				this.discoCapacidad = jsonDB.producto.discos[i].capacidad;
				this.discoTipo = jsonDB.producto.discos[i].tipo;
				this.discoCache = jsonDB.producto.discos[i].cache;
				this.discoPrecio = jsonDB.producto.discos[i].precio;
				this.costoTotal += jsonDB.producto.discos[i].precio;
				this.wattsTotal += jsonDB.producto.discos[i].consumo;
			}else{
				i++;
			}			
			console.log(this.costoTotal);			
		}
	};
	PC.prototype.setFuente = function(tagId, jsonDB){
		var i=0;
		encuentra=false;
		while(!encuentra && i<parseInt(jsonDB.producto.cantidadFuentes)){
			if(jsonDB.producto.fuentes[i].nombre == document.getElementById(tagId).value){
				encuentra=true;
				this.fuenteNombre = jsonDB.producto.fuentes[i].nombre;
				this.fuenteConsumo = jsonDB.producto.fuentes[i].consumo;
				this.fuenteDescripcion = jsonDB.producto.fuentes[i].descripcion;
				this.fuentePrecio = jsonDB.producto.fuentes[i].precio;
				this.costoTotal += jsonDB.producto.fuentes[i].precio;
				this.wattsTotal += jsonDB.producto.fuentes[i].consumo;
			}else{
				i++;
			}			
		}
	};
	PC.prototype.setPlacaMadre = function(tagId, jsonDB){
		var i=0;
		encuentra=false;
		while(!encuentra && i<parseInt(jsonDB.producto.cantidadPlacasMadre)){
			if(jsonDB.producto.placasMadre[i].nombre == document.getElementById(tagId).value){
				encuentra=true;
				this.placaMadreNombre = jsonDB.producto.placasMadre[i].nombre;
				this.placaMadreConsumo = jsonDB.producto.placasMadre[i].consumo;
				this.placaMadreSocket = jsonDB.producto.placasMadre[i].socket;
				this.placaMadrePrecio = jsonDB.producto.placasMadre[i].precio;
				this.costoTotal += jsonDB.producto.placasMadre[i].precio;
				this.wattsTotal += jsonDB.producto.placasMadre[i].consumo;
			}else{
				i++;
			}			
		}
	};
	PC.prototype.setPlacaVideo = function(tagId, jsonDB){
		var i=0;
		encuentra=false;
		while(!encuentra && i<parseInt(jsonDB.producto.cantidadPlacasVideo)){
			if(jsonDB.producto.placasVideo[i].nombre == document.getElementById(tagId).value){
				encuentra=true;
				this.placaVideoNombre = jsonDB.producto.placasVideo[i].nombre;
				this.placaVideoConsumo = jsonDB.producto.placasVideo[i].consumo;
				this.placaVideoDescripcion = jsonDB.producto.placasVideo[i].dsecripcion;
				this.placaVideoPrecio = jsonDB.producto.placasVideo[i].precio;
				this.costoTotal += jsonDB.producto.placasVideo[i].precio;
				this.wattsTotal += jsonDB.producto.placasVideo[i].consumo;
			}else{
				i++;
			}			
		}
	};

	PC.prototype.setHoras = function(horas){
		for(var i = 0; i < horas.length; i++) {
			if(horas[i].checked == true) {
                this.horasDeUso=horas[i].value;
			}
		}
	}
	PC.prototype.cargarDatosIntermedio = function(jsonDB){
		this.costoTotal = 0;
		this.wattsTotal = 0;
		this.setHoras(document.getElementsByName("horasDeUsoIntermedio"));
		this.setProcesador(document.getElementById("procesadorMarca").value, jsonDB);
		this.setMemoria("marcaRamSeleccion", jsonDB);
		this.setDisco("discoRigidoSeleccion", jsonDB);
		this.setFuente("fuenteSeleccion", jsonDB);
		this.setPlacaMadre("placaMadreSeleccion", jsonDB);
		this.setPlacaVideo("placaVideoSeleccion", jsonDB);
		//------- TOMAMOS EL COSTO DEL KILOWATT HORA EN 0.32 CENTAVOS DE PESO
		//------- POR LO TANTO 0.32/1000 NOS DA UN COSTO DE WATT DE 0.00032 CENTAVOS				
		alert(this.wattsTotal);
		alert(this.wattsTotal*0.00032);
		this.costoWattsTotal = (this.wattsTotal*0.00032).toFixed(4);
  }		
	
	PC.prototype.cargarDatosAvanzado = function(jsonDB){
		this.costoTotal = 0;
		this.wattsTotal = 0;
		this.setHoras(document.getElementsByName("horasDeUsoAvanzado"));
		var marcas = document.getElementsByName("marcasRadio");
		for(var i = 0; i < marcas.length; i++) {
			if(marcas[i].checked == true) {
				marcaSeleccionada = marcas[i].value;
			}
		}	
		this.setProcesador("marcaSeleccion", jsonDB);
		this.setMemoria("marcaRamAdvSeleccion", jsonDB);
		this.setDisco("marcaDisco", jsonDB);
		this.setFuente("marcaFuente", jsonDB);
		this.setPlacaMadre("marcaPlacaMadre", jsonDB);
		this.setPlacaVideo("marcaPlacaVideo", jsonDB);
		//------- TOMAMOS EL COSTO DEL KILOWATT HORA EN 0.32 CENTAVOS DE PESO
		//------- POR LO TANTO 0.32/1000 NOS DA UN COSTO DE WATT DE 0.00032 CENTAVOS				
		this.costoWattsTotal = (this.wattsTotal*0.00032).toFixed(4);
	}
}