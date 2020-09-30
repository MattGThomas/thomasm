import React, { Component } from "react";
import { MDBContainer, MDBCard, MDBBtn, MDBCardBody } from "mdbreact";
import Axios from "axios";

import ExpenseList from "./components/Expenses/ExpenseList";
import AddExpenseForm from "./components/Expenses/AddExpenseForm.js";
import EditExpenseForm from "./components/Expenses/EditExpenseForm.js";
import "./App.css";
class App extends Component {
  state = {
    expenses: [],
    toggle_switch: false,
  };

  componentDidMount() {
    Axios.get("http://localhost:3000/expenses")
      .then((res) => {
        this.setState({ expenses: res.data.data });
      })
      .catch((err) => {
        console.log(`this is the error: ${err}`);
      });
  }
  toggleSwitch = () => {
    this.setState({
      toggle_switch: !this.state.toggle_switch,
    });
  };

  showForm() {
    if (!this.state.toggle_switch) {
      return (
        <MDBCard style={{ height: "100%", width: "65%" }}>
          <MDBCardBody>
            <AddExpenseForm updateExpenses={this.updateExpenses} />
          </MDBCardBody>
        </MDBCard>
      );
    }
    if (this.state.toggle_switch) {
      return (
        <MDBCard style={{ height: "100%", width: "65%" }}>
          <MDBCardBody>
            <EditExpenseForm updateExpenses={this.updateExpenses} />
          </MDBCardBody>
        </MDBCard>
      );
    }
  }

  showAddExpense = () => {
    this.setState({
      toggle_switch: false,
    });
  };

  showAdd() {
    if (!this.state.toggle_switch) {
      return (
        <p
          style={{ paddingRight: "30px", color: "green" }}
          onClick={this.showAddExpense}
        >
          <strong>ADD AN EXPENSE</strong>
        </p>
      );
    } else {
      return (
        <p
          style={{ paddingRight: "30px" }}
          onClick={this.showAddExpense}
          className="expense-toggle"
        >
          ADD AN EXPENSE
        </p>
      );
    }
  }
  showEditExpense = () => {
    this.setState({
      toggle_switch: true,
    });
  };
  showEdit() {
    if (this.state.toggle_switch) {
      return (
        <p
          style={{ paddingLeft: "30px", color: "green" }}
          onClick={this.showEditExpense}
        >
          <strong>EDIT EXPENSE</strong>
        </p>
      );
    } else {
      return (
        <p
          style={{ paddingLeft: "30px" }}
          onClick={this.showEditExpense}
          className="expense-toggle"
        >
          EDIT EXPENSE
        </p>
      );
    }
  }

  updateExpenses = (expenses) => {
    this.setState({
      expenses,
    });
  };

  deleteAllExpenses() {
    Axios.delete("http://localhost:3000/expenses")
      .then((res) => {
        window.location.reload(true);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }
  expenseTotal() {
    let { expenses } = this.state;
    let total = 0;
    for (let i = 0; i < expenses.length; i++) {
      total += expenses[i].price;
    }
    return total;
  }

  render() {
    return (
      <div>
        <MDBContainer>
          <div className="d-flex justify-content-between">
            <h2>Expense Total: {this.expenseTotal()}</h2>
            <MDBBtn color="danger" onClick={this.deleteAllExpenses}>
              DELETE ALL EXPENSES
            </MDBBtn>
          </div>
          <div style={{ paddingBottom: "3%" }}>
            <div style={{ fontSize: "1rem" }}>
              <ExpenseList expenses={this.state.expenses} />
            </div>
          </div>
          <div>
            <div className="d-flex justify-content-center">
              {this.showAdd()}

              <div className="ToggleSwitch ToggleSwitch__rounded">
                <div className="ToggleSwitch__wrapper">
                  <div
                    className={`Slider ${
                      this.state.toggle_switch && "isChecked"
                    }`}
                    onClick={this.toggleSwitch}
                  ></div>
                </div>
              </div>
              {this.showEdit()}
            </div>
            <div className="d-flex justify-content-center">
              {this.showForm()}
            </div>
          </div>
        </MDBContainer>
      </div>
    );
  }
}

export default App;
