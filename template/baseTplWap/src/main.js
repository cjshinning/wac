import Vue from 'vue';
import App from './App';
import router from './router';
import 'lib-flexible/flexible.js';

new Vue({
    el:'#app',
    router,
    render: h=> h(App)
})