#!/usr/bin/env node

import { program } from 'commander';
import gendiff from '../src/gendiffSrc.js';

program
  .arguments('<filePath1> <filePath2>')
  .description('Compares two configuration files and shows a difference.')
  .version('-V, --version', 'output the version number')
  .option('-f, --format [type]', 'output format', 'stylish')
  .action((file1, file2, options) => {
    console.log(gendiff(file1, file2, options.format));
  });
program.parse(process.argv);
