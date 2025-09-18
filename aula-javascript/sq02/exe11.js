// Decisão de Compra: Peça ao usuário para inserir o preço de um item e seu saldo. 
// Em seguida, determine se eles podem comprar o item ou não.


let preco = parseFloat(prompt("Digite o valor do item: "))
let saldo = parseFloat(prompt("Digite o seu saldo: "))

if (preco <= saldo){
    alert("Você pode levar o item!")
} else {
alert("Saldo insuficiente.")
}

