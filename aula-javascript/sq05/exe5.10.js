// 5.10// Na feira da rua do Mano Juca, as maçãs custam R$0, 30 se ele
// comprar menos de uma dúzia, mas se comprar 12 ou mais cada uma custa
// apenas R$0, 25. Crie um programa para ler o numero de maças que ele vai
// comprar e informar quanto sera o total da compra.

let quantidade = Number(prompt("Digite quantas maçãs: "));
let preco;

if (quantidade < 12) {
    preco = 0.30;
} else {
    preco = 0.25;
}

let total = quantidade * preco;
alert("O valor total da compra é: R$ " + total.toFixed(2));