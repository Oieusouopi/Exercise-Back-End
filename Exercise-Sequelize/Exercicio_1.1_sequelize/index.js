const express = require('express');
const router = require('./Router/router');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(router);

app.use((error, __req, res, __next) => {
    if (error.code)  return res.status(error.code).json({ message: error.message });
    return res.status(500).json({ message: error.message });
});

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));