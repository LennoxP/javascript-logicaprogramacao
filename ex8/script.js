//Pedir a base
let base = parseInt(prompt("Insira aqui a medida da base do retângulo:"))
//Pedir a altura
let altura = parseInt(prompt("Insira aqui a medida da altura do retângulo:"))

//Multiplicar a base e altura para descobrir a area
const area = base * altura;

//Exibir no site
document.write(`<p class="texto">A área do retangulo é: ${area} m²</p>`);