// 5.3 - Mano Juca enfrenta o rodízio de carros de São Paulo;
// Faça um algoritmo que leia o ultimo numero da placa do carro e mostre o
// dia em que ele não pode rodar pela cidade de Sao Paulo.
// Final 0 ou 1: não pode rodar na segunda-feira;
// Final 2 ou 3: não pode rodar na terça-feira;
// Final 4 ou 5: não pode rodar na quarta-feira;
// Final 6 ou 7: não pode rodar na quinta-feira;
// Final 8 ou 9: não pode rodar na sexta-feira.

let placa
placa = Number (prompt("ultimo numero: "))
if(placa == 0 || placa == 1){
alert("Não pode rodar na Segunda-feira")

}else if(placa == 2 || placa == 3){
alert("Não pode rodar na Terça-feira")

}else if(placa == 4 || placa == 5){
alert("Não pode rodar na Quarta-feira")

}else if(placa == 6 || placa == 7){
alert("Não pode rodar na Quirta-feira")

}else if(placa == 8 || placa == 9){
alert("Não pode rodar na Sexta-feira")


}else {
alert("Não sair de casa")
}









