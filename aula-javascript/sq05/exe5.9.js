// 5.9// Tendo como entrada a altura (em metros) e o gênero (1: feminino;
// 2: masculino) de uma pessoa, construa um programa que calcule e
// apresente seu peso ideal utilizando as formulas abaixo:
// - para mulheres: (62.1 * altura) - 44.7
// - para homens: (72.7 * altura) - 58


let altura = parseFloat(prompt("Digite a sua altura: "));
let genero = Number(prompt("Digite o gênero: (1-feminino, 2-masculino):"));
let pesoIdeal;
if (genero === 1) {
    pesoIdeal = (62.1 * altura) - 44.7;
    alert("Seu peso ideal é: " + pesoIdeal.toFixed(2) + " kg");
} else if (genero === 2) {
    pesoIdeal = (72.7 * altura) - 58;
    alert("Seu peso ideal é: " + pesoIdeal.toFixed(2) + " kg");
} else {
    alert("Gênero inválido. Use 1 para feminino ou 2 para masculino.");
}

