import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";

function App() {
  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  return (
    <div>
      <h1>Expense Tracker</h1>
      <input
        type="text"
        value={expenseName}
        onChange={(e) => setExpenseName(e.target.value)}
      />

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <input value={category} onChange={(e) => setCategory(e.target.value)} />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <ExpenseForm />
    </div>
  );
}

export default App;
