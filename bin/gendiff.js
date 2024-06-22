#!/usr/bin/env node

import gendiff from "../src/gendiffSrc.js";
import { Command } from 'commander';
const program = new Command;

program
  .arguments('<filePath1> <filePath2>')
  .description('Compares two configuration files and shows a difference.')
  .option('-V, --version', 'output the version number')
  .option('-f, --format [type]', 'output format')
  .action((filePath1, filePath2) => {
    gendiff(filePath1), gendiff(filePath2);
  })
program.parse();
