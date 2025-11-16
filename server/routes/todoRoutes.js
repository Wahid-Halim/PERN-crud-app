const express = require("express");
const router = express.Router();

// controllers
const {
  createTodo,
  getAllTodo,
  deleteTodo,
  getTodo,
  updateTodo,
} = require("../controllers/todoControllers");

router.route("/todos").post(createTodo).get(getAllTodo);
router.route("/todos/:id").get(getTodo).patch(updateTodo).delete(deleteTodo);

module.exports = router;
