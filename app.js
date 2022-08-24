const path = require("path")

const express = require("express")

const bodyParser = require("body-parser")

const mainRoutes = require("./routes/main")

const app = express()


app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'images')));
app.use(express.static(path.join(__dirname, 'fa')));


app.use(mainRoutes);

app.listen(3000)