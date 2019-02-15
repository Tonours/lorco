const argv = require('minimist')(process.argv.slice(2));

const getLanguage = () => {
  const { lang } = argv;

  if (!lang) {
    return null;
  }

  return lang;
};

module.exports = getLanguage;
