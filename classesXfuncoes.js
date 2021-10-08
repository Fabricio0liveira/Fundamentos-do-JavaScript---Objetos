// Exemplo de 'objeto literal'
const livro = {
    nome: 'React Native',
    editora: 'Casa do Código',
    pagina: 185,
    anunciar: function() {
        console.log('A Alura indica o livro ' + this.nome + '!')
    }
}

livro.anunciar()

// Exemplo de uma function construtora de um objeto
// const Livro = function(nome, editora, paginas) {
//     gNome = nome,
//     gEditora = editora,
//     gPaginas = paginas

//     this.getNome = function() {
//         return gNome
//     }
//     this.getEditora = function() {
//         return gEditora
//     }
//     this.getPaginas = function() {
//         return gPaginas
//     }
// }

// const GraphQL = new Livro('GraphQL', 'Casa do Código', 143)
// console.log(GraphQL.getNome())
// console.log(GraphQL.getEditora())
// console.log(GraphQL.getPaginas())

// Exemplo da const livro com o uso de classes
class Livro {
    constructor(nome, editora, paginas) {
        this.nome = nome
        this.editora = editora
        this.paginas = paginas
    }
    anunciarTitulo() {
        console.log(`Título: ${this.nome}`)
    }
    descreverTitulo() {
        console.log(`
            ${this.nome} é um livro da editora ${this.editora} e tem ${this.paginas} páginas.
        `)
    }

}

const Javascript = new Livro('JavaScript', 'Casa Do Código', 200)
Javascript.anunciarTitulo()
Javascript.descreverTitulo()

// console.log(typeof Livro) 
// Classes no javascript, também são functions

class LivroColecao extends Livro {
    constructor(nome, nomeColecao) {
        // Pegando somente o nome da class Livro
        super(nome)
        this.nomeColecao = nomeColecao
    }

    descreverColecao() {
        console.log(`O livro ${this.nome} faz parte da coleção ${this.nomeColecao}`)
    }
}

const LogicaDeProgramacao = new LivroColecao('Lógica De Programação', 'Comece a Programar')
LogicaDeProgramacao.descreverColecao()