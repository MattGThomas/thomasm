import React, { Component } from "react";
import { MDBContainer, MDBCard, MDBBtn } from "mdbreact";
import Axios from "axios";
// import Expense from "./components/Expenses/Expense.js";
import ExpenseList from "./components/Expenses/ExpenseList";
import AddExpenseForm from "./components/Expenses/AddExpenseForm.js";
import EditExpenseForm from "./components/Expenses/EditExpenseForm.js";

class App extends Component {
  state = {
    expenses: [],
  };

  componentDidMount() {
    Axios.get("http://localhost:3000/expenses")
      .then((res) => {
        console.log("this is res***", res);
        this.setState({ expenses: res.data.data });
        console.log("************", this.state.expenses);
      })
      .catch((err) => {
        console.log(`this is the error: ${err}`);
      });
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

  // ********************************************************************************************
  render() {
    let { expenses } = this.state;

    // const display_expenses = expenses.map((expense) => {
    //   return <Expense key={expense.id} expense={expense} id={expense.id} />;
    // });

    return (
      <div>
        <MDBContainer>
          <MDBCard>
            {/* {display_expenses} */}
            {/* {this.state.expenses.map((expense) => {
              return (
                <Expense key={expense.id} expense={expense} id={expense.id} />
              );
            })} */}
            <ExpenseList expenses={this.state.expenses} />
          </MDBCard>

          <AddExpenseForm updateExpenses={this.updateExpenses} />
          <EditExpenseForm updateExpenses={this.updateExpenses} />
          <MDBBtn onClick={this.deleteAllExpenses}>DELETE ALL EXPENSES</MDBBtn>
        </MDBContainer>
      </div>
    );
  }
}

export default App;
