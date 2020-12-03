const path = require('path');
const implement = require('../src/implements.js');

const pahtAbsolute = path.join(process.cwd(), 'test_folder');
const pathFile = path.join(pahtAbsolute, 'file1.txt');
const pathFileMd = path.join(pahtAbsolute, 'file2.md');
const arrayFileMd = [
  'D:\\2020\\LABORATORIA\\Proyecto md-link\\LIM013-fe-md-links\\test_folder\\file2.md',
  'D:\\2020\\LABORATORIA\\Proyecto md-link\\LIM013-fe-md-links\\test_folder\\folder1\\file3.md',
];

describe('getPathAbsolute', () => {
  it('Should be a function', () => {
    expect(typeof implement.getPathAbsolute).toBe('function');
  });
  it('Should return absolute path', () => {
    expect(implement.getPathAbsolute('test_folder')).toBe(pahtAbsolute);
  });
});

describe('isDirectory', () => {
  it('Should be a function', () => {
    expect(typeof implement.isDirectory).toBe('function');
  });
  it('Should return true', () => {
    expect(implement.isDirectory(pahtAbsolute)).toBe(true);
  });
  it('Should return false', () => {
    expect(implement.isDirectory(pathFileMd)).toBe(false);
  });
});

describe('isFileMd', () => {
  it('Should be a function', () => {
    expect(typeof implement.isFileMd).toBe('function');
  });
  it('Shoul return a true', () => {
    expect(implement.isFileMd(pathFileMd)).toBe(true);
  });
  it('Should retur a false', () => {
    expect(implement.isFileMd(pathFile)).toBe(false);
  });
});

describe('getAllFileMD', () => {
  it('Should be a function', () => {
    expect(typeof implement.getAllFileMD).toBe('function');
  });
  it('Should return a single file .MD', () => {
    expect(implement.getAllFileMD('readme.md')).toEqual([path.join(process.cwd(), 'readme.md')]);
  });
  it('Should return all file .MD', () => {
    expect(implement.getAllFileMD('test_folder')).toEqual(arrayFileMd);
  });
});
/*

const sum = require('../index.js');

describe('sum', () => {
  it('should...', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
*/
