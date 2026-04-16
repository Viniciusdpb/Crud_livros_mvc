const Livros = require("../data/livros")

const findAll = () => {
    return Livros
}

const create = (newLivro) => {
    Livros.push(newLivro)

    return newLivro
}

const findById = (id) =>{

    /*for ( let i = 0; i < Livros.length; i++ ){
        if (Livros[i].id == id ) {
         return Livros[i]
        }       
    }

    return null*/

    return Livros.find( livro => livro.id == id ) // isso faz o mesmo que o de cima
}

const update = (id, newLivro) => {
    const livro = Livros.find( livro => livro.id == id )

    if ( !livro ) {
        return undefined
    }

    // livro = {
    //     id: livro.id,
    //     name: newLivro.name,
    //     age: newLivro.age
    // }

    if (newLivro.name) {
            livro.name = newLivro.name
    }

    if (newLivro.age) {
            livro.age = newLivro.age
    }

    return livro
}

const remove = (id) => {
    const index = Livros.findIndex(livro => livro.id === id)

    const livro = Livros[index]

    if ( !livro ) {
        return undefined
    }

    Livros.splice(index, 1)

    return livro
}

module.exports = {
    findAll,
    create,
    findById,
    update,
    remove
}