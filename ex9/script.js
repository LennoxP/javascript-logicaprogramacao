//Informar o raio do circulo
let raio = parseFloat(prompt("Digite o raio do círculo:"));

//Importar o Math.PI
 const PI = Math.PI;
//Calcular o "perimetro"
 let perimetro = parseFloat(2 * PI * raio);


 document.write(`<p class="texto">O raio é: ${perimetro}</p>`);