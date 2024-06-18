//Preço do produto
let precoProduto = parseFloat(prompt("Digite aqui o preço do produto:"))
//Porcentagem do imposto 
let porcentagemImposto = parseFloat(prompt("Digite aqui a porcentagem do imposto:"))

//Calculo para o valor bruto do imposto
let valorImposto = (porcentagemImposto / 100) * precoProduto;

//Calculo do preço final atráves do imposto bruto e o preço do produto
let precoFinal = precoProduto + valorImposto;

//Exibir na tela
document.write(`<p class="texto">Valor do imposto: R$ ${valorImposto.toFixed(2)}</p><br>`);
document.write(`<p class="texto2">Valor total: R$ ${precoFinal.toFixed(2)}</p><br>`);

