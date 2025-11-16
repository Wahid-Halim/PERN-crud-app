const express = require("express");
const router = express.Router();

// controllers
const {
  createTodo,
  getAllTodo,
  getTodo,
} = require("../controllers/todoControllers");

router.route("/todos").post(createTodo).get(getAllTodo);
router.route("/todos/:id").get(getTodo);

module.exports = router;
