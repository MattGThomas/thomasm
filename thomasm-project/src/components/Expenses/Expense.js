import React from "react";
import { MDBIcon } from "mdbreact";

const Expense = (props) => {
  return (
    <div>
      Expense Name: {props.expense.name}, Expense Type: {props.expense.type},
      Price: {props.expense.price}
      <span>
        <MDBIcon icon="trash-alt" />
      </span>
    </div>
  );
};

export default Expense;
