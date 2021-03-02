const router = require('express').Router();
const { recipeIngredient, Recipe, Measure, Ingredient, User } = require('../../models');
const withAuth = require('../../utils/auth');

// GET all recipeIngredient 
router.get('/', (req, res) => {
    recipeIngredient.findAll({
        include: [
            // Include User/Recipe info with the models
            {
                model: Recipe,
                attributes: ['id']
            },
        ]
    })
    .then(dbrecipeIngredientData => res.json(dbrecipeIngredientData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});



module.exports = router;