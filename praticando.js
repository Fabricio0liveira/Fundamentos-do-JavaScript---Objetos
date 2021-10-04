const clientes = [
    {
        nome: 'Fabricio',
        idade: 26,
        cidade: 'Lages',
        dataNasc: '17/01/1995',
        estdCivil: 'Casado',
        esposa: 'Fabiana',
        dependentes:[
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
            {
                nome: 'Bernardo',
                parentesco: 'filho',
                dataNasc: '10/10/2019'
            },
        ],
        saldo: 100,
        tipoConta: 'Corrente',
        depositar: function(value) {
            this.saldo += value;
        },
        retirar: function(value) {
            this.saldo -= value;
        }
    },
];

// console.log(`Saldo atual: ${clientes[0].saldo}`)
// clientes[0].depositar(50);
// console.log(`Saldo atualizado: ${clientes[0].saldo}`)

const novoCliente = (nome, idade, cidade) => {
    return clientes.push({nome, idade, cidade});
}

// novoCliente('Fabiana', 29, 'Florianópolis');
// clientes[1].estdCivil = 'Casada';
// console.log(clientes[1])

const novosClientes = [
    {
        nome: 'Fernando',
        idade: 24,
        cidade: 'Lages',
        estdCivil: 'Casado'
    },
    {
        nome: 'Joyce',
        idade: 23,
        cidade: 'São José',
        estdCivil: 'Casada'
    },
    {
        nome: 'Fernanda',
        idade: 32,
        cidade: 'São José',
        estdCivil: 'Solteira'
    }
]

const juntarClientes = [...clientes, ...novosClientes];
console.log(juntarClientes);


// Outro exemplo
const pessoas = [
    {
        nome: "André",
        cpf: "12312312312",
        dependentes: [
            {
                nome: "Sara",
                parentesco: "filha",
                dataNasc: "20/03/2011"
            },
            {
                nome: "Samia",
                parentesco: "filha",
                dataNasc: "04/01/2014"
            }
        ],
    },
    {
        nome: "Juliana",
        cpf: "56767867867",
        dependentes: [
            {
                nome: "Sophia",
                parentesco: "filha",
                dataNasc: "30/08/2020"
            }
        ],
    }
]

const listaDependentes = [...pessoas[0].dependentes, ...pessoas[1].dependentes];
console.table(listaDependentes);