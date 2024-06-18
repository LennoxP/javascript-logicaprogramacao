//Pedir os dias trabalhados
let diasTrabalhados = parseInt(prompt("Insira aqui os seus dias trabalhados:"));
//Valor ganho diariamente
let valorDiaria = parseInt(prompt("Insira aqui o valor da diaria:"));

//Calcular o salario 
let salario = diasTrabalhados * valorDiaria;

//Exibir no site
document.write(`<p class="texto">O seu salário é: ${salario}</p>`);