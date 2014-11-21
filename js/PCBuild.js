var controllerPCBuild = (function (jsonDB) {
	mostrarMaquinaPrivate = function(){
		//esto quedara medio hardcodeado xq lo que estaria es que el 
		//"admin" tenga una config por defecto para estos casos y la 
		//vaya cambiando xq que el sistema tire randoms sobre los 
		//componentes no queda muy bien
		if(localStorage.getItem("alcanzaElDinero") == "SI"){
				var pc = localStorage.getItem("mipc",pc);
            console.log(pc);
            var mipc = new PC();
            mipc = JSON.parse(pc);
            var ul = document.getElementById("PCBuildComponentes");
            var li = document.createElement("li");
            li.appendChild(document.createTextNode("Procesador: " + mipc.procesadorNombre));
            ul.appendChild(li);
            var li = document.createElement("li");
            li.appendChild(document.createTextNode("Memoria ram: " + mipc.memoriaNombre));
            ul.appendChild(li);
            var li = document.createElement("li");
            li.appendChild(document.createTextNode("Disco: " + mipc.discoNombre));
            ul.appendChild(li);		
            var li = document.createElement("li");
            li.appendChild(document.createTextNode("Fuente: " + mipc.fuenteNombre));
            ul.appendChild(li);
            var li = document.createElement("li");
            li.appendChild(document.createTextNode("Placa madre: " + mipc.placaMadreNombre));
            ul.appendChild(li);
            var li = document.createElement("li");
            li.appendChild(document.createTextNode("Placa de video: " + mipc.placaVideoNombre));
            ul.appendChild(li);
            var li = document.createElement("li");
            li.appendChild(document.createTextNode("Dado que el gabinete no consume energia se lo deja a eleccion del usuario (ver compatibilidad con motherboard)"));
            ul.appendChild(li);
            var li = document.createElement("li");
            li.appendChild(document.createTextNode("Costo total: $" + parseInt(mipc.costoTotal)));
            ul.appendChild(li);
            var li = document.createElement("li");
            li.appendChild(document.createTextNode("Horas de uso: " + mipc.horasDeUso));
            ul.appendChild(li);
		
            
	        document.getElementById("consumoWatts").innerHTML = "El consumo de energia de la PC mostrada es de: " + parseInt(mipc.wattsTotal) + " watts";		
			document.getElementById("gastoWatts").innerHTML = "El gasto monetario en base al consumo de energia de la PC mostrada es de: $" + mipc.costoWattsTotal + " por hora";
		}else{
			document.getElementById("mensajeDeDineroInsuficiente").innerHTML = "En este momento el sistema no dispone de una configuracion de componentes para el uso seleccionado en el rango de precios elegido. Disculpe las molestias";
		}
	}
	
	irASystemSelectorPrivate = function(){
		window.location = "./index.html";
	}
	
	return{
		mostrarMaquina:	mostrarMaquinaPrivate,
		irASystemSelector: irASystemSelectorPrivate
	}
})(datos);