import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const formater = (tree, format) => {
  if (format === 'plain') {
    return plain(tree);
  } if (format === 'json') {
    return json(tree);
  }

  return stylish(tree);
};

export default formater;
