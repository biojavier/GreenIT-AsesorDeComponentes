var controllerPCBuild = (function (jsonDB, $) {
        
     var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
     var lineChartData = {
        labels : [],
        datasets : [
            //ATENCIÓN!!!, NO BORRAR ESTA, SI LA SACAN SE ROMPE
            {
                label: "My First dataset",
                fillColor : "rgba(255, 255, 255, 0.2)",
                strokeColor : "rgb(255, 255, 255)",
                pointColor : "rgba(255, 255, 255, 0)",
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
            },
            //esta gráfica de aca abajo puede ser usada para dibujar la recta del consumo de una máquina que te arman en cualquier lugar.
            //La anterior representa la del consumo de NUESTRA MÁQUINA
            {
                label: "My Second dataset",
                fillColor : "rgba(151,187,205,0.2)",
                strokeColor : "rgb(150, 240, 185)",
                pointColor : "rgb(113, 230, 190)",
                pointStrokeColor : "#fff",
                pointHighlightFill : "#fff",
                pointHighlightStroke : "rgba(151,187,205,1)",
                data: [3*1, 4*1.5, 5*2, 6*2.5, 7*3, 8*3.5, 9*4, 10*4.5]
            }
        ]
    }
    
    //DATOS PARA EL GRAFICO DE BARRAS COMPARACION DE GASTOS ENERGETICOS
    var barChartData = {
        labels: ["PC estandar(Gris) VS PC presentada(Azul)"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,0.8)",
                highlightFill: "rgba(220,220,220,0.75)",
                highlightStroke: "rgba(220,220,220,1)",
                data: [0]
            },
            {
                label: "My Second dataset",
                fillColor: "rgba(151,187,205,0.5)",
                strokeColor: "rgba(151,187,205,0.8)",
                highlightFill: "rgba(151,187,205,0.75)",
                highlightStroke: "rgba(151,187,205,1)",
                data: [0]
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
            li.appendChild(document.createTextNode("Como el gabinete no consume energia, queda a eleccion del usuario (ver compatibilidad con motherboard)"));
            ul.appendChild(li);
            var li = document.createElement("li");
            li.appendChild(document.createTextNode("Costo total: $" + parseInt(mipc.costoTotal)));
            ul.appendChild(li);
            var li = document.createElement("li");
            li.appendChild(document.createTextNode("Horas de uso: " + mipc.horasDeUso));
            ul.appendChild(li);
		
            
	        document.getElementById("consumoWatts").innerHTML = "El consumo de energia de la PC mostrada es de: " + parseInt(mipc.wattsTotal) + " watts";		
			document.getElementById("gastoWatts").innerHTML = "El gasto monetario en base al consumo de energia de la PC mostrada es de: $" + mipc.costoWattsTotal + " por hora";
            document.getElementById("gastoWattsMaquinaEstandar").innerHTML = "El gasto monetario en base al consumo de energia de una PC estandar es de: $" + 270*0.00032 + " por hora";
			var ahorro = ((270*0.00032) - mipc.costoWattsTotal);			
			if(ahorro > 0){
				document.getElementById("gastoWattsAhorro").innerHTML = "Por lo tanto usted ahorra: " + ahorro.toFixed(4) + " por hora";
			}			
			//la formula es:watts consumidos x año * (0,5/1000)
            //0,00 xq sino me imprime desde el primer numero distinto de 0
            document.getElementById("huellaCarbono").innerHTML = "La huella de carbono generada por esta maquina es: CO2 0,00" + (mipc.wattsTotal*0,0005);
            var result = ((mipc.wattsTotal)*parseFloat(0,0005));
            console.log(result.toFixed());
            console.log(result.toExponential());
            console.log(parseFloat(0,0005));
            console.log(0,0005);
            console.log(120*0,0005);
            
            Chart.defaults.global.scaleFontSize = 18;

            //PARA CARGAR LA GRÁFICA    
            var ctx = document.getElementById("canvas").getContext("2d");
            var myChart = new Chart(ctx).Line(lineChartData, {responsive: true});
            window.myLine = myChart;
            for(i=0; i<8; i++){
              myChart.addData([i, i*3], i);
            }

            //PARA CARGAR LA GRÁFICA DE BARRAS PARA LA COMPARACION DE CONSUMO   
            //numero de consumo de la pc promedio
            var consumoPCpromedio = 270;
            var consumoPCarmada = mipc.wattsTotal;        
            barChartData.datasets[0].data = [consumoPCpromedio];
            barChartData.datasets[1].data = [consumoPCarmada];
            
		}else{
			document.getElementById("mensajeDeDineroInsuficiente").innerHTML = "En este momento el sistema no dispone de una configuracion de componentes para el uso seleccionado en el rango de precios elegido. Disculpe las molestias";
		}        
        if(parseInt(mipc.wattsTotal) < 270){
            var ctx2 = document.getElementById("canvas2").getContext("2d");        
            var myBarChart = new Chart(ctx2).Bar(barChartData, {responsive: true});
            window.myLine = myBarChart;
            
        }else{
            document.getElementById("tituloGraficoDeBarras").innerHTML = "";
        }
    }
	
	irASystemSelectorPrivate = function(){
		window.location = "./index.html";
	}
    
    imprimir = function(){        
        var printContents = document.getElementById("aImprimir").innerHTML;   
        window.print(printContents);
    }
	
	return{
		mostrarMaquina:	mostrarMaquinaPrivate,
		irASystemSelector: irASystemSelectorPrivate,
        imprimirPC: imprimir
	}
})(datos, jQuery);