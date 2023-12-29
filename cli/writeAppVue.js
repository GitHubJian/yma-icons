const path = require('path');
const fse = require('fs-extra');
const {covert} = require('./util');

const APP_FILE_PATH = path.resolve(__dirname, '../src/page/index/app.vue');

module.exports = function (svgFilenames) {
    const componentsTemplate = svgFilenames
        .map(function (filename) {
            return `<x-col :span="4">
            <${filename} />
        </x-col>`;
        })
        .join('\n        ');

    const importStatements = svgFilenames
        .map(function (filename) {
            const componentName = covert(filename);

            return `import ${componentName} from '../../../lib/${filename}';`;
        })
        .join('\n');

    const componentKeys = svgFilenames
        .map(function (filename) {
            const componentName = covert(filename);

            return `${componentName},`;
        })
        .join('\n        ');

    const appVueContent = `<template>
    <x-row>
        ${componentsTemplate}
    </x-row>
</template>

<script>
import XRow from './row.vue';
import XCol from './col.vue';
${importStatements}

export default {
    name: 'App',
    components: {
        XRow,
        XCol,
        ${componentKeys}
    },
};
</script>
`;

    fse.outputFileSync(APP_FILE_PATH, appVueContent, {encoding: 'utf-8'});
};
