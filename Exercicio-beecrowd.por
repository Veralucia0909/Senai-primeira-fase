programa {
  funcao inicio() {

    // BEE 1005 - Média 1

    // real A, B, Média
    // escreva("Primeira nota: ")
    // leia(A)
    // escreva("Segunda nota: ")
    // leia(B)
    // Media = (A * 3.5 + B * 7.5) / 11.0
    // escreva("A Media final é = " + Media )

    // BEE 1006 - Média 2

    // real A,B,C Média
    // escreva("Primeira nota: ")
    // leia(A)
    // escreva("Segunda nota: ")
    // leia(B)
    // escreva("Terceira nota: ")
    // leia(C)
    // Media = (A * 2 + B * 3 + C * 5) / 10
    // escreva("A Media final é = " + Media )

  
    
   // BEE 1008 - Salário

// inteiro numero, horas, valor
// real salario, valorHora
// escreva("Numero funcionario: ")
// leia(numero)
// escreva("Horas trabalhada: ")
// leia(horas)
// escreva("Valor por hora: ")
// leia(valorHora)
// escreva("Qual o salario: ")
// escreva(salario)
// salario = horas*valorHora
// escreva("salario R$ " + salario, ",00") 

    
// BEE 1009 Salário com bonus 15%

// real salario, vendas, comissao
// cadeia nomeSobrenome

// escreva("Nome do vendedor: ")
// leia(nomeSobrenome)
// escreva("Salario fixo: ")
// leia(salario)
// escreva("Vendas do mês: ")
// leia(vendas)
// salario = (vendas*15)/100 + (salario)
// escreva("Salario fixo R$ " + salario, "0")   


// BEE 1010 Calculo simples
    
// inteiro codigo_1, codigo_2, quantidade_1, quantidade_2
// real valor_1, valor_2, Total, valor
// escreva("Codigo: ")
// leia(codigo_1)
// escreva("Quantidade: ")
// leia(quantidade_1)
// escreva("Valor unitario: ")
// leia(valor_1)
// escreva("Codigo: ")
// leia(codigo_2)
// escreva("Quantidade: ")
// leia(quantidade_2)
// escreva("Valor unitario: ")
// leia(valor_2)
// valor = quantidade_1 * valor_1  +  quantidade_2 * valor_2
// escreva("Total a pagar: R$ " + valor, "0" )

// BEE 1014 Consumo

    // real media, combustivel, distancia
    // escreva("Distância percorrida: ")
    // leia(distancia)
    // escreva("Quantos de litros: ")
    // leia(combustivel)
    // media = distancia / combustivel
    // escreva("Media: " + media + " Km/L")

    // BEE 1018 Cedulas
    inteiro N, i, notas[7] = {100, 50, 20, 10, 5, 2, 1}, quantidade
    escreva("Digite o Valor: ")
    leia(N)
    escreva(N, "\n")
    escreva("Quantidade de Notas: ")
    leia(100)
    escreva("Quantidade de Notas: ")
    leia(50)
    escreva("Quantidade de Notas: ")
    leia(20)
    escreva("Quantidade de Notas: ")
    leia(5)
    escreva("Quantidade de Notas: ")
    leia(2)
    escreva("Quantidade de Notas: ")
    leia(1)
    quantidade = N / notas[i]
    escreva(quantidade, " nota(s) de R$ ", notas[i], ",00\n")
    N = N % notas[i]

    


    


    
  }
}
