import path from "path";
import fs from "fs";
import parse from "./parse.js";

const getFullPath = (filePath) => path.resolve(process.cwd(), filePath);
const extFormat = (filePath) => path.extname(filePath).slice(1);
const getData = (filePath) => fs.readFileSync(filePath, 'utf-8');

console.log(getFullPath('/home/vboxuser/frontend-project-46/__fixtures__/file1.json'))


const gendiff = (filePath1, filePath2) => {
  const fullFilePath1 = getFullPath(filePath1);
  const fullFilePath2 = getFullPath(filePath2);

  console.log(parse(getData(filePath1), extFormat(filePath1)));

};
  export default gendiff;