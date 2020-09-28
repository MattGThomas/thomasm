import React, { Component } from "react";
import { MDBIcon } from "mdbreact";
import Axios from "axios";
class Expense extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Expense Name: {this.props.expense.name}, Expense Type:{" "}
        {this.props.expense.type}, Price: {this.props.expense.price}
        <span>
          <MDBIcon icon="trash-alt" />
        </span>
      </div>
    );
  }
}

export default Expense;
