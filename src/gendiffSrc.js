#!/usr/bin/env node

import path from 'path';
import fs from 'fs';
import parse from './parse.js';
import buildTree from './treeBuilder.js';
import formater from '../formatters/index.js';

const getFullPath = (filePath) => path.resolve(process.cwd(), filePath);
const extFormat = (filePath) => path.extname(filePath).slice(1);
const getData = (filePath) => parse(fs.readFileSync(filePath, 'utf-8'), extFormat(filePath));

const gendiff = (filePath1, filePath2, format) => {
  const fullFilePath1 = getFullPath(filePath1);
  const fullFilePath2 = getFullPath(filePath2);

  const data1 = getData(fullFilePath1);
  const data2 = getData(fullFilePath2);

  const tree = buildTree(data1, data2);

  return formater(tree, format);
};

export default gendiff;
