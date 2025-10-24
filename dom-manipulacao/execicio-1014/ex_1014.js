

        function Calcular() {
            let distancia = Number(document.getElementById("distancia").value);
            let combustivel = Number(document.getElementById("combustivel").value);
            let consumo = distancia / combustivel;
            document.getElementById("resultadoConsumo").innerText = consumo.toFixed(3) + " km/l";
        }
 
