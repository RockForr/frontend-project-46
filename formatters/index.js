import stylish from './stylish.js';
import plain from './plain.js';

const formater = (tree, format) => {
  if (format === 'plain') {
    return plain(tree);
  }

  return stylish(tree);
};

export default formater;
