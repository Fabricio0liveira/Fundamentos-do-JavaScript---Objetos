const cliente = {
    nome: 'Fabiana',
    idade: 29,
    cpf: '0321456987',
    email: 'fabiana@gmail.com',
    fones: ['48998495399', '48998600364']
};

cliente.dependentes = {
    nome: 'Bernardo',
    parentesco: 'Filho',
    dataNasc: '20/03/2013'
};


console.log(cliente.dependentes)

// Alterando o valor do nome do dependente
cliente.dependentes.nome = 'Bernardo Oliveira';
console.log(cliente.dependentes)