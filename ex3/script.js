// Colocar o valor total da conta
let valorTotal = parseFloat(prompt("Insira aqui o valor total da conta:"));
//Colocar o número de clientes
let numeroClientes = parseInt(prompt("Insira aqui o número de clientes:"));
//Calcular o pagamento por cliente
const pagamentoCliente = valorTotal / numeroClientes;

//Formata o pagamento por cliente para duas casas decimais
let pagamentoFormatado = pagamentoCliente.toFixed(2);

//Exibe o texto junto com o valor formatado
document.write(`<p class="texto">Valor por cliente: ${pagamentoFormatado}</p>`);
