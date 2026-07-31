with open('js/app.js', 'r') as f:
    code = f.read()

# Replace resultDiv binding to match the correct display element or fallback
old_calc = '''  if (calcBtn && amountInput && rateInput) {
    calcBtn.addEventListener('click', () => {
      const amount = parseFloat(amountInput.value) || 0;
      const rate = parseFloat(rateInput.value) || 0;
      const total = amount + (amount * (rate / 100));
      
      const payoutResult = BankingModule.processPayout(total);
      resultDiv.textContent = `Total: $\${payoutResult.netAmount.toFixed(2)} (\${payoutResult.currency})`;
    });
  }'''

new_calc = '''  if (calcBtn && amountInput && rateInput) {
    calcBtn.addEventListener('click', () => {
      const amount = parseFloat(amountInput.value) || 0;
      const rate = parseFloat(rateInput.value) || 0;
      const total = amount + (amount * (rate / 100));
      
      const payoutResult = BankingModule.processPayout(total);
      if (resultDiv) {
        resultDiv.textContent = `Total: $\${payoutResult.netAmount.toFixed(2)} (\${payoutResult.currency})`;
      }
    });
  }'''

if old_calc in code:
    code = code.replace(old_calc, new_calc)
    with open('js/app.js', 'w') as f:
        f.write(code)
    print("Updated calculator logic successfully.")
else:
    print("Could not find exact calc block.")
