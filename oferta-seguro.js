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
    saldo: 400,

    // Ações em um objeto, mais conhecido como 'métodos'
    depositar: function(valor) {
        // Usando o 'this' para fazer referência ao próprio objeto
        this.saldo += valor;
    },
}


const oferecerSeguro = (obj => {
    const propriedadesClientes = Object.keys(obj);
    // console.log(propriedadesClientes);

    // Verificando se no array propriedadesClientes, temos como dado: 'dependentes'
    if(propriedadesClientes.includes('dependentes')) {
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    } 
});

oferecerSeguro(cliente);


// Traz um array do objeto com os valores, enquanto o object.keys mostra as chaves.
// console.log(Object.values(cliente));

// Este exemplo exibe propriedade e valor do objeto em um array
// console.log(Object.entries(cliente));

