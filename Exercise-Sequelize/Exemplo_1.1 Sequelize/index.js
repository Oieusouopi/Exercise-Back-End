const express = require('express');

const userController = require('./Controllers/userController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(userController);

app.use((error,__req,res,__next) => {
 if(error.code) res.status(error.code).json(error.message);
 return res.status(500).json(error.message);
});

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));