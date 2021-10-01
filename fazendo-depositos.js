const cliente = {
    nome: 'Fabiana',
    idade: 29,
    cpf: '0321456987',
    email: 'fabiana@gmail.com',
    fones: ['48998495399', '48998600364'],
    dependentes: [
        {
            nome: 'Bernardo', 
            parentesco: 'filho',
            dataNasc: '20/03/2013'
        },
        {
            nome: 'Vitor',
            parentesco: 'filho',
            dataNasc: '06/04/2016'
        },
    ],
    saldo: 100,

    // Ações em um objeto, mais conhecido como 'métodos'
    depositar: function(valor) {
        // Usando o 'this' para fazer referência ao próprio objeto
        this.saldo += valor;
    }, 
    retitar: function(valor) {
        this.saldo -= valor;
    },
    adicionarDependente: function(nome, parentesco, dataNasc) {
        this.dependentes.push({nome, parentesco, dataNasc})
    },
    removerDependente: function(nome) {
        cliente.dependentes = this.dependentes.filter((dependente) => {
            return dependente.nome !== 'Bernardo'
        })
    }

};

// console.log(`Saldo atual ${cliente.saldo}`);
// cliente.depositar(30);
// console.log(`Saldo atualizado após o depósito é de: ${cliente.saldo}R$ Reais`);

// cliente.retitar(60);
// console.log(`Saldo após a retirada de 60 Reais é de: ${cliente.saldo}R$ Reais`);

cliente.adicionarDependente('Theo', 'filho', '10/10/2019')
console.log(cliente)

cliente.removerDependente('Vitor')
console.log(cliente)