const express = require("express");
const router = express.Router();

// controllers
const { createTodo, getAllTodo } = require("../controllers/todoControllers");

router.route("/todos").post(createTodo).get(getAllTodo);

module.exports = router;
