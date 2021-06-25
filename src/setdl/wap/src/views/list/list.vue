<template>
    <div class="article">
        <nav-article title="资讯公告"></nav-article>
        <section class="main">
            <list-swiper :news="listNews" @update="upateArticleList(arguments)"></list-swiper>
        </section>
    </div>
</template>
<script>
import {jsonp} from 'axios-jsonp-pro';
import apiUrl from '../../assets/js/apiUrl.js';
import NavArticle from '../../components/nav-article/nav-article';
import ListSwiper from '../../components/list-swiper/list-swiper';
export default {
    data(){
        return{
            listNews: {
                // zonghe: {
                //     lists: [],
                //     currentPage: 1,
                //     totalPages: 0
                // },
                xinwen: {
                    lists: [],
                    currentPage: 1,
                    totalPages: 0
                },
                huodong: {
                    lists: [],
                    currentPage: 1,
                    totalPages: 0
                },
                gonglue: {
                    lists: [],
                    currentPage: 1,
                    totalPages: 0
                },
            }
        }
    },
    components: {
        NavArticle,
        ListSwiper
    },
    methods: {
        getArticleList(cateId, pageNum){
            jsonp(apiUrl.article_list,{
                params:{
                    cate_id: cateId,
                    page: pageNum
                }
            }).then(res=>{
                if(res.code === 1){
                    switch(cateId){
                        // case 0: 
                        //     this.listNews.zonghe.lists = this.listNews.zonghe.lists.concat(res.data.list);
                        //     this.listNews.zonghe.totalPages = res.data.total;
                        //     this.listNews.zonghe.currentPage = res.data.page;
                        //     break;
                        case 1:
                            this.listNews.xinwen.lists = this.listNews.xinwen.lists.concat(res.data.list);
                            this.listNews.xinwen.totalPages = res.data.total;
                            this.listNews.xinwen.currentPage = res.data.page;
                            break;
                        case 2:
                        // case 11:
                            this.listNews.huodong.lists = this.listNews.huodong.lists.concat(res.data.list);
                            this.listNews.huodong.totalPages = res.data.total;
                            this.listNews.huodong.currentPage = res.data.page;
                            break;
                        case 4:
                        // case 6:
                            this.listNews.gonglue.lists = this.listNews.gonglue.lists.concat(res.data.list);
                            this.listNews.gonglue.totalPages = res.data.total;
                            this.listNews.gonglue.currentPage = res.data.page;
                            break;
                    }
                }
            })
        },
        upateArticleList(params){
            let cateId = params[0];
            let currentPage = params[1];
            this.getArticleList(cateId, currentPage);
        }
    },
    mounted(){
        this.getArticleList(0,1);
        this.getArticleList(1,1);
        this.getArticleList(2,1);
        // this.getArticleList(11,1);
        this.getArticleList(4,1);
        // this.getArticleList(6,1);
    }
}
</script>
<style lang="scss" scoped>

</style>

