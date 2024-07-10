import gendiff from '../src/gendiffSrc.js';
import fs from 'fs';
import stylish from '../src/stylish.js';

test("gendiff(json)", () => {

  expect(stylish(gendiff('__fixtures__/file1.json', '__fixtures__/file2.json'))).toEqual(fs.readFileSync('__fixtures__/result.txt', 'utf-8'));
});

test("gendiff(yaml)", () => {

  expect(stylish(gendiff('__fixtures__/file1.yaml', '__fixtures__/file2.yaml'))).toEqual(fs.readFileSync('__fixtures__/result.txt', 'utf-8'));
});

test("gendiff(yml)", () => {

  expect(stylish(gendiff('__fixtures__/file1.yml', '__fixtures__/file2.yml'))).toEqual(fs.readFileSync('__fixtures__/resultFlat.txt', 'utf-8'));
});
