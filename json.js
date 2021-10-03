// Exemplos do formato JSON:
// {
//     "id": 59,
//     "titulo": "ECMAScript 6",
//     "autor": "Diego Martins de Pinho",
//     "categoria": "programação"
// }

// {
//     "editora": "Casa do Código",
//     "catalogo": [
//         {
//         "id": 50,
//         "titulo": "Primeiros Passos com NodeJS",
//         "autor": "João Rubens",
//         "categoria": "programação",
//         "versoes": ["ebook", "impresso"]
//         },
//         {
//         "id": 59,
//         "titulo": "ECMAScript 6",
//         "autor": "Diego Martins de Pinho",
//         "categoria": "programação",
//         "versoes": ["ebook"]
//         },
//         {
//         "id": 39,
//         "titulo": "Orientação a Objetos",
//         "autor": "Thiago Leite",
//         "categoria": "programação",
//         "versoes": ["ebook", "impresso"]
//         }
//    ]
// }

// Convertendo json em string
const jsonLivro = JSON.stringify([
    {
        id: 50,
        titulo: "Primeiros Passos com NodeJS",
        autor: "João Rubens",
        categoria: "programação",
        versoes: ["ebook", "impresso"]
    },
    {
        id: 39,
        titulo: "Orientação a Objetos",
        autor: "Thiago Leite",
        categoria: "programação",
        versoes: ["ebook", "impresso"]
    },
])
// console.log(jsonLivro)

// Convertendo string em formato json
const objLivro = JSON.parse(jsonLivro)
console.log(objLivro, '\n')

const titulo = objLivro[1].titulo;
console.log(titulo, '\n');

const {versoes, categoria} = objLivro[0];
console.log(`Versões: ${versoes},\ncategoria: ${categoria}.\n`);

const autores = []
for(let info in objLivro) {
    autores.push(objLivro[info].autor);
    
}

console.log(autores);