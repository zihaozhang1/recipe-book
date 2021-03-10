const User = require('./User');
const Recipes = require('./Recipes');
const Category = require('./Category');

// Create associations
//user to Recipes 
User.hasMany(Recipes, {
  foreignKey: 'user_id'
});
//Recipes belongs to user 
Recipes.belongsTo(User, {
  foreignKey: 'user_id'
});
//Recipes belongs to category
Recipes.belongsTo(Category, {
  foreignKey: 'category_id'
});

module.exports = { Recipes, Category, User };