var controllerPCBuild = (function (jsonDB) {
	mostrarMaquinaPrivate = function(){
		//esto quedara medio hardcodeado xq lo que estaria es que el 
		//"admin" tenga una config por defecto para estos casos y la 
		//vaya cambiando xq que el sistema tire randoms sobre los 
		//componeneteses medio pedorro		
		var ul = document.getElementById("PCBuildComponentes");
		var ndd = localStorage.getItem("nivelDeDificultad");		
		var li = document.createElement("li");
		li.appendChild(document.createTextNode("Procesador: " + localStorage.getItem("procesador")));
		ul.appendChild(li);
		var li = document.createElement("li");
		li.appendChild(document.createTextNode("Memoria ram: " + localStorage.getItem("memoriaRam")));
		ul.appendChild(li);
		var li = document.createElement("li");
		li.appendChild(document.createTextNode("Disco: " + localStorage.getItem("discoRigido")));
		ul.appendChild(li);		
		var li = document.createElement("li");
		li.appendChild(document.createTextNode("Fuente: " + localStorage.getItem("fuente")));
		ul.appendChild(li);
		var li = document.createElement("li");
		li.appendChild(document.createTextNode("Placa madre: " + localStorage.getItem("placaMadre")));
		ul.appendChild(li);
		var li = document.createElement("li");
		li.appendChild(document.createTextNode("Placa de video: " + localStorage.getItem("placaVideo")));
		ul.appendChild(li);
		var li = document.createElement("li");
		li.appendChild(document.createTextNode("Aca falto el Gabo :P gabinete, aunq no es muy util para el Green IT"));
		ul.appendChild(li);
		var li = document.createElement("li");
		li.appendChild(document.createTextNode("Costo total: $" + localStorage.getItem("costoTotal")));
		ul.appendChild(li);
		
		var gastoWatts = document.getElementById("gastoWatts").innerHTML = "El gasto monetario en base al consumo de energia de la PC mostrada es de: $" + localStorage.getItem("costoWattsTotal") + " por hora";
		
	}
	
	irASystemSelectorPrivate = function(){
		window.location = "./index.html";
	}
	
	return{
		mostrarMaquina:	mostrarMaquinaPrivate,
		irASystemSelector: irASystemSelectorPrivate
	}
})(datos);