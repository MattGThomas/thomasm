import React, { Component } from "react";
import Expense from "./Expense.js";

class ExpenseList extends Component {
  render() {
    return (
      <div>
        <h2>Expenses</h2>
        <div>
          {this.props.expenses.map((expense) => (
            <Expense key={expense.id} expense={expense} />
          ))}
        </div>
      </div>
    );
  }
}
export default ExpenseList;
