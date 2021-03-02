const router = require("express").Router();
const { Recipe } = require("../../models");

// GET all Recipes
router.get("/", (req, res) => {
  Recipe.findAll()
    .then((dbRecipeData) => res.json(dbRecipeData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET a single Recipe api/Recipe/1
router.get("/:id", (req, res) => {
  Recipe.findAll({
    where: {
      id: req.params.id,
    }
  })
    .then((dbRecipeData) => {
      if (!dbRecipeData) {
        res.status(404).json({ message: "No Recipe found with this id!" });
        return;
      }
      res.json(dbRecipeData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Create a new Recipe with post
router.post("/", (req, res) => {
  // Expects { recipe_name: "Chicken Parmesan" }
  Recipe.create({
    recipe_name: req.body.recipe_name,
  })
    .then((dbRecipeData) => res.json(dbRecipeData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// Update a Recipe's name with put
router.put("/:id", (req, res) => {
  // Expects { recipe_name: "chicken breasts" }
  Recipe.update(
    {
      recipe_name: req.body.recipe_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbRecipeData) => {
      if (!dbRecipeData) {
        res.status(404).json({ message: "No Recipe found with this id!" });
        return;
      }
      res.json(dbRecipeData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Delete a Recipe
router.delete("/:id", (req, res) => {
  Recipe.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbRecipeData) => {
      if (!dbRecipeData) {
        res.status(404).json({ message: "No Recipe found with this id!" });
        return;
      }
      res.json(dbRecipeData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;