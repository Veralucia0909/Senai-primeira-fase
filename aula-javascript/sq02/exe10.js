// Verificando um Ano Bissexto: Peça ao usuário para inserir um ano e determine se ele é bissexto ou não.

let ano = prompt("Digite um ano:");
ano = parseInt(ano); 

if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
  alert(ano + " é um ano bissexto.");
} else {
  alert(ano + " não é um ano bissexto.");
}




