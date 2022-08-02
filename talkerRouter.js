const express = require('express');

const router = express.Router();
const talkers = require('./readFile');
// const writeFile = require('./writeFile');

router.get('/', async (req, res) => {
  const talk = await talkers();
  if (talk.length === 0) return res.status(200).json([]);
  res.status(200).json(talk);
});

router.get('/:id', async (req, res) => {
  const talk = await talkers();
  const { id } = req.params;
  console.log(typeof talk);
  const talker = talk.find((person) => person.id === Number(id));
  if (!talker) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  res.status(200).json(talker);
});

/* app.post('/login', (req, res) => {
  const { email, password } = ;
  if (!email || email = '') return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  res.status(200).json({ token: generateToken() };
}); */

module.exports = router;
