const User = require('./User');
const Ingredient = require('./Ingredient');
const Measure = require('./Measure');
const Recipe = require('./Recipe');
const recipeIngredient = require('./recipeIngredient');



// Create associations
//user to recipeIngredient 
User.hasMany(recipeIngredient, {
  foreignKey: 'user_id'
});
//recipeIngredient belongs to user 
recipeIngredient.belongsTo(User, {
  foreignKey: 'user_id'
});
//inventory belongs to category
recipeIngredient.belongsTo(Ingredient, {
  foreignKey: 'ingredient_id'
});
//inventory belongs to category
recipeIngredient.belongsTo(Measure, {
  foreignKey: 'measure_id'
});
//inventory belongs to category
recipeIngredient.belongsTo(Recipe, {
  foreignKey: 'recipe_id'
});

module.exports = { Ingredient, Measure, Recipe, recipeIngredient, User };