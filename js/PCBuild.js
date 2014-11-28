var controllerPCBuild = (function (jsonDB) {
    
     var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
     var lineChartData = {
        labels : [],
        datasets : [
            {
                label: "My First dataset",
                fillColor : "rgba(220,220,220,0.2)",
                strokeColor : "rgba(220,220,220,1)",
                pointColor : "rgba(220,220,220,1)",
                pointStrokeColor : "#fff",
                pointHighlightFill : "#fff",
                pointHighlightStroke : "rgba(220,220,220,1)",
                data: []
            },
            {
                label: "My Second dataset",
                fillColor : "rgba(151,187,205,0.2)",
                strokeColor : "rgba(151,187,205,1)",
                pointColor : "rgba(151,187,205,1)",
                pointStrokeColor : "#fff",
                pointHighlightFill : "#fff",
                pointHighlightStroke : "rgba(151,187,205,1)",
                data: []
            }
        ]
    }

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
            li.appendChild(document.createTextNode("Como el gabinete no consume energia, queda a elección del usuario (ver compatibilidad con motherboard)"));
            ul.appendChild(li);
            var li = document.createElement("li");
            li.appendChild(document.createTextNode("Costo total: $" + parseInt(mipc.costoTotal)));
            ul.appendChild(li);
            var li = document.createElement("li");
            li.appendChild(document.createTextNode("Horas de uso: " + mipc.horasDeUso));
            ul.appendChild(li);
		
            
	        document.getElementById("consumoWatts").innerHTML = "El consumo de energia de la PC mostrada es de: " + parseInt(mipc.wattsTotal) + " watts";		
			document.getElementById("gastoWatts").innerHTML = "El gasto monetario en base al consumo de energia de la PC mostrada es de: $" + mipc.costoWattsTotal + " por hora";
            //la formula es:watts consumidos x año * (0,5/1000)
            //0,00 xq sino me imprime desde el primer numero distinto de 0
            document.getElementById("huellaCarbono").innerHTML = "La huella de carbono generada por esta máquina es: CO2 0,00" + (mipc.wattsTotal*0,0005);
            var result = ((mipc.wattsTotal)*parseFloat(0,0005));
            console.log(result.toFixed());
            console.log(result.toExponential());
            console.log(parseFloat(0,0005));
            console.log(0,0005);
            console.log(120*0,0005);
		}else{
			document.getElementById("mensajeDeDineroInsuficiente").innerHTML = "En este momento el sistema no dispone de una configuracion de componentes para el uso seleccionado en el rango de precios elegido. Disculpe las molestias";
		}
        
        //PARA CARGAR LA GRÁFICA    
        var ctx = document.getElementById("canvas").getContext("2d");
        var myChart = new Chart(ctx).Line(lineChartData, {responsive: true});
        window.myLine = myChart;
        
        //EN ESTE FOR HABRÍA QUE HACER LA MULTIPLICACIÓN CORRECTA PARA MOSTRAR EL CRECIMIENTO DEL CONSUMO CON EL PASO DE LOS MESES
        for(i=0; i<8; i++){
          myChart.addData([i, i*2], i);
          //myChart.addData([i, i*3], i);
        }
        
        console.log("hace el dibujo");
   
	}
	
	irASystemSelectorPrivate = function(){
		window.location = "./index.html";
	}
	
	return{
		mostrarMaquina:	mostrarMaquinaPrivate,
		irASystemSelector: irASystemSelectorPrivate
	}
})(datos);