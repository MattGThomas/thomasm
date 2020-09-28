import React, { Component } from "react";
import Axios from "axios";

import { MDBBtn, MDBInput } from "mdbreact";

class EditExpenseForm extends Component {
  state = {
    name: "",
    type: "",
    price: null,
    id: null,
  };
  changeHandler = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  editExpense = () => {
    const { name, type, price, id } = this.state;
    const payload = { name, type, price, id };

    Axios.put("http://localhost:3000/expenses", payload)
      .then((response) => {
        console.log(response);
        this.props.updateExpenses(response.data);
      })
      .catch((err) => {
        console.log("err, ", err);
      });
  };

  render() {
    // const { name, price, type, id } = this.state;
    return (
      <div>
        <form onSubmit={this.editExpense}>
          <MDBInput
            label="Expense ID"
            type="number"
            name="id"
            value={this.state.id}
            onChange={this.changeHandler}
          />
          <MDBInput
            label="Expense Name"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.changeHandler}
          />
          <div>
            <select value={this.state.type} onChange={this.selectChangeHandler}>
              <option defaultValue="">Please select a type</option>
              <option value="Groceries">Groceries</option>
              <option value="Automotive">Automotve</option>
              <option value="Bills">Bills</option>
            </select>
          </div>
          <MDBInput
            label="Price"
            name="price"
            type="number"
            value={this.state.price}
            onChange={this.changeHandler}
          />
          <MDBBtn type="submit">Save Changes</MDBBtn>
        </form>
      </div>
    );
  }
}

export default EditExpenseForm;
