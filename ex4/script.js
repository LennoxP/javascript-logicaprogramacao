//Colocar a sua primeira nota
let nota1 = parseFloat(prompt("Insira sua primeira nota:"))
//Colocar a sua segunda nota
let nota2 = parseFloat(prompt("Insira sua segunda nota:"))
//Realizar a soma da primeira e segunda nota
const soma = nota1 + nota2;
//Descobrir a média divindo por dois
const media = soma / 2
//Formatar para duas casas decimais
let mediaFormatado = media.toFixed(2);

//Exibir no site
document.write(`<p class="texto">Sua média de nota é: ${mediaFormatado}</p>`);