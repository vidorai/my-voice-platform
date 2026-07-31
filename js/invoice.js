// Dynamic Freelance Invoice Generator Module
export const InvoiceModule = {
  generate(clientName, items = [], taxRate = 0) {
    const subtotal = items.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const tax = subtotal * (taxRate / 100);
    const total = subtotal + tax;

    return {
      client: clientName,
      items: items,
      subtotal: subtotal.toFixed(2),
      tax: tax.toFixed(2),
      total: total.toFixed(2),
      date: new Date().toISOString().split('T')[0]
    };
  }
};
