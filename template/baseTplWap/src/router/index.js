import Vue from 'vue';
import Router from 'vue-router';
import Index from '../views/index/Index.vue';
import List from '../views/list/List.vue';
import Article from '../views/article/Article.vue';

Vue.use(Router);

export default new Router({
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
    ],
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }  
})