const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static assets from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Kubernetes Health Probes
app.get('/healthz', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

app.get('/ready', (req, res) => {
  res.status(200).json({ status: 'READY' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
