//Informar a temperatura
let celsius = parseInt(prompt("Digite aqui a temperatura em graus celsius:"))
//Calculo para converter para fahrenheit de acordo com a formula descrita no arquivo HTML
let fahrenheit = celsius * 1.8 + 32;

//Exibir no site
document.write(`<p class="texto">A temperatura em fahrenheit é de: ${fahrenheit}</p>`);