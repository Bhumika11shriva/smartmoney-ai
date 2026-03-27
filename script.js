// ================== MAIN FUNCTION ==================
function calculate() {
  let income = parseFloat(document.getElementById("income").value);
  let expenses = parseFloat(document.getElementById("expenses").value);
  let investment = parseFloat(document.getElementById("investment").value);

  let savings = calculateSavings(income, expenses);
  let sip = calculateSIP(savings);
  let emergency = calculateEmergencyFund(expenses);
  let healthScore = moneyHealthScore(income, expenses, savings);
  let xirr = calculateXIRR(investment);
  let overlap = calculateOverlap();
  let expenseLoss = calculateExpenseRatio(investment);
  let suggestion = aiSuggestion(savings, expenses);

  displayResult(savings, sip, emergency, healthScore, xirr, overlap, expenseLoss, suggestion);
}


// ================== FEATURE 1: SAVINGS ==================
function calculateSavings(income, expenses) {
  return income - expenses;
}


// ================== FEATURE 2: SIP ==================
function calculateSIP(savings) {
  return savings * 0.4; // 40% investment rule
}


// ================== FEATURE 3: EMERGENCY FUND ==================
function calculateEmergencyFund(expenses) {
  return expenses * 6; // 6 months rule
}


// ================== FEATURE 4: MONEY HEALTH SCORE ==================
function moneyHealthScore(income, expenses, savings) {
  let score = 0;

  if (savings > income * 0.3) score += 40;
  else if (savings > income * 0.2) score += 30;
  else score += 10;

  if (expenses < income * 0.7) score += 30;
  else score += 10;

  if (savings > 0) score += 30;

  return score; // out of 100
}


// ================== FEATURE 5: XIRR ==================
function calculateXIRR(investment) {
  if (!investment || investment <= 0) return 0;

  let growthRate = 0.12; // assumed 12% return
  let finalValue = investment * (1 + growthRate);

  let xirr = ((finalValue - investment) / investment) * 100;
  return xirr.toFixed(2);
}


// ================== FEATURE 6: PORTFOLIO OVERLAP ==================
function calculateOverlap() {
  // Demo random overlap (real me API lagega)
  let overlap = Math.floor(Math.random() * 40);
  return overlap + "%";
}


// ================== FEATURE 7: EXPENSE RATIO ==================
function calculateExpenseRatio(investment) {
  let expenseRate = 0.02; // 2% assumed
  return (investment * expenseRate).toFixed(2);
}


// ================== FEATURE 8: AI SUGGESTION ==================
function aiSuggestion(savings, expenses) {
  if (savings <= 0) {
    return "❌ You are overspending. Reduce expenses immediately.";
  } 
  else if (savings < 2000) {
    return "⚠ Try to increase your savings gradually.";
  } 
  else {
    return "✅ Good job! Maintain consistent investments.";
  }
}


// ================== DISPLAY OUTPUT ==================
function displayResult(savings, sip, emergency, score, xirr, overlap, expenseLoss, suggestion) {
  document.getElementById("result").innerHTML = `
    <h3>📊 Financial Summary</h3>
    💰 Savings: ₹${savings}<br>
    📈 SIP: ₹${sip}<br>
    🛟 Emergency Fund: ₹${emergency}<br>
    🧠 Health Score: ${score}/100<br><br>

    <h3>📊 Portfolio Analysis</h3>
    🔹 XIRR: ${xirr}%<br>
    🔹 Overlap: ${overlap}<br>
    🔹 Expense Loss: ₹${expenseLoss}<br><br>

    <h3>🤖 AI Suggestion</h3>
    ${suggestion}
  `;
}
