// setTimeout(()=>{    // function
//     console.log("Executei depois de 3 seg")
// },3000)

function saudacao(){
    console.log("Olá")
}

function imprimedados(){
    console.log("imprimir")
}

setTimeout(imprimedados,5000)   //acincrona vai aparecer primeiro o Olá e depois o imprimir
saudacao()

function soma(){
    console.log (2+3)
}
setTimeout(soma,3000)