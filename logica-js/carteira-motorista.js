// const prompt = require("prompt-sync")()
// const idade = ( prompt("Qual a sua idade: "))
// const CNH = ( prompt("Qual a categoria: "))
// if(idade >= 18 && CNH === "B" ){ 
//  console.log("Maior de idade e tem CNH categoria B")  
// }else{
//  console.log("Menor de idade e dirigindo sem CNH")  

// }

const prompt = require("prompt-sync")()
const idade = ( prompt("Qual a sua idade: "))
const CNH = ( prompt("Possui habilitação: "))
if(idade >= 18  && CNH === "sim" ){ 
 console.log("Maior de idade e tem CNH ")  
}else{
 console.log("Menor de idade e dirigindo sem CNH")  

}
