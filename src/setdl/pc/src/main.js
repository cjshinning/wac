import Vue from 'vue';
import App from './App';
import router from './router';
import store from './vuex/store';
import '@babel/polyfill';
import VueLazyload from "vue-lazyload";

Vue.use(VueLazyload);

new Vue({
    el:'#app',
    router,
    store,
    render: h=> h(App)
})