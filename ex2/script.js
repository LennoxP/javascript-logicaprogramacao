// Pedir a idade
let idade = parseInt(prompt("Digite a sua idade:"));
// Calcular a idade em dias. Basta pegar a idade e fazer vezes 365
const calculo = idade * 365;

// Exibir no site
document.write(`<p class="texto">Idade em dias: ${calculo}</p>`);