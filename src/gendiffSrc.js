import path from 'path';
import fs from 'fs';
import parse from './parse.js';
import buildTree from './treeBuilder.js';

const getFullPath = (filePath) => path.resolve(process.cwd(), filePath);
const extFormat = (filePath) => path.extname(filePath).slice(1);
const getData = (filePath) => parse(fs.readFileSync(filePath, 'utf-8'), extFormat(filePath));

const gendiff = (filePath1, filePath2) => {
  const fullFilePath1 = getFullPath(filePath1);
  const fullFilePath2 = getFullPath(filePath2);

  const data1 = getData(filePath1);
  const data2 = getData(filePath2);

  const tree = buildTree(data1, data2);

  return tree;
};

export default gendiff;
