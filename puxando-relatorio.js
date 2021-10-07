const cliente = {
    nome: 'Fabricio',
    idade: 26,
    email: 'fabriciooh22@gmail.com',
    fone: '48998495399',
    saldo: 100,
    // Ações em um objeto, mais conhecido como 'métodos'
    depositar: function(valor) {
        // Usando o 'this' para fazer referência ao próprio objeto
        this.saldo += valor;
    },
}

// console.log(`Saldo atual ${cliente.saldo}`);
// cliente.depositar(30);
// console.log(`Saldo atualizado após o depósito é de: ${cliente.saldo}R$ Reais`);

// Método 'for in' mais voltado para objetos.
// Percorrendo um objeto
let relatorio = '';
for(let info in cliente) {
    // Fazendo a verificação para não exibir para o cliente os métodos ou objetos e sim somente como 'string'
    if(typeof cliente[info] == 'object' || typeof cliente[info] == 'function') {
        continue;
    } else {
        relatorio += `${info}: ${cliente[info]} \n`;
        // console.log(cliente[info])
    }
    
}

console.log(relatorio);

// console.log(typeof cliente.depositar)
// console.log(typeof cliente.nome)
