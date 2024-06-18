//Digitar um número
let numero = parseInt(prompt("Insira aqui um número:"));

//Pedir o módulo para verificar se é par ou impar caso sobre 0
if (numero % 2 === 0) {
    //Exibir no site
    document.write(`<p class="texto">O número é par!</p>`);
} else {
    //Exibir no site
    document.write(`<p class="texto">O número é impar!</p>`);
}
