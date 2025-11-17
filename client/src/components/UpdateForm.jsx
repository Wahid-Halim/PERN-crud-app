const UpdateForm = () => {
  return (
    <form className="mb-15 mt-6 space-x-2">
      <input
        type="text"
        placeholder="Warning"
        className="input input-warning"
      />
      <button className="btn btn-warning">Save</button>
    </form>
  );
};

export default UpdateForm;
