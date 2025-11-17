import EditModal from "./EditModal";

const TodoTable = ({
  data,
  loading,
  handleDelete,
  setSelectedTodoId,
  newDes,
  setNewDes,
  handleUpdate,
}) => {
  if (loading)
    return <span className="loading loading-spinner text-primary"></span>;

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {data.map((todo) => (
            <tr key={todo.id}>
              <th>{todo.id}</th>
              <td>{todo.description}</td>

              <td>
                <label
                  htmlFor="my_modal_7"
                  className="btn btn-soft btn-warning"
                  onClick={() => {
                    setSelectedTodoId(todo.id);
                    setNewDes(todo.description);
                  }}
                >
                  Update
                </label>
              </td>

              <td>
                <button
                  className="btn btn-soft btn-error"
                  onClick={() => handleDelete(todo.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <EditModal
        newDes={newDes}
        setNewDes={setNewDes}
        handleUpdate={handleUpdate}
      />
    </div>
  );
};

export default TodoTable;
