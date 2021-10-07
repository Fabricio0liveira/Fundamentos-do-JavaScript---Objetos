// BIND 
// O método bind() “prende” ou “liga” uma função ao contexto de um objeto.

const personagem = {
    nome: 'Princesa Leia',
    apresentar: function() {
        return `A personagem é ${this.nome}`
    }
}

const personagemGenerico = personagem.apresentar
// console.log(personagemGenerico()) //a personagem é undefined

// Resolvemos este problema com 'bind()'
const personagemDefinido = personagemGenerico.bind(personagem)
console.log(personagemDefinido())

const pessoa1 = {
    nome: 'Fabricio',
    dependente: {
            nome: 'bernardo',
            parentesco: 'filho'
    },
    exibirDependente: function() {
        return `
            O dependente de ${this.nome}, é ${this.dependente.nome}.
        `
    }
}

const dependenteGenerico = pessoa1.exibirDependente
// console.log(dependenteGenerico())
const dependenteDefinido = dependenteGenerico.bind(pessoa1)
console.log(dependenteDefinido())