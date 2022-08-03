const express = require('express');
const { validateEmail, validatePassword } = require('./middlewares');

const app = express();
app.use(validateEmail, validatePassword);

const generateToken = require('./generateToken');

app.post('/', (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
      return res.status(200).json({ token: generateToken() });
  }
});

module.exports = app;