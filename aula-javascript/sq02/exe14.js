// Verificando Letra Maiúscula: Peça ao usuário para inserir uma letra e verifique se ela é maiúscula ou minúscula.

let letra = prompt("Digite uma letra: ")
if (letra === letra.toUpperCase()) {
    alert("A letra é Maiúscula.");
} else {
    alert("A letra é minúscula.");
}