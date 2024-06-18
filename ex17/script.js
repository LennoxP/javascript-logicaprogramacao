//Valor do produto
let valorProduto = parseInt(prompt("Insira aqui o valor do produto:"));
//Porcentagem do desconto
let desconto = parseFloat(prompt("Insira aqui o desconto"));

//Calcular o valor bruto do desconto
let valorDesconto = valorProduto * desconto / 100;

//Descobrir o preço final através do desconto menos o valor do produto
let precoFinal = valorProduto - valorDesconto.toFixed(2)

//Exibir no site
document.write(`<p class="texto">Valor do desconto: R$ ${valorDesconto.toFixed(2)}</p><br>`);
document.write(`<p class="texto2">Preço final: R$ ${precoFinal.toFixed(2)}</p><br>`);

