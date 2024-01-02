import {default as PeopleDouble} from './lib/people-double';
import {default as Invest} from './lib/invest';
import {default as Index} from './lib/index';
import {default as File} from './lib/file';

const components = [PeopleDouble, Invest, Index, File];

const install = function (Vue) {
    components.forEach(function (component) {
        Vue.component(component.name, component);
    });
};

export default {
    install,
    PeopleDouble,
    Invest,
    Index,
    File,
};
