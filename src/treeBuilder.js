import _ from 'lodash';

const buildTree = (data1, data2) => {
  const keys = _.sortBy(_.uniq([..._.keys(data1), ..._.keys(data2)]));

  return keys.map((key) => {
    if (_.isPlainObject(data1[key]) && _.isPlainObject(data2[key])) {
      return { key, type: 'node', children: buildTree(data1[key], data2[key]) };
    }
    if (!_.has(data1, key)) return { key, value: data2[key], type: 'added' };
    if (!_.has(data2, key)) return { key, value: data1[key], type: 'deleted' };
    if (!_.isEqual(data1[key], data2[key])) {
      return {
        key, oldValue: data1[key], newValue: data2[key], type: 'changed',
      };
    }
    return { key, value: data1[key], type: 'unchanged' };
  });
};

export default buildTree;
