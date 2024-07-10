const plain = (data) => {

const makeStr = (key, value) => {
  const valueIsObject = typeof value === 'object' && value !== null;

  const objectToString = (data) => {
    const str = Object.entries(data).map(([dataKey, dataValue]) => {
      return makeStr(dataKey, dataValue);
    }).join('\n');
    return str;
  };

  return `Property ${key} ${valueIsObject ? objectToString(value) : value}`;
};

   const str = data.flatMap((item) => {
     const { key, type } = item;

     switch (type) {
       case 'added':
         return makeStr(key, item.value);
//       case 'deleted':
//         return makeStr(key, item.value, curIndent, prefix[type]);
//       case 'unchanged':
//         return makeStr(key, item.value, curIndent);
//       case 'changed':
//         // eslint-disable-next-line max-len
//         return [makeStr(key, item.oldValue, curIndent, prefix.deleted), makeStr(key, item.newValue, curIndent, prefix.added)];
//       case 'node':
//         return makeStr(key, stylish(item.children, curIndent), curIndent);
     }
   }).join('\n');

   return str;

console.log('ololo')
};

export default plain;
