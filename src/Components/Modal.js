import { useState } from "react";

import "./Modal.css";

const Modal = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
      date: "",
      company: "",
      position: "",
      link: "",
      status: "",
      notes: "",
    }
  );
  const [errors, setErrors] = useState("");

  const handleFormChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    onSubmit(formState);
    closeModal();
  };

  const validateForm = () => {
    if (
      formState.date &&
      formState.company &&
      formState.position &&
      formState.link &&
      formState.status &&
      formState.notes
    ) {
      setErrors("");
      return true;
    } else {
      let errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key);
        }
      }
      setErrors(errorFields.join(", "));
      return false;
    }
  };
  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
      <div className="modal">
        <form>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              name="date"
              value={formState.date}
              onChange={handleFormChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="company">Company Name</label>
            <input
              name="company"
              value={formState.company}
              onChange={handleFormChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="position">Position Title </label>
            <input
              name="position"
              value={formState.position}
              onChange={handleFormChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="link">Job Posting Link</label>
            <input name="link" />
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              name="status"
              value={formState.status}
              onChange={handleFormChange}
            >
              <option value="0">Please select a status</option>
              <option value="applied">Applied</option>
              <option value="in-progress">In progress</option>
              <option value="need-to-apply">Need to Apply</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="notes">Notes</label>
            <textarea
              name="notes"
              value={formState.notes}
              onChange={handleFormChange}
            />
          </div>

          {errors && <div className="error">{`Please include: ${errors}`}</div>}
          <button type="submit" className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
