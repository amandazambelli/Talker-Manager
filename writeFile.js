const fs = require('fs').promises;

const fileName = './talker.json'; 

const write = async (content) => fs.writeFile(fileName, JSON.stringify(content));

module.exports = write;
