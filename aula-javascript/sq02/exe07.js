// Classificação de Notas: Peça ao usuário para inserir sua nota em uma escala de 0 a 100 
// e, em seguida, atribua uma classificação (A, B, C, D ou E) com base na nota.

let nota = (prompt("Digite sua nota de 0 a 100"))

if (nota >= 90){
alert("Sua nota é A!")
} else if (nota >= 80){
alert("Sua nota é B.")
} else if (nota >= 70){
alert("Sua nota é C!")
} else if (nota >= 60){
alert("Sua nota é D!")
} else {
alert("Sua note é E!")
}