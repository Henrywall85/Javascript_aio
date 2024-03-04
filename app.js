let expensesCounter = 0;

function addExpenseInput() {
  const expensesDiv = document.getElementById("expenses");
  const newExpenseDiv = document.createElement("div");
  newExpenseDiv.innerHTML = `
        <input type="text" placeholder="Expense name" id="expense-name-${expensesCounter}">
        <input type="number" placeholder="Amount" id="expense-amount-${expensesCounter}">
    `;
  expensesDiv.appendChild(newExpenseDiv);
  expensesCounter++;
}

function calculateBudget() {
  const income = parseFloat(document.getElementById("income").value);
  let totalExpenses = 0;
  for (let i = 0; i < expensesCounter; i++) {
    const amount = parseFloat(
      document.getElementById(`expense-amount-${i}`).value
    );
    if (!isNaN(amount)) {
      // Check if the amount is a number
      totalExpenses += amount;
    }
  }

  const remaining = income - totalExpenses;
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `Total Expenses: $${totalExpenses.toFixed(
    2
  )} <br> Remaining Balance: $${remaining.toFixed(2)}`;

  if (remaining < 0) {
    resultDiv.style.color = "red";
  } else {
    resultDiv.style.color = "green";
  }
}

// Initialize with one expense input
addExpenseInput();
