const express = require('express');
const app = express();
const PORT = 3000;

// Simple route
app.get('/', (req, res) => {
  res.send('<h1>Hello from Express!</h1>');
});

// JSON API route
app.get('/api/data', (req, res) => {
  res.json({ message: "Success", status: 200 });
});

app.listen(PORT, () => {
  console.log(`Server is purring at http://localhost:${PORT}`);
});