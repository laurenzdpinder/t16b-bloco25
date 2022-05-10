const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

app.get('/', (req, res) => {
  res.status(200).json({ ok: true, port: PORT });
});

app.get('/env', (req, res) => {
  res.status(200).json({ ok: true, port: NODE_ENV });
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
