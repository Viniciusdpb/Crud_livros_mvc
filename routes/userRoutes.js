const express = require("express")
const router = express.Router()

const userController = require("../Controller/livroController")

router.post("/Livros", userController.createUser)

router.get("/Livros", userController.getAllUsers)

router.get("/Livros/:id", userController.getUserById)

router.put("/Livros/:id", userController.updateUser)

router.delete("/Livros/:id", userController.deleteUser)

module.exports = router