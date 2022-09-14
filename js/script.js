const calculateExpense = () => {
  const income = document.getElementById("income");
  const incomeValue = income.value;
  const food = document.getElementById("food");
  const foodValue = food.value;
  const rent = document.getElementById("rent");
  const rentValue = rent.value;
  const clothes = document.getElementById("clothes");
  const clothesValue = clothes.value;



  if (
    incomeValue < 0 ||
    incomeValue == "" ||
    foodValue < 0 ||
    foodValue == "" ||
    rentValue < 0 ||
    rentValue == "" ||
    clothesValue < 0 ||
    clothesValue == ""
  ){
    alert("Inputs must be positive numbers");
    return;
  }
  // calculate expense
  const expense = parseInt(foodValue) + parseInt(rentValue) + parseInt(clothesValue);

  // calculate balance
  const balance = parseInt(income.value) - expense;

 
  //   validate income
  if (expense > incomeValue.value) {
    alert("Expenses cannot be more than income");
  } else {
    // view total expense and balance
    document.getElementById("total-expense").innerText = expense;
    document.getElementById("balance").innerText = balance;
  }

};

const calculateSavings = () => {
  const income = document.getElementById("income");
  const incomeValue = income.value;
  const food = document.getElementById("food");
  const rent = document.getElementById("rent");
  const clothes = document.getElementById("clothes");

  // calculate saving amount
  const savePercentage = document.getElementById("save");
  const saveMoneyValue = savePercentage.value;
  if(!saveMoneyValue){
    alert("Type the % savings you want");
    return;
  }
  const convartNumber = parseInt(saveMoneyValue); 
//   Validate saving percentage value
  if (convartNumber < 0) {
    alert("Provide positive saving value");
  }
  const savingAmount = ((convartNumber / 100)) * incomeValue;
  console.log(savingAmount);
  // calculate remaining balance
  const balance = document.getElementById("balance").innerText;
  const remainingBalance = balance - savingAmount;

  //   validate saving amount
  if (savingAmount > balance) {
    alert("SavingAmount is greater than balance");
  } else {
    // view saving amount and remaining balance
    document.getElementById("saving-amount").innerText = savingAmount;
    document.getElementById("remaining-balance").innerText = remainingBalance;
  }
  savePercentage.value = ""; 
  income.value = "";
  food.value = "";
  rent.value = "";
  clothes.value = "";
};
