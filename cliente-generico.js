// Criando um objeto e definindo a suas proprieadades a partir de uma function
// function construtora
function cliente(nome, cpf, email, saldo) {
    // 'this' está fazendo referência a cliente... ex: cliente.nome, cliente.cpf
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo

    // Método 'depositar'
    this.depositar = function(value) {
        this.saldo += value
    }
}

// Criando um novo objeto a partir de uma função.
// passando uma instancia da function cliente, ex: criando um novo objeto a partir de...
const fabricio = new cliente('Fabricio', '08913548844', 'fabriciooh22@gmail.com', 100)

console.log(fabricio)