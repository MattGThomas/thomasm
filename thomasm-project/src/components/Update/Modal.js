import React from "react";
import { MDBBtn, MDBInput } from "mdbreact";
import "./modal.css";

const Modal = ({ close, show }) => {
  const modalClass = show ? "modal display-block" : "modal display-none";

  return (
    <div className={modalClass}>
      <section className="modal-main">
        <form>
          <MDBInput label="name" />
          <MDBInput label="price" />
        </form>
        <MDBBtn onClick={close}>close</MDBBtn>
        <MDBBtn>save</MDBBtn>
      </section>
    </div>
  );
};
export default Modal;
