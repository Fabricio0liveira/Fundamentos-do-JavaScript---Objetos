function cliente(nome, cpf, email, saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(value) {
        this.saldo += value
    }
}

// Objeto sendo criado a partir de uma função construtora, no caso 'function cliente'
const fernando = new cliente('Fernando', '08838741965', 'fernando@gmail.com', 200)

// Utilizando a herança para a criação de novos objetos a partir de 'function cliente'
function clientePoupanca(nome, cpf, email, saldo, saldoPoup) {
    cliente.call(this, nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup
}

const joao = new clientePoupanca('João', '02506600440', 'joao@gmail.com', 100, 300)

clientePoupanca.prototype.depositarPoup = function(value) {
    this.saldoPoup += value
}

console.log(fernando.hasOwnProperty("saldoPoup"))
console.log(joao.hasOwnProperty("saldoPoup"))
console.log(fernando instanceof cliente)
console.log(typeof fernando)
console.log(typeof joao)
console.log(joao instanceof clientePoupanca)
console.log(Function.prototype.isPrototypeOf(cliente))
console.log(cliente.constructor === Function)