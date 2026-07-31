with open('index.html', 'r') as f:
    content = f.read()

old_section = '''    <!-- Freelance Invoice Generator Section -->
    <section class="invoice-container">
      <div class="invoice-header">Dynamic Invoice Generator</div>
      <p style="font-size: 0.875rem; color: var(--color-text-muted, #94a3b8); margin-bottom: var(--space-md);">
        Create and preview professional client invoices instantly.
      </p>
      
      <div style="display: grid; gap: 0.75rem;">
        <input type="text" id="invoice-client" placeholder="Client Name (e.g., Acme Corp)" style="width: 100%; padding: 0.5rem; border: 1px solid var(--color-border); border-radius: 4px;">'''

new_section = '''    <!-- Freelance Invoice Generator Section -->
    <section class="invoice-container">
      <div class="invoice-header">Dynamic Invoice Generator</div>
      <p style="font-size: 0.875rem; color: var(--color-text-muted, #94a3b8); margin-bottom: var(--space-md);">
        Create and preview professional client invoices instantly.
      </p>
      
      <div style="display: grid; gap: 0.75rem;">
        <div class="client-select-wrapper">
          <select id="client-dropdown" class="client-dropdown">
            <option value="">-- Select Saved Client --</option>
            <option value="Acme Corp">Acme Corp</option>
            <option value="Globex Corporation">Globex Corporation</option>
            <option value="Stark Industries">Stark Industries</option>
          </select>
        </div>
        <input type="text" id="invoice-client" placeholder="Client Name (e.g., Acme Corp)" style="width: 100%; padding: 0.5rem; border: 1px solid var(--color-border); border-radius: 4px;">'''

if old_section in content:
    content = content.replace(old_section, new_section)
    with open('index.html', 'w') as f:
        f.write(content)
    print("Successfully updated index.html")
else:
    print("Could not find target section")
