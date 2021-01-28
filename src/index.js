const chalk = require('chalk');
const inquirer = require('inquirer');
const MdLinks = require('./mdLinks.js');
const opt = require('./options.js');

const principal = (path, options) => {
  MdLinks(path, options)
    .then((arrayLinks) => {
      if (arrayLinks.length === 0) {
        console.log(chalk.hex('#E99A3D').bold('No se encontró ningun link en archivos .MD'));
      }
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

const automatic = () => {
  inquirer
    .prompt([
      {
        name: 'path',
        type: 'input',
        message: 'Enter a route',
      },
      {
        name: 'options',
        type: 'list',
        message: 'Choose and option',
        choices: ['validate', 'stats', 'validate and states', 'none'],
      },
    ])
    .then((answer) => {
      switch (answer.options) {
        case 'validate': principal(answer.path, { validate: true }); break;
        case 'stats': principal(answer.path, { stats: true }); break;
        case 'validate and states': principal(answer.path, { validate: true, stats: true }); break;
        default: principal(answer.path, { validate: false }); break;
      }
    });
};
const main = (path, options) => {
  if (path === undefined) {
    automatic();
  } else {
    principal(path, options);
  }
};
module.exports = main;
// md-links ./test_folder --stats --validate
