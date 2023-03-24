const usuarios = [
    {
        name: "João Vitor",
        email: "joao@wesleyramos.tk"
    },
    {
        name: "Wesley Ramos",
        email: "contato@wesleyramos.tk"
    }
]

const validar = usuarios.find(
    usuario => usuario.email !== 'contato@wesleyramos.tk'
)


console.log(validar)
// console.log(validar !== undefined)