import gendiff from '../src/gendiffSrc.js';
import fs from 'fs';

test("gendiff", () => {

  expect(gendiff('__fixtures__/file1.json', '__fixtures__/file2.json')).toEqual(fs.readFileSync('__fixtures__/result.txt', 'utf-8'));
});
