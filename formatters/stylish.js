const prefix = {
  added: '+ ',
  deleted: '- ',
};

const stringify = (str, indent) => `{\n${str}\n${' '.repeat(indent * 4)}}`;

const makeStr = (key, value, indent, status = '  ') => {
  const valueIsObject = typeof value === 'object' && value !== null;

  const objectToString = (data) => {
    const str = Object.entries(data).map(([dataKey, dataValue]) => {
      const currentIndent = indent + 1;
      return makeStr(dataKey, dataValue, currentIndent);
    }).join('\n');
    return stringify(str, indent);
  };

  return `${status.padStart(indent * 4)}${key}: ${valueIsObject ? objectToString(value) : value}`;
};

const stylish = (data, deep = 0) => {
  const curIndent = deep + 1;

  const str = data.flatMap((item) => {
    const { key, type } = item;

    switch (type) {
      case 'added':
        return makeStr(key, item.value, curIndent, prefix[type]);
      case 'deleted':
        return makeStr(key, item.value, curIndent, prefix[type]);
      case 'unchanged':
        return makeStr(key, item.value, curIndent);
      case 'changed':
        // eslint-disable-next-line max-len
        return [makeStr(key, item.oldValue, curIndent, prefix.deleted), makeStr(key, item.newValue, curIndent, prefix.added)];
      default:
        return makeStr(key, stylish(item.children, curIndent), curIndent);
    }
  }).join('\n');

  return stringify(str, deep);
};

export default stylish;
