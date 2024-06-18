//Colocar o valor total
let valorTotal = parseInt(prompt("Digite aqui o valor total:"));
//Colocar o valor da gorjeta
let valorGorjeta = parseInt(prompt("Digite aqui o valor da gorjeta:"));

//Descobrir o valor bruto da gorjeta
let gorjeta = valorTotal / valorGorjeta;

//Realizar a soma para descobrir o total a se pagar
let pagamento = gorjeta + valorTotal;

//Exibir na tela
document.write(`<p class="texto">Valor da gorjeta: R$ ${gorjeta.toFixed(2)}</p><br>`);
document.write(`<p class="texto2">Valor total: R$ ${pagamento.toFixed(2)}</p><br>`);

