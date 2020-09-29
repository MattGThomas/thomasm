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

  deleteExpense = () => {
    const { id } = this.state;
    const payload = { id };
    console.log("********* this is id, payload before call", payload);
    // console.log("**********************", typeof payload.id);
    // parseInt(payload.id);
    // console.log("***********************", typeof parseInt(payload.id));
    // payload = parseInt(payload);
    console.log(payload);
    Axios.delete(`http://localhost:3000/expenses/${id}`)
      .then((res) => {
        window.location.reload(true);
        console.log("this is what is actually sending ", id, payload);
        console.log(res);
        // this.props.updateExpenses();
      })
      .catch((err) => {
        console.log("err, ", err);
      });

    // axios.delete(URL, {
    //   headers: {
    //     Authorization: authorizationToken
    //   },
    //   data: {
    //     source: source
    //   }
    // });
  };
  selectChangeHandler = (evt) => {
    evt.preventDefault();
    this.setState({
      type: evt.target.value,
    });
  };
  render() {
    // const { name, price, type, id } = this.state;
    return (
      <div>
        <div>
          <h4>you can use this form to edit your current expenses</h4>
        </div>
        <form onSubmit={this.editExpense}>
          {/* <form onSubmit={this.deleteExpense}> */}
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
          <MDBBtn onClick={this.deleteExpense}>Delete Expense</MDBBtn>
        </form>
      </div>
    );
  }
}

export default EditExpenseForm;
