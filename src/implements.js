const fs = require('fs');
const path = require('path');
const marked = require('marked');
const jsdom = require('jsdom');

const { JSDOM } = jsdom;

// Determinamos si la ruta es absoluta de lo contrario lo convertimos en absoluta
const getPathAbsolute = (route) => (path.isAbsolute(route) ? route : path.resolve(route));

// Determinamos si es una carpeta(directorio)
const isDirectory = (route) => fs.statSync(route).isDirectory();

// DeterminaMos si el archivo formato MD
const isFileMd = (route) => path.extname(route) === '.md';

// CREAMOS LA FUNCION QUE RETORMA TODOS LO ARCHIVOS MD la ruta
const getAllFileMD = (route) => {
  let arrayfileMd = [];
  const routeAbs = getPathAbsolute(route);
  if (isDirectory(routeAbs)) {
    fs.readdirSync(routeAbs).forEach((routes) => {
      const fileMd = getAllFileMD(path.join(routeAbs, routes));
      arrayfileMd = arrayfileMd.concat(fileMd);
    });
  } else if (isFileMd(routeAbs)) {
    arrayfileMd.push(routeAbs);
  }
  return arrayfileMd;
};

// CREAMOS LA FUNCION PARA OBTENER TODOS LOS LINKS CONTENIDOS EN MD
const getAllLinks = (route) => {
  const arrayLinks = [];
  getAllFileMD(route).forEach((files) => {
    const fileMd = fs.readFileSync(files, 'utf-8');// Leemos el archivo Md
    const htmlFile = marked(fileMd);// Tranformamos el contendio en HTML
    const dom = new JSDOM(htmlFile);
    const link = dom.window.document.querySelectorAll('a');
    link.forEach((ancor) => {
      if (ancor.href.startsWith('http')) {
        arrayLinks.push({
          href: ancor.href,
          text: (ancor.textContent).slice(0, 50),
          file: files,
        });
      }
    });
  });
  return arrayLinks;
};

module.exports = {
  getPathAbsolute,
  isDirectory,
  isFileMd,
  getAllFileMD,
  getAllLinks,
};
