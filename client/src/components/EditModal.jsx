import UpdateForm from "./UpdateForm";

const EditModal = () => {
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box relative">
          <UpdateForm />
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
