import fs from 'fs';
import gendiff from '../src/gendiffSrc.js';

test('gendiff(json)', () => {
  expect(gendiff('__fixtures__/file1.json', '__fixtures__/file2.json')).toEqual(fs.readFileSync('__fixtures__/result.txt', 'utf-8'));
});

test('gendiff(yaml)', () => {
  expect(gendiff('__fixtures__/file1.yaml', '__fixtures__/file2.yaml')).toEqual(fs.readFileSync('__fixtures__/result.txt', 'utf-8'));
});

test('gendiff(yml)', () => {
  expect(gendiff('__fixtures__/file1.yml', '__fixtures__/file2.yml')).toEqual(fs.readFileSync('__fixtures__/resultFlat.txt', 'utf-8'));
});

test('gendiff(plain)', () => {
  expect(gendiff('__fixtures__/file1.yaml', '__fixtures__/file2.yaml', 'plain')).toEqual(fs.readFileSync('__fixtures__/plain.txt', 'utf-8'));
});

test('gendiff(formatJson)', () => {
  expect(gendiff('__fixtures__/file1.yaml', '__fixtures__/file2.yaml', 'json')).toEqual(fs.readFileSync('__fixtures__/resultJson.txt', 'utf-8'));
});
