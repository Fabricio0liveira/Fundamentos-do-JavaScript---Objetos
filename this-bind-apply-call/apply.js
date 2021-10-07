//  APPLY
// O método 'apply()' funciona de forma muito semelhante ao 'call()', porém recebe os argumentos em um array ao invés de separados.

function imprimeNomeEmail(tipoCliente, agencia) {
    console.log(`
        ${tipoCliente} da agencia ${agencia} - nome: ${this.nome}, email: ${this.email}
    `)
}

const cliente1 = {
    nome: "Carlos",
    email: "c@email.com"
}
   
const cliente2 = {
    nome: "Fred",
    email: "f@email.com"
}

const clienteEspecial = ['cliente especial', 'Rio de Janeiro']
const clienteEstudante = ['cliente estudante', 'Fortaleza']

imprimeNomeEmail.apply(cliente1, clienteEspecial)
imprimeNomeEmail.apply(cliente2, clienteEstudante)

/* 
Utilize o método 'apply()' caso você tenha um array de dados e o 'call()' para passar valores individuais como parâmetro. Lembre-se que o array deve seguir a ordem correta dos parâmetros informado na função.
*/