
   const numeros = [3,5,8,10];

//  const numerosMaioresQueCinco = numeros.filter(valor => valor > 5);
//  console.log(numerosMaioresQueCinco);

//  const numerosPares = numeros.filter(valor => valor % 2 == 0)
//  console.log(numerosPares);


   const usuarios = [
    {nomes:"João", idade:32},
    {nome:"Maria", idade:15},
    {nome:"Pedro", idade:21}]
    const idadeUsuarios = usuarios.map(usuario => usuario.idade)
     console.log(idadeUsuarios)

    for(let idade of idadeUsuarios){
        console.log(idade)

    }

   const usuariosMenoresDeIdade = usuarios.filter(usuario => usuario.idade<18)
   console.log(usuariosMenoresDeIdade)