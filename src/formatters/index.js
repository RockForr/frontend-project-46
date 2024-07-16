import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const formater = {
  plain,
  json,
  stylish,
};

export default (tree, format) => formater[format](tree);
