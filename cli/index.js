const fse = require('fs-extra');
const cheerio = require('cheerio');
const path = require('path');
const ejs = require('ejs');
const glob = require('glob');

const SVG_PATH = path.resolve(__dirname, '../src/asset');
const TARGET_PATH = path.resolve(__dirname, '../src/component');
const APP_FILE_PATH = path.resolve(__dirname, '../src/page/index/app.vue');

const mainVueTemplate = fse.readFileSync(
    path.resolve(__dirname, './template.vue.ejs'),
    {
        encoding: 'utf-8',
    }
);

const files = glob.sync('**.svg', {
    cwd: SVG_PATH,
});

function covert(filename) {
    const filenamePairs = filename.split('-');

    const str = filenamePairs.reduce(function (prev, cur) {
        cur = cur.slice(0, 1).toUpperCase() + cur.slice(1);

        prev = prev + cur;

        return prev;
    }, '');

    return str;
}

files.forEach(function (filename) {
    const fileBasename = path.basename(filename, '.svg');

    const content = fse.readFileSync(path.resolve(SVG_PATH, filename), {
        encoding: 'utf-8',
    });
    const $ = cheerio.load(content, {
        xml: {
            normalizeWhitespace: true,
        },
    });
    const gProps = [];
    const gCount = Array.from($('g'));
    gCount.forEach((el, index) => {
        $(el).removeAttr('id');
        $(el).attr('id', 'group' + index);
        const fill = $(el).attr('fill');
        gProps.push(fill);
        $(el).removeAttr('fill');
        $(el).attr(':fill', 'group' + index);
    });

    const template = ejs.render(
        mainVueTemplate,
        {
            data: {
                svg: $.html(),
                name: covert(fileBasename),
                group: gCount
                    .map(function (item, idx) {
                        return `group${idx}: {
                     type: String,
                     default: '${gProps[idx]}'
                 }`;
                    })
                    .join(','),
            },
        },
        {}
    );

    fse.writeFileSync(
        path.resolve(TARGET_PATH, fileBasename, 'main.vue'),
        template,
        {
            encoding: 'utf-8',
        }
    );

    const indexJSContent = `import Main from './main.vue';

Main.install = function (Vue) {
    Vue.component(Main.name, Main);
};

export default Main;`;

    fse.writeFileSync(
        path.resolve(TARGET_PATH, fileBasename, 'index.js'),
        indexJSContent,
        {
            encoding: 'utf-8',
        }
    );
});

const fileBasenames = files.map(function (filename) {
    const fileBasename = path.basename(filename, '.svg');
    return fileBasename;
});

const componentsTemplate = fileBasenames.map(function (filename) {
    return `        <x-col :span="4">
            <${filename} />
        </x-col>`;
});

const importStatements = fileBasenames.map(function (filename) {
    const componentName = covert(filename);

    return `import ${componentName} from '@/component/${filename}';`;
});

const componentKeys = fileBasenames.map(function (filename) {
    const componentName = covert(filename);

    return `${componentName},`;
});

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

fse.writeFileSync(APP_FILE_PATH, appVueContent, {encoding: 'utf-8'});
