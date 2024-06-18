//Pedir preço do produto
let precoProduto = parseFloat(prompt("Digite o preço do produto:"));

//Descobrir a porcentagem do desconto
let desconto = precoProduto * 0.1; 
//Descobrir valor bruto do desconto
let valorComDesconto = precoProduto - desconto;

//Realizar o calculo caso a compra seja parcelada por 3 vezes
let valorParcela = precoProduto / 3;

//Exibir na tela
document.write(`<p class="texto">Preço: R$ ${precoProduto.toFixed(2)}</p><br>`);
document.write(`<p class="texto2">À Vista: R$ ${valorComDesconto.toFixed(2)}</p><br>`);
document.write(`<p class="texto3">Ou 3x de: R$ ${valorParcela.toFixed(2)}</p><br>`);