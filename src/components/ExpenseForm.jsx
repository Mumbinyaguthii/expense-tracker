function ExpenseForm() {
  return (
    <div>
      <h2>Add Expense</h2>

      <form>
        <label>
          Expense Name:
          <input type="text" />
        </label>

        <label>
          Amount:
          <input type="number" />
        </label>

        <label>
          Category:
          <select>
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
          <input type="date" />
        </label>

        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
