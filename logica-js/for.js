for(let i = 0; i <=10; i++){
    console.log(i)
}


for(let i = 10; i >=0; i--){
    console.log(i)
    
}

for(let i = 0; i <=20; i+=2){
    console.log(i)

}
   
let soma = 0

for(let i = 1; i<100; i++){
    soma += i
}
   
console.log("resultado da soma ", soma)


let alunos = ["João","Maria","Joana"]
alunos.push("Pedro")

for(let i = 0; i <alunos.length; i++){
    console.log("alunio: ", alunos[i])
}

console.log(alunos.length)

let frutas = ["Morango","Maça","Pera","Kiwi","Banana"]

for(let i = 0; i <frutas.length; i++){
    console.log("fruta: ", frutas[i])
}