const chalk = require('chalk');
const MdLinks = require('./mdLinks.js');
const opt = require('./options.js');

const principal = (path, options) => {
  MdLinks(path, options)
    .then((arrayLinks) => {
      if (!options.validate && !options.stats) {
        arrayLinks.forEach((link) => {
          console.log(chalk.hex('#2E86C1').bold(link.file), chalk.hex('#AF7AC5').bold(link.href), chalk.hex('#95A5A6').bold(link.text));
        });
      }
      if (options.validate && !options.stats) {
        arrayLinks.forEach((link) => {
          if (link.status < 400) {
            console.log(chalk.hex('#2E86C1').bold(link.file), chalk.hex('#AF7AC5').bold(link.href), chalk.bgHex('#2E6B33').bold(link.statusText), chalk.hex('#2DB337').bold(link.status), chalk.hex('#95A5A6').bold(link.text));
          } else {
            console.log(chalk.hex('#2E86C1').bold(link.file), chalk.hex('#AF7AC5').bold(link.href), chalk.bgHex('#B03A2E').bold(link.statusText), chalk.hex('#FB1F14').bold(link.status), chalk.hex('#95A5A6').bold(link.text));
          }
        });
      }
      if (!options.validate && options.stats) {
        const estaditica = opt.stats(arrayLinks);
        console.log(chalk.bgHex('#5364A1').bold(`✔ Total  = ${estaditica.total} `));
        console.log(chalk.bgHex('#5364A1').bold(`✔ Unique = ${estaditica.unique} `));
      }
      if (options.validate && options.stats) {
        const estaditica = opt.stats(arrayLinks);
        console.log(chalk.bgHex('#5364A1').bold(`✔ Total  = ${estaditica.total} `));
        console.log(chalk.bgHex('#5364A1').bold(`✔ Unique = ${estaditica.unique} `));
        console.log(chalk.bgHex('#A0636A').bold(`✖ Broken = ${estaditica.broken} `));
      }
    })
    .catch((error) => (error.code === 'ENOENT' ? console.log(chalk.hex('#FB1F14').bold('✖ La ruta ingresada es incorrecta')) : console.log(error)));
};
module.exports = principal;

// md-links md-links ./test_folder --stats --validate
