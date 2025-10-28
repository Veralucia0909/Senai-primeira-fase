let usuario

function cadastrarUsuario(){
//     console,log("Cadastrado")
 usuario = document.getElementById("inputUsuario").value
 document.getElementById("inputUsuario").value = ' '

 document.getElementById("resultado").innerHTML = ' Usuário cadastrado com sucesso: ' + usuario

}