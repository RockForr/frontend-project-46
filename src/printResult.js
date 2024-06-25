const printResult = (tree) => {
  let result = '{\n';
  for (const element of tree) {
    switch (element.type) {
      case 'deleted':
        result = `${result}  - ${element.key}: ${element.value}\n`;
        break;
      case 'added':
        result = `${result}  + ${element.key}: ${element.value}\n`;
        break;
      case 'unchanged':
        result = `${result}    ${element.key}: ${element.value}\n`;
        break;
      default:
        result = `${result}  - ${element.key}: ${element.oldValue}\n  + ${element.key}: ${element.newValue}\n`;
        break;
    }
  };
  result = `${result}}`
  return result;
};

export default printResult;
