// Platform Application Controller
document.addEventListener('DOMContentLoaded', () => {
  // Calculator logic
  const calcBtn = document.getElementById('calc-btn');
  const amountInput = document.getElementById('calc-amount');
  const rateInput = document.getElementById('calc-rate');
  const resultDisplay = document.getElementById('calc-result-display');

  if (calcBtn) {
    calcBtn.addEventListener('click', () => {
      const amount = parseFloat(amountInput?.value) || 0;
      const rate = parseFloat(rateInput?.value) || 0;
      const total = amount + (amount * (rate / 100));
      
      if (resultDisplay) {
        resultDisplay.textContent = `Total: $${total.toFixed(2)}`;
      }
    });
  }

  // Payment Reminders logic
  const reminderBtn = document.getElementById('reminder-btn');
  const reminderClientInput = document.getElementById('reminder-client');
  const reminderAmountInput = document.getElementById('reminder-amount');
  const reminderOutput = document.getElementById('reminder-output');

  if (reminderBtn) {
    reminderBtn.addEventListener('click', () => {
      const client = reminderClientInput?.value || 'Valued Client';
      const amount = reminderAmountInput?.value || '0.00';
      
      if (reminderOutput) {
        reminderOutput.value = `Hi ${client},\n\nThis is a friendly reminder that your invoice for $${amount} is due.\n\nPlease process the payment at your earliest convenience.\n\nThank you!`;
      }
    });
  }
});
