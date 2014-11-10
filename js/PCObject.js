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
	
	PC.prototype.setDisco = function(nombre)
	{
	  this.discoNombre = nombre;
	  alert(this.discoNombre);
	};
}