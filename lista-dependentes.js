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
    ],
};

cliente.dependentes.push({
    nome: 'Vitor',
    parentesco: 'filho',
    dataNasc: '06/04/2016'
})
// console.log(cliente)

const filhoMaisNovo = cliente.dependentes.filter((dependente) => {
    return dependente.dataNasc == '06/04/2016';
})

console.log(filhoMaisNovo[0].nome)
