require('dotenv').config();
const express = require('express');

const router = require('./Router/router');

const PORT = process.env.PORT;
const app = express();

app.use(express.json());

app.use(router);

app.use((error, __req, res, __next) => {
  if (error.code) return res.status(error.code).json(error.message);
  return res.status(500).json({ message: error.message });
});

app.listen(PORT, () => console.log(`Esta funcionando na porta ${PORT}!`));