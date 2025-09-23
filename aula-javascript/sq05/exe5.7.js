// 5.7// Nosso amigo Mano Juca ganhou tanto dinheiro no Uber que resolveu
// tirar ferias. Sem destino, sem regras, vida loka, lobo solitario, sem destino, um dia em cada lugar, 
// sem dia pra voltar, ate o dinheiro acabar. Logo nos primeiros dias ele encontrou um paraíso e resolveu quebrar sua
// única regra e ficar alguns dias por ali. Encontrou um albergue meio bom e fez check in, mas não conseguiu entender de forma alguma como o hotel
// calculava o valor da conta. Ele e meio burro, voces sabem. O albergue utilizas faixas de preço de acordo com o numero de diarias
// Até 5 diárias, o preço por diária é R$100, 00; De 6 a 10 diarias, R$90, 00 por dia;
// A partir de 11 dias, sai R$80, 00 por dia; Outros fatos relevantes para determinar o valor da conta:
// - Ele acabou ganhando um desconto a mais de 10% do valor total porque teve um "envolvimento emocional" com a moça que trabalha no balcão;
// - Quando ele abriu a carteira pra pagar, a moça viu que ele tem a carteirinha da Associação dos motoristas do Uber de Palhoça, entidade
// com a qual o albergue tem convenio, e aplicou mais 15% (do valor total)
// de desconto;
// - Ele se passou e vai pagar multa de R$150 por danos materiais. Criar um programa que le o numero de dias que ele vai ficar no albergue
// e apresente o valor final da conta e sua composição (os detalhes, pagamentos, descontos . . . ) ;

let dias = Number(prompt("Digite o numero de diarias: "));
let diaria;

if (dias <= 5) {
  diaria = 100;
} else if (dias <= 10) {
  diaria = 90;
} else {
  diaria = 80;
}

let valor = dias * diaria;
let desconto1 = valor * 0.10; 
let desconto2 = valor * 0.15; 
let multa = 150;

let valorTotal = valor - desconto1 - desconto2 + multa;

// alert("Dias: " + dias);
// alert("Valor bruto: R$" + valor.toFixed(2));
// alert("Desconto emocional (10%): R$" + desconto1.toFixed(2));
// alert("Desconto carteirinha (15%): R$" + desconto2.toFixed(2));
// alert("Multa: R$" + multa.toFixed(2));
// alert("Valor final a pagar: R$" + valorTotal.toFixed(2));

alert("Número de dias: " + dias +
  "\nValor bruto: R$" + valor.toFixed(2) +
  "\nDesconto emocional (10%): R$" + desconto1.toFixed(2) +
  "\nDesconto carteirinha (15%): R$" + desconto2.toFixed(2) +
  "\nMulta: R$" + multa.toFixed(2) +
  "\nValor final a pagar: R$" + valorTotal.toFixed(2))


