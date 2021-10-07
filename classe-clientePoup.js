class Cliente {
    // Atributos (características)
    constructor(nome, email, cpf, saldo) {
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    // Métodos (comportamentos)
    depositar(valor) {
        this.saldo += valor
    }

    exibirSaldo() {
        console.log(this.saldo)
    }
}

// Esta classe tem de 'herança' de 'Cliente', no caso está herdando os atributos.
class ClientePoupanca extends Cliente {
    constructor(nome, email, cpf, saldo, saldoPoupanca) {
        // 'super' esta atribuindo as 'características ou atributos' da 'classe Cliente'
        super(nome, email, cpf, saldo)
        this.saldoPoupanca = saldoPoupanca
    }

    depositarPoupanca(valor) {
        this.saldoPoupanca += valor
    }
}

// Fazendo a instância como um novo objeto de 'ClientePoupanca'
const fabiana = new ClientePoupanca('Fabiana', 'fabiana@email.com', '22225588449', 100, 500)
console.log(fabiana)

fabiana.depositar(100)
fabiana.depositarPoupanca(100)
console.log(fabiana)