  
const router = require('express').Router();

const userRoutes = require('./user-routes');
const RecipeRoutes = require('./recipeIngredient-routes');

router.use('/users', userRoutes);
router.use('/recipe', RecipeRoutes);

module.exports = router;