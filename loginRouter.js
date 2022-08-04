const express = require('express');
const { validateEmail, validatePassword } = require('./middlewares');

const app = express();
app.use(validateEmail, validatePassword);

const generateToken = require('./generateToken');

app.post('/', (req, res) => {
  const token = generateToken();
  return res.status(200).json({ token });
});

module.exports = app;