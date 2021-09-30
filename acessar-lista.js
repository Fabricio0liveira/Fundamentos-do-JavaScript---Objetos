const cliente = {
    nome: 'Vitor',
    idade: 15,
    cpf: '9876543210',
    email: 'vitor@gmail.com'
}

const chaves = ['nome', 'idade', 'cpf', 'email']
// console.log(cliente[chaves[1]])

// Consigo acessar os elementos do objeto desta forma também
// console.log(cliente['email'])

chaves.forEach(info => {
    console.log(cliente[info])
})

// console.log(cliente['cidade'])
// undefined
