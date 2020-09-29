import React, { Component } from "react";
import { MDBIcon } from "mdbreact";
import Modal from "../Update/Modal.js";
import Axios from "axios";
class Expense extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  render() {
    return (
      <div
        style={{
          borderTop: "1px solid black",
          borderBottom: "1px solid black",
          borderRight: "1px solid black",
          width: "47%",
          paddingLeft: "1%",
        }}
      >
        ID: {this.props.expense.id}, Expense Name: {this.props.expense.name},
        Expense Type: {this.props.expense.type}, Price:{" "}
        {this.props.expense.price}
        {/* <span>
          <MDBIcon icon="trash-alt" />
        </span> */}
      </div>
    );
  }
}

export default Expense;
