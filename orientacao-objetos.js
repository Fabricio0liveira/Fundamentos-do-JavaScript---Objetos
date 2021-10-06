class Pessoa {
    // Atributos (características)
    constructor(nome, sobrenome, cpf, email) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.cpf = cpf
        this.email = email
    }

    // Métodos (comportamento)
    exibirNomeCompleto() {
        console.log(`${this.nome} ${this.sobrenome}`)
    }
}

// Exemplo de Herança
class Programador extends Pessoa {
    constructor(nome, sobrenome, cpf, email, linguagem) {
        // Fazendo a referência a class Pessoa com 'super'
        super(nome, sobrenome, cpf, email)
        this.linguagem = linguagem
    }
}

// Objeto 
// O Objeto é a instância de uma classe. Exemplo:
const novoDev = new Programador('Fabricio', 'Oliveira', 'fabriciooh22@gmail.com', '07923559955', 'Javascript') 
console.log(novoDev)