const express = require('express');
const { validateEmail, validatePassword } = require('./middlewares');

const router = express.Router();
router.use(validateEmail, validatePassword);

const generateToken = require('./generateToken');

router.post('/', (req, res) => {
  const token = generateToken();
  return res.status(200).json({ token });
});

module.exports = router;