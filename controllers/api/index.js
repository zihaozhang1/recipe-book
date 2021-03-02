  
const router = require('express').Router();

const userRoutes = require('./user-routes');
const recipeIngredientRoutes = require('./recipeIngredient-routes');
const IngredientRoutes = require('./ingredient-routes');
const MeasureRoutes = require('./measure-routes');
const RecipeRoutes = require('./recipe-routes');



router.use('/users', userRoutes);
router.use('/recipeIngredient', recipeIngredientRoutes);
router.use('/ingredient', IngredientRoutes);
router.use('/measure', MeasureRoutes);
router.use('/recipe', RecipeRoutes);


module.exports = router;