import Vue from 'vue';
import Router from 'vue-router';
import Index from '../views/index/index.vue';
import List from '../views/list/list.vue';
import Article from '../views/article/article.vue';

Vue.use(Router);

export default new Router({
    base: '/setdl/',
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
        },
        {
          path: '/list',
          name: 'list',
          component: List
        },
        {
            path: '/:cate/:id',
            name: 'article',
            component: Article
        },
    ]
})