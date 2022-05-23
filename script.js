let interestPanel = document.querySelector("#interest");
let yearlyinterestPanel = document.querySelector("#yearly-interest");
//percentage function

document.querySelector(".check").addEventListener("click", function () {
  let percentage = document.querySelector(".percentage").value;
  let amount = document.querySelector(".amount").value;

  if (percentage <= 0 || amount <= 0) {
    alert("please enter the Value in both field");
  } else {
    let total = (amount / 100) * percentage;
    interestPanel.textContent = total;
    yearlyinterestPanel.textContent = total * 12;
  }
});

document.querySelector(".clear").addEventListener("click", function () {
  document.querySelector(".percentage").value = 0;
  document.querySelector(".amount").value = 0;
  interestPanel.textContent = 0;
  yearlyinterestPanel.textContent = 0;
});


console.log('Welcome to the application');