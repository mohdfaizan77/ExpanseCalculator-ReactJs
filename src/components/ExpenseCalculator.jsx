import React, { useState } from "react";

export default function ExpenseCalculator() {
  const [name, setname] = useState("");
  const [amount, setamount] = useState("");
  const [expanselist, setexpanselist] = useState([]);

  const handleAddExpense = () => {
    const newExpense = {
      name: name,
      amount: parseFloat(amount),
    };

    setexpanselist([...expanselist, newExpense]);
    setname("");
    setamount("");
  };

  const calculateTotalExpense = () => {
    return expanselist.reduce((total, expense) => total + expense.amount, 0);
  };

  return (
    <div>
      <h4 className="eHeading">Expanse Calculator</h4>
      <div>
        <label htmlFor="name" className="elabel">Name : </label>
        <input
        className="einput"
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
      </div>

      <br />

      <div>
        <label htmlFor="amount" className="elabel">Amount : </label>
        <input
        className="einput"
          type="number"
          name="amount"
          id="amount"
          value={amount}
          onChange={(e) => setamount(e.target.value)}
        />
      </div>

      <br />

      <button className="eaddTask" onClick={handleAddExpense}>Add to List</button>

      <br />

      <ul>
        {expanselist.map((item, index) => (
          <li key={index}>{item.name} - ${item.amount}</li>
        ))}
      </ul>

      <p className="etotal">Total Expenses: ${calculateTotalExpense()}</p>
    </div>
  );
}
