import { BankingModule } from './banking.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log("KingAI.Market Platform Initialized");
  
  // Initialize Banking & Payout Suite
  BankingModule.init();

  // Calculator Logic
  const amountInput = document.getElementById('calc-amount');
  const rateInput = document.getElementById('calc-rate');
  const calcBtn = document.getElementById('calc-btn');
  const resultDiv = document.getElementById('calc-result');

  if (calcBtn && amountInput && rateInput) {
    calcBtn.addEventListener('click', () => {
      const amount = parseFloat(amountInput.value) || 0;
      const rate = parseFloat(rateInput.value) || 0;
      const total = amount + (amount * (rate / 100));
      
      const payoutResult = BankingModule.processPayout(total);
      resultDiv.textContent = `Total: $${payoutResult.netAmount.toFixed(2)} (${payoutResult.currency})`;
    });
  }
});
