const status = {
  added: 'was added with value:',
  deleted: 'was removed',
  changed: 'was updated.',
};

const valueToString = (value) => {
  if (typeof value === 'object' && value !== null) {
    return '[complex value]';
  }
  return typeof value === 'string' ? `'${value}'` : value;
};

const plain = (data, way = '') => data.flatMap((item) => {
  const { key, type } = item;

  switch (type) {
    case 'added':
      return `Property '${way}${key}' ${status[type]} ${valueToString(item.value)}`;
    case 'deleted':
      return `Property '${way}${key}' ${status[type]}`;
    case 'changed':
      return `Property '${way}${key}' ${status[type]} From ${valueToString(item.oldValue)} to ${valueToString(item.newValue)}`;
    case 'node':
      return plain(item.children, `${way + key}.`);
    default:
      return null;
  }
}).filter((item) => item).join('\n');

export default plain;
