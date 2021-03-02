const router = require("express").Router();
const { Measure } = require("../../models");

// GET all Measures
router.get("/", (req, res) => {
  Measure.findAll()
    .then((dbMeasureData) => res.json(dbMeasureData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET a single Measure api/measure/1
router.get("/:id", (req, res) => {
  Measure.findAll({
    where: {
      id: req.params.id,
    }
  })
    .then((dbMeasureData) => {
      if (!dbMeasureData) {
        res.status(404).json({ message: "No Measure found with this id!" });
        return;
      }
      res.json(dbMeasureData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Create a new Measure with post
router.post("/", (req, res) => {
  // Expects { measure_name: "Ounces" }
  Measure.create({
    measure_name: req.body.measure_name,
  })
    .then((dbMeasureData) => res.json(dbMeasureData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// Update a Measure's name with put
router.put("/:id", (req, res) => {
  // Expects { measure_name: "Ounces" }
  Measure.update(
    {
      measure_name: req.body.measure_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbMeasureData) => {
      if (!dbMeasureData) {
        res.status(404).json({ message: "No Measure found with this id!" });
        return;
      }
      res.json(dbMeasureData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Delete a Measure
router.delete("/:id", (req, res) => {
  Measure.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbMeasureData) => {
      if (!dbMeasureData) {
        res.status(404).json({ message: "No Measure found with this id!" });
        return;
      }
      res.json(dbMeasureData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;