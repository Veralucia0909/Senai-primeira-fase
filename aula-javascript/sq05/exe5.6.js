
// 5.6// Mano Juca ta se aventurando em um novo gamezinho no celular dele.
// Ele ta se divertindo, mas não tem a menor ideia se ta
// mandando bem ou não. Crie um algoritmo que leia a pontuação que ele fez e diga
// como ele se saiu, sendo:
// - "Deu ruim", se pontuação <= 10
// - "Ta. .. (Acrescente aqui uma frase motivacional) ", se
// pontuação > 10 e pontuação <= 100
// - "Supimpa!", se pontuação > 100 e pontuação <= 200
// - MITOU!, se pontuação > 200

let pontuação = Number(prompt("Digite sua pontuação: "))
if (pontuação <=10) {
    alert("Deu ruim")
} else if (pontuação >=10 && pontuação <= 100) {
    alert("tente não erra na proxima");
} else if (pontuação > 100 && pontuação <= 200) {  
    alert("SUPIMBA")
 } else if (pontuação > 200) {
    alert("MITOU")
}