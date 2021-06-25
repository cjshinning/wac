import Vue from 'vue';
import App from './App';
import router from './router';
import store from './vuex/store';
import 'lib-flexible/flexible.js';
import VueLazyload from "vue-lazyload";
import ModalM from './components/modal-m/modal-m';

Vue.use(VueLazyload);
Vue.use(ModalM);

new Vue({
    el:'#app',
    router,
    store,
    render: h=> h(App)
})