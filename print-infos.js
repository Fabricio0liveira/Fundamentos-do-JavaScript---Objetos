const cliente = {
    nome: 'Fabricio',
    idade: 26,
    cpf: '12345678',
    email: 'fabriciooh22@gmail.com'
}

console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos.`)

// Três primeiros dígitos do cpf
console.log(cliente.cpf.substring(0, 3))