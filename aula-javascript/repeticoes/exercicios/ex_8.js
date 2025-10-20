// Calcule o fatorial de um numero dado

let numero = 2; 
let fatorial = 1;

for (let i = 1; i <= numero; i++) {
    fatorial *= i; // multiplica o valor atual de fatorial por i
}

console.log("O fatorial de", numero, "é", fatorial);

