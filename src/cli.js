#!/usr/bin/env node
const { program } = require('commander');
const chalk = require('chalk');

const md = require('./index.js');

program.version('0.0.1');
// console.log('hello');

program
  .command('md-links <path-to-file>')
  .description(chalk.hex('#7450A1')('Show links found in files .MD'))
  .option('-v,--validate', 'Check if the found links works')
  .option('-s,--stats', 'Shows basic statistics about links')
  .option('--stats --validate', 'shows statistics about the links')
  .action((path, options) => { md(path, options); });

program.parse(process.argv);
