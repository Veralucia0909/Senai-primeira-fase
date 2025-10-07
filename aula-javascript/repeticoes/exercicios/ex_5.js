// Altere o programa anterior para fornece a tabuada do numero que o usuario pedir.

// let numero = prompt("Digite um numero da tabuada que quer ver: ")
//  if (numero){
//  for(let i = 1; i <= 10; i++){
//  alert(`${numero} x ${i} =${numero * i}`);
// }

// } else {

// }
//     alert("Digite um numero!");
    

let numero = Number(prompt("Tabuada do quê"));
for(let i = 1; i <= 10; i++){
    let resultado = i * numero
    alert(i + "x" + numero + "=" + resultado);

}

