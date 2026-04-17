const express = require("express")
const app = express()

const LivrosRoutes = require("./routes/LivrosRoutes")

app.get("/", (request, response) => {
    response.send("Nothing")
})

app.use(express.json())

app.use("/", LivrosRoutes)

module.exports = app