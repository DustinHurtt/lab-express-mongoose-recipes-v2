const express = require('express')
const router = express.Router()

const Recipe = require('../models/Recipe.model')

//  Iteration 3 - Create a Recipe route
//  POST  /recipes route

router.post('/', (req, res, next) => {

    Recipe.create(req.body)
        .then((createdRecipe) => {
            console.log(createdRecipe)
            res.json(createdRecipe)
        })
        .catch((err) => {
            console.log(err)
            res.json(err)
        })

})

//  Iteration 4 - Get All Recipes
//  GET  /recipes route

router.get('/', (req, res, next) => {

    Recipe.find()
        .then((foundRecipes) => {
            console.log(foundRecipes)
            res.json(foundRecipes)
        })
        .catch((err) => {
            console.log(err)
            res.json(err)
        })

})


//  Iteration 5 - Get a Single Recipe
//  GET  /recipes/:id route

router.get('/details/:recipeId', (req, res, next) => {

    Recipe.findById(req.params.recipeId)
        .then((foundRecipe) => {
            console.log(foundRecipe)
            res.json(foundRecipe)
        })
        .catch((err) => {
            console.log(err)
            res.json(err)
        })

})


//  Iteration 6 - Update a Single Recipe
//  PUT  /recipes/:id route

router.post('/update/:recipeId', (req, res, next) => {

    Recipe.findByIdAndUpdate(
        req.params.recipeId,
        req.body,
        {new: true}
    )
        .then((updatedRecipe) => {
                console.log(updatedRecipe)
                res.json(updatedRecipe)
        })
        .catch((err) => {
            console.log(err)
            res.json(err)
        })

})


//  Iteration 7 - Delete a Single Recipe
//  DELETE  /recipes/:id route

router.get('/delete/:recipeId', (req, res, next) => {
    
    Recipe.findByIdAndDelete(req.params.recipeId)
        .then((deletedRecipe) => {
            console.log(deletedRecipe)
            res.json(deletedRecipe)
        })
        .catch((err) => {
            console.log(err)
            res.json(err)
        })
 
})

module.exports = router