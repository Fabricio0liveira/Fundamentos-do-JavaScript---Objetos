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

// Um novo construtor, baseando-se no objeto cliente
function clientePoupanca(nome, cpf, email, saldo, saldoPoup) {
    // Chamando as propriedades do objeto cliente aqui dentro desta function
    cliente.call(this, nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup
}

const fabiana = new clientePoupanca('Fabiana', '08828842941', 'fabiana@gmail.com', 100, 500)
console.log(fabiana)

// Adicionando um novo método para clientePoupanca
clientePoupanca.prototype.depositarPoup = function(value) {
    this.saldoPoup += value
}

// Chamando a instância do objeto e passando o método
fabiana.depositarPoup(30)
console.log(`Saldo poupança atualizado: ${fabiana.saldoPoup}`)
