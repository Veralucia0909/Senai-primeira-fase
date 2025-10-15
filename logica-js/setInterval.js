// setInterval(()=>{
//     console.log("executei")

// },2000)

const prompt = require('prompt-sync')()

let conatdorInicial = Number (prompt ("Digite um valor inicial: "))
let contadorFinal = Number(prompt("Digite o valor final: "))


let intervalo = setInterval(()=>{
    console.log(conatdorInicial)
    conatdorInicial++
    if(conatdorInicial > contadorFinal){
        clearInterval(intervalo)
    }
   
},1000)