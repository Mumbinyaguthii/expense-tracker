import { useState } from "react";

function ExpenseForm({ onAddExpense }) {
  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      id: Date.now(),
      name: expenseName,
      amount: Number(amount),
      category,
      date: date,
    };

    onAddExpense(newExpense);
  };

  return (
    <div>
      <h2>Add Expense</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Expense Name:
          <input
            type="text"
            value={expenseName}
            onChange={(e) => setExpenseName(e.target.value)}
          />
        </label>

        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>

        <label>
          Category:
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="food">Food</option>
            <option value="transport">Transport</option>
            <option value="bills">Bills</option>
            <option value="shopping">Shopping</option>
            <option value="other">Other</option>
          </select>
        </label>

        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>

        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
