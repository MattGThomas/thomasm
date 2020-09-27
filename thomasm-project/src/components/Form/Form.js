import React from "react";

import { MDBBtn, MDBInput } from "mdbreact";

const Form = (props) => {
  return (
    <div>
      <MDBInput label="name" />
      <select>
        <option value="option 1">option 1</option>
        <option value="option 2">option 2</option>
        <option value="option 3">option 3</option>
      </select>
      <MDBInput label="price" />

      <MDBBtn>Add New Expense</MDBBtn>
    </div>
  );
};

export default Form;
