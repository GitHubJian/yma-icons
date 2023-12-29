const path = require('path');
const fse = require('fs-extra');
const cheerio = require('cheerio');

const {covert} = require('./util');

const TARGET_FOLDER_PATH = path.resolve(__dirname, '../lib');

module.exports = function (filepath) {
    const fileBasename = path.basename(filepath, '.svg');

    const content = fse.readFileSync(filepath, {
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
        const fill = $(el).attr('fill') || 'inherit';
        gProps.push(fill);
        $(el).removeAttr('fill');
        $(el).attr(':fill', 'group' + index);
    });

    const svgContent = $.html();
    const nameContent = covert(fileBasename);
    const gPropsContent = gCount
        .map(function (_, idx) {
            return `group${idx}: {
    type: String,
    default: '${gProps[idx]}'
},`;
        })
        .join('\n');

    const template = `<template>
    <i class="x-icon">${svgContent}</i>
</template>

<script>
    export default {
        name: '${nameContent}',
        props: {
            size: {
                type: Number,
                default: 16,
            },
            ${gPropsContent}
        },
    };
</script>
`;

    fse.outputFileSync(path.resolve(TARGET_FOLDER_PATH, fileBasename, 'main.vue'), template, {
        encoding: 'utf-8',
    });
};
