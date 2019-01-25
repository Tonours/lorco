const ns = require('node-sketch');
const path = require('path');

global.appRoot = path.resolve(__dirname);

const getFile = require('./helpers/getFile');
const getLanguage = require('./helpers/getLanguage');
const transformToRGBA = require('./helpers/transformToRGBA');
const createVariable = require('./helpers/createVariable');
const createFile = require('./helpers/createFile');

const file = getFile();
const language = getLanguage();

const lorco = (file, language) => {
  return ns.read(file)
    .then(sketch => {
      const { symbols } = sketch;
      const fileName = path.basename(file, '.sketch');

      const colors = symbols.map((symbol) => {
        const [layer, ...others] = symbol.layers;
        const style = layer.get('style').toJson();
        const [fill] = style.fills;

        const { color } = fill;

        const rgbacolor = transformToRGBA(color);
        const name = symbol.name;

        return createVariable(name, rgbacolor, language);
      });

      createFile(`_${fileName}`, colors, language);

      return colors;
    })
    .catch((err) => new Error('Error: ', err));
}

lorco(file, language);

module.exports = lorco;