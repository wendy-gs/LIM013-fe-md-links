const implement = require('./implements.js');
const options = require('./options.js');

const MdLinks = (path, option) => new Promise((resolve) => {
  const objLink = implement.getAllLinks(path);
  if (option.validate === true) resolve(options.validate(objLink));
  else resolve(objLink);
});

module.exports = MdLinks;
