#!/usr/bin/env node

import { Command } from 'commander';
import gendiff from '../src/gendiffSrc.js';

const program = new Command();

program
  .arguments('<filePath1> <filePath2>')
  .description('Compares two configuration files and shows a difference.')
  .option('-V, --version', 'output the version number')
  .option('-f, --format [type]', 'output format', 'stylish')
  .action((file1, file2, option) => {
    console.log(gendiff(file1, file2, option.format));
  });
program.parse();
