require('dotenv').config()

const express = require("express");
const logger = require("morgan");
const mongoose = require('mongoose')

const recipesRouter = require('./routes/recipes')

const app = express();

// MIDDLEWARE
app.use(logger("dev"));
app.use(express.static("public"));
app.use(express.json());


app.get('/', (req, res) => {
    res.send("<h1>LAB | Express Mongoose Recipes</h1>");
});

app.use('/recipes', recipesRouter)


const port = process.env.PORT
// Start the server
app.listen(port, () => console.log('My first app listening on ' + port + "!"));

mongoose
    .connect(process.env.MONGODB_URI)
    .then(x => console.log("Connected to Database: " + `${x.connections[0].name}`))
    .catch(err => console.log(err + " Error connecting to database"))



//❗️DO NOT REMOVE THE BELOW CODE
module.exports = app;
