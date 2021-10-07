class Cliente {
    // Atributos (características)
    constructor(nome, email, cpf, saldo) {
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    // Métodos (comportamento)
    depositar(value) {
        this.saldo += value
    }

    exibirSaldo() {
        console.log(`Saldo atual: ${this.saldo} Reais`)
    }
}

// Fazendo uma instância da 'classe Cliente'
const fabiana = new Cliente('Fabiana', 'fabiana@gmail.com', '01829843956', 100)
console.log(fabiana)

fabiana.depositar(200)
fabiana.exibirSaldo()