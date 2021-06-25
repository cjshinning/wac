<template>
    <div class="article">
        <nav-article :title="cateMap[cate]"></nav-article>
        <section class="main">
            <article class="article-content">
                <h3>{{content.TITLE}}</h3>
                <p class="detail">37游戏      {{content.PUB_DATE}}</p>
                <div class="line"></div>
                <div class="cont" v-html="content.CONTENT">
                </div>
            </article>
        </section>
    </div>
</template>
<script>
import {jsonp} from 'axios-jsonp-pro';
import apiUrl from '../../assets/js/apiUrl.js';
import NavArticle from '../../components/nav-article/nav-article';
export default {
    data(){
        return{
            content: [],
            cateMap: {
                'xinwen': '公告资讯',
                'huodong': '活动资讯',
                'gonglue': '游戏攻略'
            },
            cate: 'xinwen'
        }
    },
    components: {
        NavArticle
    },
    methods: {
        getArticleContent(id){
            jsonp(apiUrl.article_content,{
                params:{
                    id
                }
            }).then(res=>{
                if(res.code === 1){
                    this.content = res.data;
                }
            })
        },
    },
    mounted(){
        const {cate, id} = this.$route.params;
        this.cate = cate;
        
        this.getArticleContent(id);
    }
}
</script>
<style lang="scss" scoped>

</style>

