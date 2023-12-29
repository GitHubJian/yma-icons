const path = require('path');
const fse = require('fs-extra');

const TARGET_FOLDER_PATH = path.resolve(__dirname, '../lib');

module.exports = function (filepath) {
    const filename = path.basename(filepath, '.svg');

    const indexJSContent = `import Main from './main.vue';

Main.install = function (Vue) {
    Vue.component(Main.name, Main);
};

export default Main;`;

    fse.outputFileSync(path.resolve(TARGET_FOLDER_PATH, filename, 'index.js'), indexJSContent, {
        encoding: 'utf-8',
    });
};
