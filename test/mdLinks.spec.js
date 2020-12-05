const mdLinks = require('../src/mdLinks.js');

const arrayLinks = [
  {
    href: 'https://www.atlassian.com/es/agile/scrum',
    text: 'Scrum (desarrollo de software)',
    file: 'D:\\2020\\LABORATORIA\\Proyecto md-link\\LIM013-fe-md-links\\test_folder\\file2.md',
  },
  {
    href: 'https://www.atlassian.com/es/agile/kanban',
    text: 'Kanban Aplicación de la metodología kanban en el d',
    file: 'D:\\2020\\LABORATORIA\\Proyecto md-link\\LIM013-fe-md-links\\test_folder\\file2.md',
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
    href: 'https://www.atlassian.com/es/agile/kanban',
    text: 'Kanban Aplicación de la metodología kanban en el d',
    file: 'D:\\2020\\LABORATORIA\\Proyecto md-link\\LIM013-fe-md-links\\test_folder\\file2.md',
    status: 200,
    statusText: 'OK',
  },
];

describe('mdLinks', () => {
  it('Should to be a function', () => {
    expect(typeof mdLinks).toBe('function');
  });
  it('should return object with links - no options', () => {
    expect(mdLinks('./test_folder/file2.md', { validate: undefined })).resolves.toEqual(arrayLinks);
  });
  it('Should return object with links -options validate', (done) => {
    mdLinks('./test_folder/file2.md', { validate: true }).then((res) => {
      expect(res).toEqual(arrayValidate);
      done();
    });
  });
});
