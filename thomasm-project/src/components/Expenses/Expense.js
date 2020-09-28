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

  show = () => {
    this.setState({
      showModal: true,
    });
  };
  hide = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    return (
      <div>
        <span onClick={this.show}>
          ID: {this.props.expense.id}, Expense Name: {this.props.expense.name},
          Expense Type: {this.props.expense.type}, Price:{" "}
          {this.props.expense.price}
        </span>
        <span>
          <MDBIcon icon="trash-alt" />
        </span>
        <Modal show={this.state.showModal} close={this.hide} />
      </div>
    );
  }
}

export default Expense;
