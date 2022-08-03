const express = require('express');
const readTalkers = require('./readFile');
const writeFile = require('./writeFile');
const {
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRate,
} = require('./middlewares');

const router = express.Router();

router.get('/', async (req, res) => {
  const allTalkers = await readTalkers();
  if (allTalkers.length === 0) return res.status(200).json([]);
  res.status(200).json(allTalkers);
});

router.get('/:id', async (req, res) => {
  const allTalkers = await readTalkers();
  const { id } = req.params;
  const talker = allTalkers.find((person) => person.id === Number(id));
  if (!talker) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  res.status(200).json(talker);
});

router.use(validateToken);

router.get('/search?q=searchTerm', async (req, res) => {
  const allTalkers = await readTalkers();
  const { queryName } = req.query;

  const findQuery = allTalkers.filter((person) => person.name.includes(queryName));

  if (findQuery === undefined) {
    return res.status(200).json([]);
  }
  if (!findQuery || findQuery === '') {
    return res.status(200).json(allTalkers);
  }
  res.status(200).json(findQuery);
});

router.delete('/:id', async (req, res) => {
  const allTalkers = await readTalkers();
  const { id } = req.params;

  const talkerIndex = allTalkers.find((person) => person.id === Number(id));

  if (talkerIndex === -1) return res.status(400).json({ message: 'Usuário não encontrado' });
  const deleteTalker = allTalkers.splice(talkerIndex, 1);
  
  await writeFile('./talker.json', deleteTalker);
  res.status(204).end();
});

router.use(
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRate,
);

router.post('/', async (req, res) => {
  const allTalkers = await readTalkers();
  const { name, age, talk: { watchedAt, rate } } = req.body;

  const newTalker = {
    id: allTalkers.length + 1,
    name,
    age,
    talk: {
      watchedAt,
      rate,
    },
  };

  allTalkers.push(newTalker);

  writeFile('./talker.json', allTalkers);
  res.status(201).json({ message: 'Oi' });
});

router.put('/:id', async (req, res) => {
  const allTalkers = await readTalkers();
  const { id } = req.params;
  const { name, age, talk: { watchedAt, rate } } = req.body;

  const talkerIndex = allTalkers.find((person) => person.id === Number(id));

  if (talkerIndex === -1) return res.status(400).json({ message: 'Usuário não encontrado' });
  allTalkers[talkerIndex] = { ...allTalkers[talkerIndex], name, age, talk: { watchedAt, rate } };

  await writeFile('./talker.json', allTalkers);
  res.status(200).json(allTalkers);
});

module.exports = router;
