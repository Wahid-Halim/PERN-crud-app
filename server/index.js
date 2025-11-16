const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./config/db");

// routes
const todoRoutes = require("./routes/todoRoutes");

//middleware
app.use(cors());
app.use(express.json());

//
app.use("/api/v1/", todoRoutes);

app.listen(3000, () => {
  console.log("Server is running");
});
