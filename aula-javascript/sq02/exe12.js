// Idade do Cachorro: Peça ao usuário que insira a idade de seu cachorro e, 
// em seguida, calcule a idade do cachorro em anos humanos (um ano de cachorro equivale a sete anos humanos). 
// Informe se o doguinho já pode se aposentar por idade 

let idade = parseInt(prompt("Digite a idade do seu cachorro"))

if (7*idade >= 65){
    alert("Seu cachorro pode se aposentar!")
} else {
    alert("Ainda não pode se aposentar!")
}


