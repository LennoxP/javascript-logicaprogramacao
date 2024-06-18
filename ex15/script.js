//Valor do deposito
let deposito = parseInt(prompt("Digite aqui o valor do depósito:"))
//Valor dos juros anuais
let jurosAnual = parseFloat(prompt("Digite o valor dos juros anuais:"))

//Calcular o rendimento para descobrir o valor total
let rendimento = deposito * jurosAnual / 100;

//Valor total é revelado apartir do rendimento e o valor do deposito
let valorTotal = rendimento + deposito;

//Exibir no site
document.write(`<p class="texto">O valor total é de: R$ ${valorTotal}</p>`);