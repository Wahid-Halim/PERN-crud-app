const pool = require("../config/db");

const createTodo = async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING *",
      [description]
    );
    res.status(200).json(newTodo.rows[0]);
  } catch (error) {
    console.log(error);
  }
};

const getAllTodo = async (req, res) => {
  try {
    const allTodo = await pool.query("SELECT * FROM todo");
    res.json(allTodo.rows);
  } catch (error) {
    console.log(error);
  }
};

const getTodo = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const todo = await pool.query("SELECT * FROM todo WHERE id = $1", [id]);
    res.status(200).json(todo.rows);
  } catch (error) {
    console.log(error.message);
  }
};

const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;

    const updateTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE id = $2 RETURNING *",
      [description, id]
    );
    res.json(updateTodo.rows[0]);
  } catch (error) {
    console.log(error);
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE id = $1", [id]);
    res.status(200).json("Delete successfully!");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createTodo,
  getAllTodo,
  getTodo,
  updateTodo,
  deleteTodo,
};
