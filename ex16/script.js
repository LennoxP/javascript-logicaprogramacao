//Pedir a distancia em quilometros
let distanciaQuilometros = parseInt(prompt("Digite aqui a distancia que deseja percorrer em quilometros:"));
//Consumo por litros
let consumoLitros = parseFloat(prompt("Digite aqui o consumo por litros:"));

//Calcuulo para descobrir o consumo médio através das duas variaveis acima respondidas
let consumoMedio = distanciaQuilometros / consumoLitros;

//Exibir no site
document.write(`<p class="texto">O consumo médio é de: ${consumoMedio} Km/L </p>`);