// Conte quantos números pares e ímpares existem de 1 até <um número fornecido pelo usuário>

let numero = parseInt(prompt("Digite um número: "));

let pares = 0;
let impares = 0;

for (let i = 1; i <= numero; i++) {
  if (i % 2 === 0) {
    pares++;
  } else {
    impares++;
  }
}

alert("Números pares: " + pares);
alert("Números ímpares: " + impares);