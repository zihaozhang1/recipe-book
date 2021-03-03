  
const router = require('express').Router();

const userRoutes = require('./user-routes');
const recipesRoutes = require('./recipes-routes');
const categoryRoutes = require('./category-routes');

router.use('/users', userRoutes);
router.use('/recipes', recipesRoutes);
router.use('/categories', categoryRoutes);

module.exports = router;