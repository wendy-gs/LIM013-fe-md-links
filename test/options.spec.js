const fetchMock = require('fetch-mock');
const options = require('../src/options.js');

fetchMock
  .mock('https://www.atlassian.com/es/agile/scrum', 200)
  .mock('https://www.atlassian.com/es/agile/kanban', 200)
  .mock('https://developer.mozilla.org/es/docs/Glossary/Node.js', 200)
  .mock('https://couchdb.apache.org/', 200)
  .mock('https://www.adobe.com/devnet/acrobat/javascript.htmlxxxx', 404);

const arrayLinks = [
  {
    href: 'https://www.atlassian.com/es/agile/scrum',
    text: 'Scrum (desarrollo de software)',
    file: 'D:\\2020\\LABORATORIA\\Proyecto md-link\\LIM013-fe-md-links\\test_folder\\file2.md',
  },
  {
    href: 'https://www.adobe.com/devnet/acrobat/javascript.htmlxxxx',
    text: 'Adobe Acrobat',
    file: 'D:\\2020\\LABORATORIA\\Proyecto md-link\\LIM013-fe-md-links\\test_folder\\folder1\\file3.md',
  },
];
const arrayValidate = [
  {
    href: 'https://www.atlassian.com/es/agile/scrum',
    text: 'Scrum (desarrollo de software)',
    file: 'D:\\2020\\LABORATORIA\\Proyecto md-link\\LIM013-fe-md-links\\test_folder\\file2.md',
    status: 200,
    statusText: 'OK',
  },
  {
    href: 'https://www.adobe.com/devnet/acrobat/javascript.htmlxxxx',
    text: 'Adobe Acrobat',
    file: 'D:\\2020\\LABORATORIA\\Proyecto md-link\\LIM013-fe-md-links\\test_folder\\folder1\\file3.md',
    status: 404,
    statusText: 'Not Found',
  },
];
const statsLinks = {
  total: 2,
  unique: 2,
  broken: 0,
};
const validStatsLinks = {
  total: 2,
  unique: 2,
  broken: 1,
};
// Para la funcion validate
describe('validate', () => {
  it('Should be a function', () => {
    expect(typeof options.validate).toBe('function');
  });
  it('should return an array of objects with 5 properties', (done) => {
    options.validate(arrayLinks).then((res) => {
      expect(res).toEqual(arrayValidate);
      done();
    });
  });
});

// para la funcion stats
describe('stats', () => {
  it('Should be a function', () => {
    expect(typeof options.stats).toBe('function');
  });
  it('Should return the basic statistics(total y unique)', () => {
    expect(options.stats(arrayLinks)).toEqual(statsLinks);
  });
  it('Should return the statistics (total, unique y broken)', () => {
    expect(options.stats(arrayValidate)).toEqual(validStatsLinks);
  });
});
