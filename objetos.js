// Exemplos de objetos em JavaScript

const clientes = [
    {
        name: 'André',
        age: 36
    },
]

const newclient = (name, age) => {
    return clientes.push({name, age})
}

newclient('Fabricio', 26)
newclient('Vitor', 15)

console.log(clientes)