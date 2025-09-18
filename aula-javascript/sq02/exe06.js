// Senha Segura: Peça ao usuário para criar uma senha. 
// Verifique se a senha tem pelo menos 8 caracteres.

let senha
senha = prompt("Digite sua senha:")
if (senha.length >=8) {
    alert("Acesso permitido")
}else{
    alert ("Acesso negado")
}
