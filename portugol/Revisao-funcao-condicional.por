programa {
   inclua biblioteca Matematica 

  funcao inicio() {
   cadeia nome
    real nota1, nota2, nota3, media, frequencia, aprovado, reprovado
    escreva("Digite seu nome: ")
   leia(nome)
   escreva("Digita primeira nota: ")
   leia(nota1)
  escreva("Digita primeira nota: ")
  leia(nota2)
  escreva("Digita primeira nota: ")
  leia(nota3)
  media = (nota1 + nota2 + nota3) / 3
  media=Matematica.arredondar(media,2)
  // escreva("Media final:" + media) 

  escreva("De 0 a 1 digite a frequencia: ")
  leia(frequencia)
  frequencia = frequencia * 100
  limpa()
 escreva(nome, " sua média final é:  ", media, "\n E sua frequencia é ", frequencia, "% \n")


se(media >= 7 e frequencia >=80){
  escreva("Aprovado!")
  }senao{
    escreva("Reprovado!")

  }
 
  }
}
