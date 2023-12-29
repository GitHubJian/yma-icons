import {default as PeopleDouble} from './lib/people-double';
import {default as Index} from './lib/index';
import {default as File} from './lib/file';

const components = [PeopleDouble,
Index,
File,];

const install = function (Vue) {
    components.forEach(function (component) {
        Vue.component(component.name, component);
    });
};
    
export default {
    install,
    PeopleDouble,
Index,
File,
};
