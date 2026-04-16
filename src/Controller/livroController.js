const userModel = require("../models/userModel")

const getAllLivro = (req, res) => {
    const Livros = userModel.findAll()

    return res.send(Livros)
}

const createLivro = (req, res) => {
    /*
    const {
        title,
        author
    } =  req.body 
    */

    const title = req.body.title
    const author = req.body.author

    /*
    const newLivro = {
        title,
        author
    }
    */

    const newLivro = {
        id: Date.now(),
        title: title,
        author: author
    }
    const createdLivro = userModel.create(newLivro)

    res.status(201).json(createdLivro)
}

const getbyLivroId = (req, res) => {
    const id = req.params.id

    const Livro = userModel.findById(id)

    if ( !Livro ) {
        return res.status(404).json({
            message: "Usuário não encontrado."
        })
    }

    return res.json(Livro)
}

const updateLivro = (req, res) => {
    const {id} = req.params

    const {
        title,
        author
    } = req.body

    const userToUpdate = {
        title: title,
        author: author
    }

    const updatedLivro = userModel.update(id, userToUpdate)

    if ( !updatedLivro ) {
        return res.status(404).json({
            message: "Usuário não encontrado."
        })
    }

    return res.json(updatedLivro)
}

const deleteLivro = (req, res) => {
    const id = Number(req.params.id)
    
    const  Livro = userModel.remove(id)

    if ( !Livro ) {
        return res.status(404).json({
            message: "Livro não encontrado."
        })
    }

    return res.json(Livro)
} 

module.exports = {
    getAllLivro,
    createLivro,
    getbyLivroId,
    updateLivro,
    deleteLivro
}