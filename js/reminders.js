// Automated Client Payment Reminders Module
export const ReminderModule = {
  generateReminder(clientName, invoiceTotal, dueDate) {
    return {
      recipient: clientName,
      subject: `Payment Reminder: Invoice Total $${invoiceTotal} Due on ${dueDate}`,
      body: `Hi ${clientName},\n\nThis is a friendly reminder that your invoice for $${invoiceTotal} is due on ${dueDate}.\n\nPlease process the payment at your earliest convenience through our secure platform.\n\nThank you!\nKingAI.Market Team`
    };
  }
};
