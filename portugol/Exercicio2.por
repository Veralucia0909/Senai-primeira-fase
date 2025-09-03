programa {
  funcao inicio() {
  real salario, salario_diario 
  inteiro dias
  escreva("Digite seu salário: R$")
  leia(salario)
  escreva("Digite o número de dias que você trabalhou: ")
  leia(dias)
  salario_diario = salario / dias
  escreva("Seu salario diario deu: R$" + salario_diario )



   real conta, café, coxinha, halls, doceDeLeite 
   escreva("Preço do café: R$")
   leia(café)
   escreva("Preço da coxinha: R$")
   leia(coxinha)
   escreva("Preço do halls: R$")
   leia(halls)
   escreva("Preço do doceDeLeite: R$")
   leia(doceDeLeite)
   conta = café + coxinha + halls + doceDeLeite
   escreva("Total a pagar: R$" + conta) 



  real media, n1, n2, n3, n4
  escreva("nota n1:")
  leia(n1)
  escreva("nota n2:")
  leia(n2)
  escreva("nota n3:")
  leia(n3)
  escreva("nota n4:")
  leia(n4)
  media = (n1 + n2 + n3 + n4) / 4
  escreva("Media final:" + media)  



  inteiro pontos, vitorias, empates
  escreva("Digite o numero de vitorias: ")
  leia(vitorias)
  escreva("Digite o numero de empates: ")
  leia(empates)
  pontos = vitorias* 3 + empates
  escreva("\nPontuação total: " + pontos)



  real conta, café, coxinha, Halls, doceDeLeite
  escreva("Preço do café: R$")
   leia(café)
   escreva("Preço da coxinha: R$")
   leia(coxinha)
   escreva("Preço do halls: R$")
   leia(Halls)
   escreva("Preço do doceDeLeite: R$")
   leia(doceDeLeite)
   conta = 2*café + coxinha + Halls + doceDeLeite
   escreva("Total a pagar: R$" + conta)   



   real critico, dano_critico, dano
  escreva("digite o valor do dano: ")
  leia(dano)
  dano_critico = dano* 1.5
  escreva("O dano crítico é: " + dano_critico)  



  real dano_critico2, dano2, bonus
  escreva("digite o dano: ")
  leia(dano2)
  bonus = 1.5 * dano2/2
  dano_critico2 = dano2 + bonus
  escreva("O dano crítico é: " + dano_critico2) 



    real media, n1, p1, n2, p2
    escreva("Digite a nota n1: ")
    leia(n1)
    escreva("Digite a peso p1: ")
    leia(p1)
    escreva("Digite a nota n2: ")
    leia(n2)
    escreva("Digite a peso p2: ")
    leia(p2)
   media = (n1 * p1 + n2 *p2) / (p1 + p2)
   escreva("Media final é: " +  media)



    real poupanca, salario, moradia, agua, luz, internet, gasolina, netflix, telefone, outros
    escreva("\nDigite o valor do Salário: ")
    leia(salario)
    escreva("Digite o valor do aluguel: ")
    leia(moradia)
    escreva("Digite o valor da conta de água: ")
    leia(agua)
    escreva("Digite o valor da conta de luz: ")
    leia(luz)
    escreva("Digite o valor da conta de internet: ")
    leia(internet)
    escreva("Digite o valor do gasto de combustível: ")
    leia(gasolina)
    escreva("Digite o valor do da Netflix: ")
    leia(netflix)
    escreva("Digite o valor do plano telefônico: ")
    leia(telefone)
    escreva("Digite o valor de outros gastos: ")
    leia(outros)
    poupanca = salario-(moradia+agua+luz+internet+gasolina+netflix+telefone+outros)
    escreva("O valor guardado na poupança é: " + poupanca)



    real conta3, cafe3, coxinha3, halls3, doceDeLeite3
    escreva("\nDigite o valor do café: ")
    leia(cafe3)
    escreva("Digite o valor da coxinha: ")
    leia(coxinha3)
    escreva("Digite o valor do Halls: ")
    leia(halls3)
    escreva("Digite o valor do Doce de Leite: ")
    leia(doceDeLeite3)
    conta3 = 3*cafe3+coxinha3+halls3+2*doceDeLeite3
    escreva("O valor Total é: " + conta3)



    real cafe_per_capita, cafe4, alunos 
    escreva("\nDigite quantos litros de cafés consumido: ")
    leia(cafe4)
    escreva("Quantos alunos tomaram café: ")
    leia(alunos)
    cafe_per_capita = cafe4/alunos
    escreva("Quantidade de cafés por pessoa foi: " + cafe_per_capita + " litros")




    real cafe_per_capita2, cafe5, alunos2, extra
    escreva("\nDigite quantos cafés consumidos: ")
    leia(cafe5)
    escreva("Quantos alunos tomaram café: ")
    leia(alunos2) 
    extra = cafe5*3/6
    cafe_per_capita2 = (cafe5+extra)/alunos2
    escreva("A quantidade de cafés por pessoa foi: " + cafe_per_capita2)

 
  }
}
