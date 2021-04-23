import Vue from 'vue';
import App from './App';
import router from './router';
import store from './vuex/store';
import 'lib-flexible/flexible.js';

new Vue({
    el:'#app',
    router,
    store,
    render: h=> h(App)
})