const express = require('express');
const bodyParser = require('body-parser');
const talkerRouter = require('./talkerRouter');
const loginRouter = require('./loginRouter');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.use('/login', loginRouter);
app.use('/talker', talkerRouter);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.all('*', (req, res) => res.status(404).json({ message: `Rota '${req.path}' não existe!` }));

app.listen(PORT, () => {
  console.log('Online');
});
