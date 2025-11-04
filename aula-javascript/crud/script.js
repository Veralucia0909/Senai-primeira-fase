// teste crud

// const dinossauro = {
//     nome: 'Rex',
//     altura: '6'
// }

const mulherMaravilha = []

// dinossauros.push(dinossauro)

// document.getElementById('dino').innerHTML = `Nome: ${dinossauros[0].nome}; Altura: ${dinossauros[0].altura}`

function cadastrarVera(){
    let nomeLido = document.getElementById('inputNome').value
    let alturaLida = Number(document.getElementById('inputAltura').value)

    const dino = {
        nome: nomeLido,
        altura: alturaLida
    }
    mulherMaravilha.push(Vera)

    console.log(mulherMaravilha);
    
    limparForm()
    alert("Vera cadastrado com sucesso!")
    
}

function limparForm(){
    document.getElementById('inputNome').value = ''
    document.getElementById('inputAltura').value = ''
    // document.getElementById('inputPesoOuMassa').value = ''
    
    document.getElementById('inputNome').focus()
}