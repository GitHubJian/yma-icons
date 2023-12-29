const path = require('path');
const fse = require('fs-extra');
const {covert} = require('./util');

const TARGE_FILE_PATH = path.resolve(__dirname, '../index.js');

module.exports = function (svgFilenames) {
    const importStatements = svgFilenames
        .map(function (svgFilename) {
            const componentName = covert(svgFilename);

            return `import {default as ${componentName}} from './lib/${svgFilename}';`;
        })
        .join('\n');

    const componentStatements = svgFilenames
        .map(function (svgFilename) {
            const componentName = covert(svgFilename);

            return `${componentName},`;
        })
        .join('\n');

    const indexJSContent = `${importStatements}

const components = [${componentStatements}];

const install = function (Vue) {
    components.forEach(function (component) {
        Vue.component(component.name, component);
    });
};
    
export default {
    install,
    ${componentStatements}
};
`;

    fse.writeFileSync(TARGE_FILE_PATH, indexJSContent, {encoding: 'utf-8'});
};
