// Calculadora de IMC: Crie uma calculadora de Índice de Massa Corporal (IMC) que peça ao usuário seu peso e altura e, 
// em seguida, calcule e exiba o IMC. Informe também em que faixa o usuário se encontra.


let peso = prompt("Digite o seu peso: ")
let altura = prompt("Digite a sua altura: ")
let imc = peso / (altura * altura);
let classificacao = "";

if (imc < 18.5) {
    classificacao = "Abaixo do peso";
} else if (imc < 25) {
    classificacao = "Peso normal";
} else if (imc < 30) {
    classificacao = "Sobrepeso";
} else if (imc < 35) {
    classificacao = "Obesidade grau 1";
} else if (imc < 40) {
    classificacao = "Obesidade grau 2";
} else {
    classificacao = "Obesidade grau 3";
}

alert("Seu IMC é: " + imc.toFixed(2) + "\nClassificação: " + classificacao);