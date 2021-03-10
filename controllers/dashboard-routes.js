const router = require('express').Router();
const { User, Recipes } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    let query = {user_id: req.session.user_id};
    if (req.query.recipe) {
        query.recipe_id = req.query.recipe_id;
    }
        Recipes.findAll({
        order: [['recipe_id', 'ASC']],
        where: query,
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbRecipesData => {
        const Recipes = dbRecipesData.map(Recipes => Recipes.get({ plain: true }));
        res.render('dashboard', {Recipes, loggedin: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;