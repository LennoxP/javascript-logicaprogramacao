//Pedir os minutos
let minutos = parseInt(prompt("Digite aqui quantos minutos para converter em horas:"));
//Converter os minutos em horas
let horas = parseFloat(minutos / 60).toFixed(2);

//Exibir no site
document.write(`<p class="texto">Isso é igual a ${horas} horas</p>`);