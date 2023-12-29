const fse = require('fs-extra');
const path = require('path');
const glob = require('glob');
const writeIndexJs = require('./writeIndexJs');
const writeAppVue = require('./writeAppVue');
const writeComponentJs = require('./writeComponentJs');
const writeComponentVue = require('./writeComponentVue');

const SVG_PATH = path.resolve(__dirname, '../src/asset');

const files = glob
    .sync('**.svg', {
        cwd: SVG_PATH,
    })
    .map(function (filename) {
        return path.resolve(SVG_PATH, filename);
    });

files.forEach(function (filepath) {
    writeComponentVue(filepath);

    writeComponentJs(filepath);
});

const fileBasenames = files.map(function (filename) {
    const fileBasename = path.basename(filename, '.svg');
    return fileBasename;
});

writeAppVue(fileBasenames);

writeIndexJs(fileBasenames);
