import '@/component/plugin';
import XIcon from '@/component';
import Vue from 'vue';
import App from './app.vue';

Vue.use(XIcon);

new Vue({
    render: h => h(App),
}).$mount('#app');
