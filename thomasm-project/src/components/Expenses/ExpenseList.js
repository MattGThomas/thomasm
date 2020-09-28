import React, { Component } from "react";
import Expense from "./Expense.js";
import Axios from "axios";

class ExpenseList extends Component {
  render() {
    return (
      <div>
        <h2>Expenses</h2>
        <div>
          {this.props.expenses.map((expense) => (
            <Expense
              key={expense.id}
              expense={expense}
              //   deleteExpense={this.deleteExpense}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default ExpenseList;
