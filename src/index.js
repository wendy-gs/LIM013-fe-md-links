const MdLinks = require('./mdLinks.js');
const opt = require('./options.js');

const principal = (path, options) => {
  MdLinks(path, options)
    .then((arrayLinks) => {
      if (!options.validate && !options.stats) {
        arrayLinks.forEach((link) => {
          console.log(link.file, link.href, link.text);
        });
      }
      if (options.validate && !options.stats) {
        arrayLinks.forEach((link) => {
          console.log(link.file, link.href, link.statusText, link.status, link.text);
        });
      }
      if (!options.validate && options.stats) {
        const estaditica = opt.stats(arrayLinks);
        console.log(`Total = ${estaditica.total}`);
        console.log(`Unique = ${estaditica.unique}`);
      }
      if (options.validate && options.stats) {
        const estaditica = opt.stats(arrayLinks);
        console.log(`Total = ${estaditica.total}`);
        console.log(`Unique = ${estaditica.unique}`);
        console.log(`Broken = ${estaditica.broken}`);
      }
    })
    .catch((error) => console.log('ERROR : No existe la ruta escrita', error));
};
module.exports = principal;
