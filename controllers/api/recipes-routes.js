const router = require('express').Router();
const { Recipes, Category, User } = require('../../models');
const withAuth = require('../../utils/auth');

// GET all Recipes 
router.get('/', (req, res) => {
    Recipes.findAll({
        include: [
            // Include User/Category info with the models
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Category,
                attributes: ['category_name']
            }
        ]
    })
    .then(dbRecipesData => res.json(dbRecipesData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// GET a single Recipes 
router.get('/:id', (req, res) => {
    Recipes.findOne({
        where: {
            id: req.params.id
        },
        include: [
            // Include User/Category info with the models
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Category,
            }
        ]
    })
    .then(dbRecipesData => {
        if (!dbRecipesData) {
            res.status(404).json({ message: 'No Recipes found with this id!' });
            return;
        }
        res.json(dbRecipesData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// GET Recipes by category
router.get('/category/:id', (req, res) => {
    Recipes.findAll({
        where: {
            category_id: req.params.id
        },
        include: [
            // Include User/Category info with the models
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Category,
                attributes: ['category_name']
            }
        ]
    })
    .then(dbRecipesData => {
        if (!dbRecipesData) {
            res.status(404).json({ message: 'No Recipes found with this category!' });
            return;
        }
        res.json(dbRecipesData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Create a new Recipe with post
router.post('/', withAuth, (req, res) => {
    // Expects { recipe_name: "Fried Chicken", recipe_description: 'DELICIOUS FRIED CHICKEN THAT YOU CAN MAKE AT HOME!!', recipe_instructions: "Step 1: Step 2: Step 3:", recipe_ingredients: 'x,y,z,', user_id: 1, category_id: 2 }
    Recipes.create({
        recipe_name: req.body.recipe_name,
        recipe_description: req.body.recipe_description,
        recipe_instructions: req.body.recipe_instructions,
        recipe_ingredients: req.body.recipe_ingredients,
        user_id: req.session.user_id,
        category_id: req.body.category_id
    })
    .then(dbRecipesData => res.json(dbRecipesData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Update an Recipe's name, description, intructions, ingredients, category with put
router.put('/:id', withAuth, (req, res) => {
    // Expects { recipe_name: "Fried Chicken", recipe_description: 'DELICIOUS FRIED CHICKEN THAT YOU CAN MAKE AT HOME!!', recipe_instructions: "Step 1: Step 2: Step 3:", recipe_ingredients: 'x,y,z,', category_id: 2 }
    Recipes.update(
        {
            recipe_name: req.body.recipe_name,
            recipe_description: req.body.recipe_description,
            recipe_instructions: req.body.recipe_instructions,
            recipe_ingredients: req.body.recipe_ingredients,
            category_id: req.body.category_id
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbRecipesData => {
        if (!dbRecipesData) {
            res.status(404).json({ message: "No Recipes found with this id!" });
            return;
        }
        res.json(dbRecipesData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Delete a Recipe 
router.delete('/:id', withAuth, (req, res) => {
    Recipes.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbRecipesData => {
        if (!dbRecipesData) {
            res.status(404).json({ message: "No Recipes found with this id!" });
            return;
        }
        res.json(dbRecipesData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;