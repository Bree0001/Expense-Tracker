const expenseElement = document.querySelector('.js-input-expense');
const amountElement = document.querySelector('.js-input-amount');
const categoryElement = document.querySelector('.js-select-category');
const calculateButton = document.querySelector('.js-calculate');
const totalElement = document.querySelector('.jsTotal');
const displayElement = document.querySelector('.expense-list');

let expenses = [];

calculateButton.addEventListener('click', function () {
  let expenseName = expenseElement.value;
  let amount = Number(amountElement.value);  
  let category = categoryElement.value;

  if (!expenseName || isNaN(amount) || amount <= 0 || !category) {
    alert('Please fill out all fields with valid data before attempting');
    return;  
  }

  const expense = {
    name: expenseName,
    amount: amount,
    category: category,
  };
  expenses.push(expense);

  getTotalAmount();
  updateExpenseList();

  expenseElement.value = '';
  amountElement.value = '';
  categoryElement.value = '';
});

function getTotalAmount() {
  let totalAmount = 0;
  for (let i = 0; i < expenses.length; i++) {  
    totalAmount += expenses[i].amount;
  }
  totalElement.textContent = `Total: $${totalAmount}`;
}

function updateExpenseList() {
  let expenseListHTML = '';
  expenses.forEach(expense => {
    expenseListHTML += `You spent $${expense.amount} on ${expense.name} (Category: ${expense.category}).<br>`;
  });
  displayElement.innerHTML = expenseListHTML;  
}
