// Faça um programa que calcule o valor de série: 1 + 1/2 + 1/3 + ...+ 1/10

let soma = 0;

for(i = 1; i <= 10; i++){
    soma += 1/i;
   
}

 alert("O valor em série é", + soma);