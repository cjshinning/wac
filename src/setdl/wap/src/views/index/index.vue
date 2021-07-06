<template>
    <div class="index">
        <nav-head :config="navConfig"></nav-head>
        <section class="banner">
            <div class="kv">
                <a :href="topImg.link">
                    <img :src="topImg.img" width="100%" alt="">
                </a>
            </div>
            <download :config="downloadConfig"></download>
            <a href="javascript:;" class="gamesite-tip16" v-if="tip16Content" @click="showTip16()" :style="{top: tip16Config.index_top&&tip16Config.index_top+'px', left: tip16Config.index_left&&tip16Config.index_left+'px', backgroundImage: `url(${tip16Config.index_img}`}"></a>
        </section>
        <section class="section1">
            <h2 class="title">资讯栏</h2>
            <div class="kv-wrap">
                <kv-swiper :kv="kvConfig"></kv-swiper>
                <div class="paper-clip"></div>
                <div class="civet-cat"></div>
            </div>
            <news-swiper :news="indexNews"></news-swiper>
        </section>
        <section class="section2">
            <h2 class="title">职业介绍</h2>
            <div class="role-wrap">
                <role-swiper :role="roleConfig"></role-swiper>
            </div>
        </section>
        <section class="section3">
            <h2 class="title">搞怪图鉴</h2>
            <funny-swiper :funny="funnyConfig"></funny-swiper>
        </section>
        <section class="section4">
            <h2 class="title">特色玩法</h2>
            <feature-swiper :feature="fetureConfig"></feature-swiper>
        </section>
        <section class="section5">
            <qr-codes :qrcode="qrcodeConfig"></qr-codes>
        </section>
    </div>
</template>
<script>
import {jsonp} from 'axios-jsonp-pro';
import apiUrl from '../../assets/js/apiUrl.js';
import NavHead from '../../components/nav-head/nav-head';
import Download from '../../components/download/download';
import KvSwiper from '../../components/kv-swiper/kv-swiper';
import NewsSwiper from '../../components/news-swiper/news-swiper';
import RoleSwiper from '../../components/role-swiper/role-swiper';
import FunnySwiper from '../../components/funny-swiper/funny-swiper';
import FeatureSwiper from '../../components/feature-swiper/feature-swiper';
import QrCodes from '../../components/qr-codes/qr-codes';
import role1 from '../../../extras/img/role-1.png';
import role2 from '../../../extras/img/role-2.png';
import role3 from '../../../extras/img/role-3.png';
import role4 from '../../../extras/img/role-4.png';
export default {
    data(){
        return{
            topImg: {
                img: '',
                link: ''
            },
            navConfig: {
                title: "赛尔特大陆",
                desc: '恶搞无厘头，冒险闹翻天',
                reserveLink: 'javascript:;',
                iconSrc: '',
                publicSrc: ''
            },
            downloadConfig: {
                qrSrc: '',
                androidLink: '',
                appstoreLink: ''
            },
            kvConfig: {
                imgs: [],
                links: []
            },
            indexNews: {
                'zonghe': [],
                'xinwen': [],
                'huodong': [],
                'gonglue': []
            },
            roleConfig: {
                imgs: [
                    role1,
                    role2,
                    role3,
                    role4
                ]
            },
            funnyConfig: {
                imgs: [],
                text: [],
                thumb: []
            },
            fetureConfig: {
                imgs: [],
                text: []
            },
            qrcodeConfig: {
                names: [],
                imgs: [],
                infos: []
            },
            tip16Content: '',
            tip16Config: {
                index_img: '',
                index_left: '',
                index_top: ''
            }
        }
    },
    methods: {
        getContent(keys){
            let _this = this;
            jsonp(apiUrl.get_cont,{
                params:{
                    key: keys
                }
            }).then(res=>{
                if(res.code === 1){
                    for(let key in res.data){
                        let data = res.data[key];
                        switch(key){
                            case 'wap_top_img':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.topImg.img = data.imgs[0];
                                    this.topImg.link = data.links[0];
                                }else{
                                    console.log('wap_top_img未填写内容');
                                }
                                break;
                            case 'wap_icon':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.navConfig.iconSrc = data.imgs[0];
                                }else{
                                    console.log('wap_icon未填写内容');
                                }
                                break;
                            case 'wap_reserve_link':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.navConfig.reserveLink = data.links[0];
                                }else{
                                    console.log('wap_reserve_link未填写内容');
                                }
                                break;
                            case 'wap_download_qr':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.downloadConfig.qrSrc = data.imgs[0];
                                }else{
                                    console.log('wap_download_qr未填写内容');
                                }
                                break;
                            case 'wap_download_android':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.downloadConfig.androidLink = data.links[0];
                                }else{
                                    console.log('wap_download_android未填写内容');
                                }
                                break;
                            case 'wap_download_appstore':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.downloadConfig.appstoreLink = data.links[0];
                                }else{
                                    console.log('wap_download_appstore未填写内容');
                                }
                                break;
                            case 'wap_kv':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.kvConfig.imgs = data.imgs;
                                    this.kvConfig.links = data.links;
                                }else{
                                    console.log('wap_kv未填写内容');
                                }
                                break;
                            case 'funny_img':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.funnyConfig.imgs = data.imgs;
                                    this.funnyConfig.text = data.text;
                                    this.funnyConfig.thumb = data.thumbnails;
                                }else{
                                    console.log('funny_img未填写内容');
                                }
                                break;
                            case 'wap_feature_img':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.fetureConfig.imgs = data.imgs;
                                }else{
                                    console.log('wap_feature_img未填写内容');
                                }
                                break;
                            case 'footer_qr':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.qrcodeConfig.names = data.links;
                                    this.qrcodeConfig.imgs = data.imgs;
                                    this.qrcodeConfig.infos = data.text;
                                    this.navConfig.publicSrc = data.imgs[2];
                                }else{
                                    console.log('footer_qr未填写内容');
                                }
                                break;
                            case 'gamesite_fcm_content_tips':
                                this.tip16Content = data.content;
                                break;
                            case 'gamesite_fcm_tips':
                                this.tip16Config.index_img = data.data[0].index_img;
                                this.tip16Config.index_left = data.data[0].index_left;
                                this.tip16Config.index_top = data.data[0].index_top;
                                break;
                        }
                    }
                }
            })
        },
        getIndexNews(cateId, size){
            jsonp(apiUrl.index_news,{
                params:{
                    cate_id: cateId,
                    size
                }
            }).then(res=>{
                if(res.code === 1){
                    switch(cateId){
                        case 0: 
                            this.indexNews.zonghe = res.data;
                            break;
                        case 1:
                            this.indexNews.xinwen = res.data;
                            break;
                        case 2:
                            this.indexNews.huodong = res.data;
                            break;
                        case 4:
                            this.indexNews.gonglue = res.data;
                            break;
                    }
                }
                
            })
        },
        showTip16(){
            let content = `
                <div class="rule-box">
                    ${this.tip16Content}
                </div>
            `;
            this.$modal({
                width: 508,
                title: '适龄提示',
                content
            });
        }
    },
    components: {
        NavHead,
        Download,
        KvSwiper,
        NewsSwiper,
        RoleSwiper,
        FunnySwiper,
        FeatureSwiper,
        QrCodes
    },
    mounted(){
        this.getIndexNews(0,5);
        this.getIndexNews(1,5);
        this.getIndexNews(2,5);
        this.getIndexNews(4,5);
        this.getContent('wap_top_img,wap_icon,wap_reserve_link,wap_download_qr,wap_download_android,wap_download_appstore,wap_kv,funny_img,wap_feature_img,footer_qr,gamesite_fcm_content_tips,gamesite_fcm_tips');
    }
}
</script>
<style lang="scss" scoped>
</style>

