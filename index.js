import {default as PeopleDouble} from './lib/people-double';

const components = [PeopleDouble,];

const install = function (Vue) {
    components.forEach(function (component) {
        Vue.component(component.name, component);
    });
};
    
export default {
    install,
    PeopleDouble,
};
