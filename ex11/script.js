//Pedir a distancia do local em quilometros
let quilometros = parseInt(prompt("Digite aqui a distância em quilometros:"));
//1 km em milhas
let kmMilhas = parseFloat(0.621371);

//Realizar o calculo
let conversor = (quilometros * kmMilhas).toFixed(2)

//Exibir no site
document.write(`<p class="texto">A distância em milhas é: ${conversor}</p>`);