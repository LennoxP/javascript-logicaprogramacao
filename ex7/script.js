//Adicionar a idade para realizar a condição
let idade = parseInt(prompt("Insira aqui a sua idade:"))

//Condição para saber se o indivíduo é maior ou menor de idade
if (idade >= 18) {
    //Exibir no site
    document.write(`<p class="texto">Você é maior de idade!</p>`);
} else {
    //Exibir no site
    document.write(`<p class="texto">Você é menor de idade!</p>`);
}
