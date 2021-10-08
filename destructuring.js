const numerosPares = [2, 4, 6];
const numerosImpares = [1, 3, 5];

const numeros = [...numerosPares, ...numerosImpares];
console.log(numeros.sort((a, b) => {
    return a - b;
}));

// Outro exemplo
const [num1, num2, ...outrosNumeros] = [1, 2, 3, 4, 5]
console.log(num1, num2, outrosNumeros); // 1, 2 [3, 4, 5]

// Outro exemplo 
// Passando valor padrão caso a variável não tenha nenhum valor atribuído
// Será utilizado somente se não existir nenhum valor atribuído
const [nome1 = 'fabricio'] = [];
console.log(nome1);

// Outro exemplo
const pessoa = {
    nome: 'Fabricio',
    idade: 26
}

const pessoaComTelefone = {
    ...pessoa, telefone: 4898495399
}
console.log(pessoa, pessoaComTelefone)

// const nome = pessoa.nome;
// Ou tbm poderia fazer desta forma: 
const { nome } = pessoa;
console.log(nome)
// Duas formas de fazer, com o mesmo resultado


// Outro exemplo
function imprimirDados(dados) {
    const {nome, idade, telefone} = dados;
    console.log(nome, idade, telefone);
    // Poderia também somente exibir os dados, passando: console.log(dados);
}
imprimirDados(pessoaComTelefone);

// Segundo exemplo
function imprimirDados1({nome, idade, telefone}) {
    console.log(nome, idade, telefone);
}
imprimirDados1(pessoaComTelefone);