// Calculadora Simples: Crie uma calculadora simples que peça ao usuário 
// dois números e uma operação (adição, subtração, multiplicação ou divisão) e, em seguida, exiba o resultado.

let num1 = prompt("Digite o primeiro Número:")
num1 = Number(num1)
let num2 = prompt("Digite o segundo Número:")
num2 = Number(num2)
let operacao = prompt("Digite a operação: +, -, *, /):");
let resultado

if (operacao === "+"){
    resultado = num1 + num2
    alert(`${num1} + ${num2} = ${resultado}`)
} else if (operacao === "-"){
    resultado = num1 - num2
    alert(`${num1} - ${num2} = ${resultado}`)
} else if (operacao === "*"){
    resultado = num1 * num2
    alert(`${num1} * ${num2} = ${resultado}`)
} else if(operacao === "/"){
    if (num2 !== 0) {
        resultado = num1 / num2
        alert(`${num1} / ${num2} = ${resultado}`)
    } else {
        alert("Erro: Divisão por 0 é matematicamente inviável")
    }
} else {
    alert("Operação inválida")
}