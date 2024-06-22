import yaml from 'js-yaml';

const parse = (data, format) => {
    const parsers = {
        json: JSON.parse,
        yaml: yaml.load,
        yml: yaml.load,
    }

    return parsers[format](data);
      
}

export default parse;
