const fs = require('fs').promises;

const fileName = './talker.json'; 

const write = async () => fs.writeFile(fileName, 'content');

module.exports = write;
