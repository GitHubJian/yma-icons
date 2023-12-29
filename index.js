import {default as PeopleDouble} from './lib/people-double';
import {default as File} from './lib/file';

const components = [PeopleDouble,
File,];

const install = function (Vue) {
    components.forEach(function (component) {
        Vue.component(component.name, component);
    });
};
    
export default {
    install,
    PeopleDouble,
File,
};
