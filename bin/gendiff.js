#!/usr/bin/env node

import { program } from "../node_modules/commander/esm.mjs";

program
  .description('Compares two configuration files and shows a difference.')
  .option('-V, --version', 'output the version number');

program.parse();
