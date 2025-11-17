import { useEffect, useState } from "react";

const useTodos = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [description, setDescription] = useState("");
  const [newDes, setNewDes] = useState("");

  const [selectedTodoId, setSelectedTodoId] = useState(null);

  // Fetch todos
  const fetchTodos = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/api/v1/todos");
      const json = await res.json();
      setData(json);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // Add todo
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!description.trim()) return;

    try {
      const res = await fetch("http://localhost:3000/api/v1/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description }),
      });

      const json = await res.json();
      setData((prev) => [...prev, json]);
      setDescription("");
    } catch (err) {
      console.log(err);
    }
  };

  // Delete todo
  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3000/api/v1/todos/${id}`, {
        method: "DELETE",
      });

      setData((prev) => prev.filter((t) => t.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  // Update todo
  const handleUpdate = async () => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/v1/todos/${selectedTodoId}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ description: newDes }),
        }
      );

      const updated = await res.json();

      setData((prev) =>
        prev.map((todo) => (todo.id === selectedTodoId ? updated : todo))
      );

      setNewDes("");
      setSelectedTodoId(null);

      document.getElementById("my_modal_7").checked = false; // close modal
    } catch (err) {
      console.log(err);
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
    selectedTodoId,
    setSelectedTodoId,
    handleUpdate,
  };
};

export default useTodos;
