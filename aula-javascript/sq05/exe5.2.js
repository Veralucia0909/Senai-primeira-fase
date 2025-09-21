// 5.2// Mano Juca bateu a cabeça e esta com problemas de
// raciocínio. Está analisando dois números ha horas e não consegue
// descobrir qual deles e o maior. Vamos ajuda-lo!Crie um algoritmo que leia 
// dois números A e B e imprima o maior deles.


let A = Number(prompt("Digite o primeiro número: "));
let B = Number(prompt("Digite o segundo número: "));

if (A > B) {
    alert("O maior número é: " + A);
} else if (A < B) {
    alert("O maior número é: " + B);
} else {
    alert("Os dois números são iguais.");
}




