'use strict'

const funcionarios = [
    {
    nome: 'Maria Souza',
    cargo: 'Designer',
    imagem: 'maria.jpg'
    },
    {
    nome: 'João Silva',
    cargo: 'DBA',
    imagem: 'joao.jpg'
    },
    
    {
     nome: 'Hugo Pereira',
     cargo: 'FrontEnd',
     imagem: 'hugo.jpg'
     },
        
     {
     nome: 'Ana Maria',
     cargo: 'BackEnd',
            imagem: 'ana.jpg'
     }      
]


function criarCards(funcionarios){
    const container = document.getElementById('card-container')

    const card = document.createElement('div')
    card.classList.add('card')

    const imagem = document.createElement('img')
    imagem.src = `./img/${funcionarios.imagem}`
    imagem.alt = funcionarios.nome

    const description = document.createElement('div')
    description.classList.add('card-description')

    const nome = document.createElement('h2')
    nome.textContent = funcionarios.nome

    const cargo = document.createElement('p')
    cargo.textContent = funcionarios.cargo

    description.replaceChildren(nome, cargo)
    card.replaceChildren(imagem, description)

    container.appendChild(card)






}

funcionarios.forEach(criarCards)

