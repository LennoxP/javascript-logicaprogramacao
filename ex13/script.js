//Descrever a temperatura fahrenheit
let fahrenheit = parseInt(prompt("Digite aqui a temperatura em graus fahrenheit:"));

//Calculo para converter para celsius de acordo com a formula descrita no arquivo HTML
let celsius = (fahrenheit - 32) * 5/9;

//Exibir no site
document.write(`<p class="texto">A temperatura em celsius é de: ${celsius}</p>`);