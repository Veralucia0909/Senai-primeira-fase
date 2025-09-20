// Dias em um Mês: Peça ao usuário para inserir o nome de um mês e, em seguida, determine quantos dias ele tem.


let mes = prompt("Digite o nome do mês: ")
let dias = 30;

if (mes === "janeiro" || mes === "março" || mes === "maio" || mes === "julho" || mes === "agosto" || mes === "outubro" || mes === "dezembro") {
    dias = 31;
} else if (mes === "fevereiro") {
    dias = 28;
    
}

alert("O mês de " + mes + " tem " + dias + " dias.");