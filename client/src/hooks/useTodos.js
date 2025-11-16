import { useEffect, useState } from "react";

const useTodos = () => {
  const [data, setData] = useState([]);
  const [description, setDescription] = useState("");

  const fetchTodos = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/v1/todos");
      if (!res.ok) throw new Error("Failed to fetch todos");
      const json = await res.json();
      setData(json);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!description.trim()) return;

    try {
      const res = await fetch(`http://localhost:3000/api/v1/todos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ description }),
      });
      if (!res.ok) throw new Error("Failed to add new Todo");
      const json = await res.json();
      setData((value) => [...value, json]);
      setDescription("");
    } catch (error) {
      console.log(error.message);
    }
  };

  return { data, handleSubmit, setDescription, description };
};

export default useTodos;

// import { useState, useEffect } from "react";

// const useTodos = () => {
//   const [data, setData] = useState([]);

//   const fetchTodos = async () => {
//     try {
//       const res = await fetch("http://localhost:3000/api/v1/todos");
//       if (!res.ok) throw new Error("Failed to fetch todos");
//       const json = await res.json();
//       setData(json); // ✅ safe because this runs after render
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   useEffect(() => {
//     fetchTodos(); // ✅ runs once after first render
//   }, []);

//   return { data, fetchTodos }; // allow component to access todos and refresh
// };

// export default useTodos;
