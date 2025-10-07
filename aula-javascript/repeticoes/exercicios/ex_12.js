// Dada uma lista de números, encontre o maior e o menor valor.

let entrada = prompt("Digite uma lista de números separados por vírgula:");

let lista = entrada.split(",").map(Number);

let maior = lista[0];
let menor = lista[0];

for (let i = 1; i < lista.length; i++) {
  if (lista[i] > maior) {
    maior = lista[i];
  }
  if (lista[i] < menor) {
    menor = lista[i];
  }
}

alert("Maior valor: " + maior);
alert("Menor valor: " + menor);


