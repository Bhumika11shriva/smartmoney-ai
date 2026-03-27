function calculate() {
  let income = document.getElementById("income").value;
  let expenses = document.getElementById("expenses").value;

  fetch("http://127.0.0.1:5000/plan", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      income: income,
      expenses: expenses
    })
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById("result").innerHTML =
      "💰 Savings: ₹" + data.savings +
      "<br>📈 SIP: ₹" + data.sip +
      "<br>🛟 Emergency Fund: ₹" + data.emergency;
  })
  .catch(error => {
    document.getElementById("result").innerHTML = "Error connecting to server";
  });
}