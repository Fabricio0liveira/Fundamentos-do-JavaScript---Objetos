const cliente = {
    nome: 'Fabiana',
    idade: 29,
    cpf: '0321456987',
    email: 'fabiana@gmail.com',
    fones: ['48998495399', '48998600364']
};

// Verificando dados de uma array, dentro de um objeto
cliente.fones.forEach(phone => {
    console.log(phone);
});