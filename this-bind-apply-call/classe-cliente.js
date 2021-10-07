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
        console.log(`Saldo atual: ${this.saldo} Reais \n`)
    }
}

// Fazendo uma instância da 'classe Cliente'
const fabiana = new Cliente('Fabiana', 'fabiana@gmail.com', '01829843956', 100)
console.log(fabiana)

fabiana.depositar(200)
fabiana.exibirSaldo()

class ClienteVip extends Cliente{
    constructor(nome, email, cpf, saldo, saldoVip, agencia) {
        super(nome, email, cpf, saldo)
        this.saldoVip = saldoVip
        this.agencia = agencia
    }

    juros() {
        this.saldoVip += this.saldo * 2
    }

    exibirSaldoVip() {
        console.log(`O saldo de clientes Vips é o seu saldo normal multiplicado por 2. SaldoVip atual: ${this.saldoVip} Reais.`)
    }
}

const fabricio = new ClienteVip('Fabricio De Oliveira', 'fabricio@email.com', '07729742953', 200, 0, '4218')
console.log(fabricio)

fabricio.juros()
fabricio.exibirSaldo()
fabricio.exibirSaldoVip()