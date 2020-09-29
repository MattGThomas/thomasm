import React, { Component } from "react";
import Expense from "./Expense.js";

import "./expense.css";

class ExpenseList extends Component {
  state = {
    current_page: 1,
    items_per_page: 5,
  };

  pageSelector = (evt) => {
    this.setState({
      current_page: Number(evt.target.id),
    });
  };
  render() {
    let { current_page, items_per_page } = this.state;
    const last_item = current_page * items_per_page;
    const first_item = last_item - items_per_page;

    const current_expenses = this.props.expenses.slice(first_item, last_item);
    const display_expenses = current_expenses.map((expense) => {
      return (
        <Expense
          key={expense.id}
          expense={expense}
          //   deleteExpense={this.deleteExpense}
        />
      );
    });
    const page_numbers = [];
    for (
      let i = 1;
      i <= Math.ceil(this.props.expenses.length / items_per_page);
      i++
    ) {
      page_numbers.push(i);
    }
    const display_page_numbers = page_numbers.map((number) => {
      return (
        <div key={number}>
          <ol key={number} id={number} onClick={this.pageSelector}>
            {number}
          </ol>
        </div>
      );
    });
    return (
      <div>
        <h2>Expenses</h2>
        <div>
          {/* {this.props.expenses.map((expense) => (
            <Expense
              key={expense.id}
              expense={expense}
              //   deleteExpense={this.deleteExpense}
            />
          ))} */}
          {display_expenses}
          <div className="expense-list-numbers">{display_page_numbers}</div>
        </div>
      </div>
    );
  }
}
export default ExpenseList;
