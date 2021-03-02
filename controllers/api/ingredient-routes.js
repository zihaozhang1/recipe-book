const router = require("express").Router();
const { Ingredient } = require("../../models");

// GET all Ingredients
router.get("/", (req, res) => {
  Ingredient.findAll()
    .then((dbIngredientData) => res.json(dbIngredientData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET a single Ingredient api/Ingredient/1
router.get("/:id", (req, res) => {
  Ingredient.findAll({
    where: {
      id: req.params.id,
    }
  })
    .then((dbIngredientData) => {
      if (!dbIngredientData) {
        res.status(404).json({ message: "No Ingredient found with this id!" });
        return;
      }
      res.json(dbIngredientData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Create a new Ingredient with post
router.post("/", (req, res) => {
  // Expects { ingredient_name: "Ounces" }
  Ingredient.create({
    ingredient_name: req.body.ingredient_name,
  })
    .then((dbIngredientData) => res.json(dbIngredientData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// Update a Ingredient's name with put
router.put("/:id", (req, res) => {
  // Expects { ingredient_name: "Ounces" }
  Ingredient.update(
    {
      ingredient_name: req.body.ingredient_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbIngredientData) => {
      if (!dbIngredientData) {
        res.status(404).json({ message: "No Ingredient found with this id!" });
        return;
      }
      res.json(dbIngredientData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Delete a Ingredient
router.delete("/:id", (req, res) => {
  Ingredient.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbIngredientData) => {
      if (!dbIngredientData) {
        res.status(404).json({ message: "No Ingredient found with this id!" });
        return;
      }
      res.json(dbIngredientData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;