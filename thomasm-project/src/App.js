import React, { Component } from "react";
import { MDBContainer, MDBCard } from "mdbreact";
import Axios from "axios";
// import Expense from "./components/Expenses/Expense.js";
import ExpenseList from "./components/Expenses/ExpenseList";
import AddExpenseForm from "./components/Expenses/AddExpenseForm.js";

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
            <h2>lorem</h2>
            <p>lorem</p>
          </MDBCard>

          <AddExpenseForm updateExpenses={this.updateExpenses} />
        </MDBContainer>
      </div>
    );
  }
}

export default App;
