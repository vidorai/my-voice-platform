with open('index.html', 'r') as f:
    content = f.read()

target = '<link rel="stylesheet" href="styles/invoice.css">'
addition = '\n    <link rel="stylesheet" href="styles/clients.css">'

if target in content and addition not in content:
    content = content.replace(target, target + addition)
    with open('index.html', 'w') as f:
        f.write(content)
    print("Successfully added client stylesheet link to index.html")
else:
    print("Stylesheet link already exists or target not found")
