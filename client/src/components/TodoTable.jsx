import EditModal from "./EditModal";
import TodoForm from "./TodoForm";

const TodoTable = ({ data, loading, handleDelete }) => {
  const handleEdit = () => {
    document.getElementById("my_modal_5").showModal();
  };
  if (loading)
    return <span className="loading loading-spinner text-primary"></span>;

  console.log(data);
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((todo, index) => {
            return (
              <tr key={index}>
                <th>{todo.id}</th>
                <td>{todo.description}</td>
                <td>
                  <button
                    className="btn btn-soft btn-error"
                    onClick={() => handleDelete(todo.id)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <label
                    htmlFor="my_modal_7"
                    className="btn btn-soft btn-warning"
                  >
                    Update
                  </label>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <EditModal />
    </div>
  );
};

export default TodoTable;
