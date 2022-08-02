const fs = require('fs').promises;

const fileName = './talker.json';

const read = async () => {
  const data = await fs.readFile(fileName, 'utf8');
  return JSON.parse(data);
};

module.exports = read;
