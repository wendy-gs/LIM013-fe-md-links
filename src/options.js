const fetch = require('node-fetch');

// CREAMOS LA FUNCION QUE VALIDA LOS LINKS
const validate = (objArray) => {
  const validateLink = objArray.map((array) => fetch(array.href) // array de promesas
    .then((res) => ({
      ...array,
      status: res.status,
      statusText: res.statusText,
    }))
    .catch(() => ({
      ...array,
      status: 500,
      statusText: 'Fail Server',
    })));
  return Promise.all(validateLink);
};

// CREAMOS LA FUNCION STATES
const stats = (objArray) => {
  const totalLinks = objArray.length;
  let brokenLinks = 0;
  const uniqueLinks = [...new Set(objArray.map((link) => link.href))].length;
  objArray.forEach((element) => {
    if (element.status >= 400 && element.status < 500) brokenLinks += 1;
  });
  return { total: totalLinks, unique: uniqueLinks, broken: brokenLinks };
};
module.exports = {
  validate,
  stats,
};
