<template>
    <div class="article">
        <div class="c-kv"></div>
        <top-nav></top-nav>
        <div class="c-wrap">
            <sider-download :download="downloadConfig"></sider-download>
            <div class="c-main">
                <div class="article-hd">
                    <h3>{{cateMap[cate]}}</h3>
                    <p>
                        您的位置：
                        <router-link target="_blank" :to="{ path: '/' }">赛尔特大陆</router-link> >
                        <router-link target="_blank" :to="{ path: `/${cate}` }">{{cateMap[cate]}}</router-link> >
                        <span>{{content.TITLE}}</span>
                    </p>
                </div>
                <div class="article-content">
                    <h4>{{content.TITLE}}</h4>
                    <div class="detail">
                        <span>作者：37网游</span>
                        <span>{{content.PUB_DATE}}</span>
                    </div>
                    <div class="cont" v-html="content.CONTENT">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {jsonp} from 'axios-jsonp-pro';
import apiUrl from '../../assets/js/apiUrl.js';
import TopNav from '../../components/top-nav/top-nav';
import SiderDownload from '../../components/sider-download/sider-download';
export default {
    data(){
        return{
            downloadConfig: {
                qrcode: '',
                androidLink: '',
                appLink: ''
            },
            content: [],
            cateMap: {
                'xinwen': '公告资讯',
                'huodong': '活动资讯',
                'gonglue': '游戏攻略'
            },
            cate: 'xinwen'
        }
    },
    methods: {
        getContent(keys){
            jsonp(apiUrl.get_cont,{
                params:{
                    key: keys
                }
            }).then(res=>{
                if(res.code === 1){
                    for(let key in res.data){
                        let data = res.data[key];
                        switch(key){
                            case 'pc_qrcode_download':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.downloadConfig.qrcode = data.imgs[0];
                                }else{
                                    console.log('pc_qrcode_download未填写内容');
                                }
                                break;
                            case 'download_and_link':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.downloadConfig.androidLink = data.text[0];
                                }else{
                                    console.log('download_and_link未填写内容');
                                }
                                break;
                            case 'download_app_link':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.downloadConfig.appLink = data.text[0];
                                }else{
                                    console.log('download_app_link未填写内容');
                                }
                                break;
                        }
                    }
                }
            })
        },
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
    components: {
        TopNav,
        SiderDownload
    },
    mounted(){
        const {cate, id} = this.$route.params;
        this.cate = cate;
        
        this.getArticleContent(id);
        this.getContent('pc_qrcode_download,download_and_link,download_app_link');
    }
}
</script>
<style lang="scss" scoped>

</style>

