const express = require("express")
const router = express.Router()

const livroController = require("../Controller/livroController")

router.post("/Livros", livroController.createLivro)

router.get("/Livros", livroController.getAllLivro)

router.get("/Livros/:id", livroController.getbyLivroId)

router.put("/Livros/:id", livroController.updateLivro)

router.delete("/Livros/:id", livroController.deleteLivro)

module.exports = router