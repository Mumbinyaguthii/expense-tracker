function ExpenseList({ expenses }) {
  return (
    <div>
      <h2>My Expenses</h2>

      {expenses.length === 0 ? (
        <p>No expenses to display.</p>
      ) : (
        <ul>
          {expenses.map((expense) => (
            <li key={expense.id}>
              <strong>{expense.name}</strong> - ksh {expense.amount}
              <br />
              Category: {expense.category}
              <br />
              Date: {expense.date}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExpenseList;
