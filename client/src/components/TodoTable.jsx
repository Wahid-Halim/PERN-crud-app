import useTodos from "../hooks/useTodos";

const TodoTable = () => {
  const { data } = useTodos();

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
                  <button className="btn btn-soft btn-error">Delete</button>
                </td>
                <td>
                  <button className="btn btn-soft btn-warning">Warning</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TodoTable;
