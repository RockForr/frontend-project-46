#!/usr/bin/env node

import gendiff from '../src/gendiffSrc.js';
import stylish from '../src/stylish.js';

console.log(stylish(gendiff('__fixtures__/file1.yaml', '__fixtures__/file2.yaml')));
