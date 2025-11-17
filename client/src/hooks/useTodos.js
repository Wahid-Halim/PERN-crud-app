import { useEffect, useState } from "react";

const useTodos = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState("");
  const [newDes, setNewDes] = useState("");

  // Fetch all todos (runs ONCE)
  const fetchTodos = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/api/v1/todos");
      if (!res.ok) throw new Error("Failed to fetch todos");
      const json = await res.json();
      setData(json);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // Add new todo
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!description.trim()) return;

    try {
      const res = await fetch("http://localhost:3000/api/v1/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description }),
      });

      if (!res.ok) throw new Error("Failed to add new Todo");

      const json = await res.json();

      // Add new todo immediately to UI
      setData((prev) => [...prev, json]);

      setDescription("");
    } catch (error) {
      console.log(error.message);
    }
  };

  // handle Delete todo
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/api/v1/todos/${id}`, {
        method: "DELETE",
      });
      setData((prev) => prev.filter((todo) => todo.id !== id));
      if (!res.ok) throw new Error("Could not delete the todo");
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/api/v1/todos/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description: newDes }),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    data,
    loading,
    description,
    setDescription,
    handleSubmit,
    handleDelete,
    newDes,
    setNewDes,
    handleUpdate,
  };
};

export default useTodos;
