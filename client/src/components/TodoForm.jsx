import useTodos from "../hooks/useTodos";

const TodoForm = () => {
  const { handleSubmit, setDescription, description } = useTodos();

  return (
    <form className="" onSubmit={handleSubmit}>
      <div className="flex space-x-3">
        <input
          type="text"
          placeholder="enter task"
          className="input input-primary flex-1"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <button className="btn btn-primary btn-soft " type="submit">
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
