#!/usr/bin/env node

import { program } from "../node_modules/commander/esm.mjs";

program
  .arguments('<filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .option('-V, --version', 'output the version number')
  .option('-f, --format [type]', 'output format')
program.parse();
