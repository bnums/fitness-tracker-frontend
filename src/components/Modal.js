import React from "react";
import "./Modal.css";

const Modal = (props) => {
  if (!props.show) {
    return null;
  }
  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">{props.title}</h4>
        </div>
        <div className="modal-body">{props.children}</div>
        <div className="modal-footer">
          {props.onSubmit ? (
            <button onClick={props.onSubmit} className="modal-submit">
              Submit
            </button>
          ) : null}
          <button onClick={props.onClose} className="modal-close">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
