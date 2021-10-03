const clientes = [
    {
        nome: 'Fabricio',
        cpf: '032145698745',
        dependentes: [
            {
                nome: 'Be',
                parentesco: 'filho',
                dataNasc: '20/03/2013'
            },
            {
                nome: 'Vitor',
                parentesco: 'filho',
                dataNasc: '06/04/2016'
            },
        ],
    },
    {
        nome: 'Fabiana',
        cpf: '03214458845',
        dependentes: [
            {
                nome: 'Theo',
                parentesco: 'filho',
                dataNasc: '10/10/2019'
            },
            {
                nome: 'Wanessa',
                parentesco: 'filho',
                dataNasc: '06/04/2008'
            },
        ],
    },
    {
        nome: 'Fernanda',
        cpf: '0721454445',
        dependentes: [
            {
                nome: 'Fernando',
                parentesco: 'irmao',
                dataNasc: '10/10/2015'
            },
            {
                nome: 'Valentina',
                parentesco: 'irma',
                dataNasc: '06/04/2012'
            },
        ],
    },
];

// Spread Operator
// const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes];


const listaDependentes = [];
for(let index in clientes) {
    listaDependentes.push(...clientes[index].dependentes)
}
console.table(listaDependentes);

// Outro exemplo
const numerosA = [5, 4, 8, 7, 10, 0];
const numerosB = [3, 1, 2, 9, 6];

const numerosAeB = [...numerosA, ...numerosB].sort((a, b) => {
    return a - b;
});
console.log(numerosAeB);

// Mais um exemplo
const fichaGuerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
}
   
const equipoGuerreiro = {
    espada: "Andúril",
    capa: "capa élfica +2"
}

// const guerreiro = {fichaGuerreiro, equipoGuerreiro} // Espelhamento incorreto, criando dois objetos.
// console.log(guerreiro);
// {
//     fichaGuerreiro: { nome: 'Aragorn', classe: 'guerreiro' },
//     equipoGuerreiro: { espada: 'Andúril', capa: 'capa élfica +2' }
// }

const guerreiro = {...fichaGuerreiro, ...equipoGuerreiro};
console.log(guerreiro);