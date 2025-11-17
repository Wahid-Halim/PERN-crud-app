const EditModal = ({ newDes, setNewDes, handleUpdate }) => {
  return (
    <div>
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />

      <div className="modal" role="dialog">
        <div className="modal-box relative">
          <h3 className="text-xl font-bold mb-3">Update Todo</h3>

          <input
            className="input input-bordered w-full"
            value={newDes}
            onChange={(e) => setNewDes(e.target.value)}
            placeholder="New description..."
          />

          <button
            className="btn btn-primary w-full mt-4 mb-10"
            onClick={handleUpdate}
          >
            Save
          </button>

          <label
            htmlFor="my_modal_7"
            className="btn btn-soft btn-error absolute right-3 bottom-3"
          >
            Close
          </label>
        </div>

        <label className="modal-backdrop" htmlFor="my_modal_7"></label>
      </div>
    </div>
  );
};

export default EditModal;
