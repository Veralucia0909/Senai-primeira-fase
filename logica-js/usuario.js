const prompt = require("prompt-sync")()
const usuario =  prompt("Digite o usuario: ")
const senha =  prompt("Digite a senha: ")
if (usuario === "admin" && senha === "12345") {
 console.log("Acessso liberado")  
}else{
 console.log("Acesso negado")  

}
