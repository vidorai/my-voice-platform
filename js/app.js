import { BankingModule } from './banking.js';
import { InvoiceModule } from './invoice.js';
import { ClientModule } from './clients.js';

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

  // Client Dropdown Sync Logic
  const clientDropdown = document.getElementById('client-dropdown');
  const clientInput = document.getElementById('invoice-client');

  if (clientDropdown && clientInput) {
    clientDropdown.addEventListener('change', (e) => {
      if (e.target.value) {
        clientInput.value = e.target.value;
      }
    });
  }

  // Invoice Generator Logic
  const invoiceBtn = document.getElementById('invoice-btn');
  const itemInput = document.getElementById('invoice-item');
  const priceInput = document.getElementById('invoice-price');
  const qtyInput = document.getElementById('invoice-qty');
  const previewBox = document.getElementById('invoice-preview-box');

  if (invoiceBtn) {
    invoiceBtn.addEventListener('click', () => {
      const client = clientInput.value || 'Valued Client';
      const description = itemInput ? itemInput.value : 'Freelance Services';
      const price = priceInput ? parseFloat(priceInput.value) || 0 : 0;
      const qty = qtyInput ? parseInt(qtyInput.value) || 1 : 1;

      const invoice = InvoiceModule.generate(client, [{ desc: description, price, qty }], 5);
      
      if (previewBox) {
        previewBox.innerHTML = `
          <strong>Invoice for:</strong> ${invoice.client}<br>
          <strong>Date:</strong> ${invoice.date}<br>
          <hr style="border: 0; border-top: 1px solid var(--color-border); margin: 0.5rem 0;">
          <strong>Item:</strong> ${description} (x${qty}) - $${(price * qty).toFixed(2)}<br>
          <strong>Subtotal:</strong> $${invoice.subtotal}<br>
          <strong>Tax (5%):</strong> $${invoice.tax}<br>
          <strong>Total:</strong> $${invoice.total}
        `;
      }
    });
  }
});
