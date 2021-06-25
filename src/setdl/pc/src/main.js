import Vue from 'vue';
import App from './App';
import router from './router';
import store from './vuex/store';
import '@babel/polyfill';
import VueLazyload from "vue-lazyload";
// 弹窗
import Modal from './components/modal/modal';
// 视频
import VideoPlay from './components/video-play/video-play';

Vue.use(VueLazyload);
Vue.use(Modal);
Vue.use(VideoPlay);

new Vue({
    el:'#app',
    router,
    store,
    render: h=> h(App)
})