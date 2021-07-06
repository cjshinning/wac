<template>
    <div class="index">
        <div class="banner">
            <div class="inner">
                <div class="kv">
                    <a :href="topImg.link" target="_blank">
                        <img :src="topImg.img" alt="">
                    </a>
                </div>
                <div class="cloud"></div>
                <main-download :download="downloadConfig"></main-download>
                <a href="javascript:;" class="gamesite-tip16" v-if="tip16Content" @click="showTip16()" :style="{top: tip16Config.mob_index_top&&tip16Config.mob_index_top+'px', left: tip16Config.mob_index_left&&tip16Config.mob_index_left+'px', backgroundImage: `url(${tip16Config.mob_index_img}`}"></a>
                <a href="javascript:;" class="btn-play" @click.prevent="showVideo()"></a>
            </div>
        </div>
        <top-nav></top-nav>
        <div class="section1">
            <div class="inner">
                <h2 class="title">资讯栏</h2>
                <div class="main">
                    <div class="kv-wrap">
                        <kv-swiper :kv="kvConfig"></kv-swiper>
                        <div class="paper-clip"></div>
                        <div class="civet-cat"></div>
                    </div>
                    <news-swiper :news="indexNews"></news-swiper>
                </div>
                <div class="balloon"></div>
            </div>
        </div>
        <div class="section2">
            <div class="inner">
                <h2 class="title">职业介绍</h2>
                <role-tab :roles="roleConfig"></role-tab>
            </div>
        </div> 
        <div class="section3">
            <div class="inner">
                <h2 class="title">搞怪图鉴</h2>
                <funny-swiper :funny="funnyConfig"></funny-swiper>
            </div>
        </div>
        <div class="section4">
            <div class="inner">
                <h2 class="title">特色玩法</h2>
                <feature-swiper :feature="fetureConfig"></feature-swiper>
            </div>
        </div>
        <div class="section5">
            <div class="inner">
                <qr-codes :qrcode="qrcodeConfig"></qr-codes>
            </div>
        </div>
        <a :href="reserveLink" target="_blank" class="btn-reserve"></a>
    </div>
</template>
<script>
import {jsonp} from 'axios-jsonp-pro';
import apiUrl from '../../assets/js/apiUrl.js';
import TopNav from '../../components/top-nav/top-nav';
import MainDownload from '../../components/main-download/main-download';
import KvSwiper from '../../components/kv-swiper/kv-swiper';
import NewsSwiper from '../../components/news-swiper/news-swiper';
import RoleTab from '../../components/role-tab/role-tab';
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
            downloadConfig: {
                qrcode: '',
                androidLink: '',
                appLink: ''
            },
            reserveLink: '',
            kvConfig: {
                imgs: [],
                links: []
            },
            roleConfig: {
                current: 0,
                tabs: ['战士', '法师', '祭师', '小丑'],
                pannels: [
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
            indexNews: {
                'zonghe': [],
                'xinwen': [],
                'huodong': [],
                'gonglue': []
            },
            tip16Content: '',
            tip16Config: {
                mob_index_img: '',
                mob_index_left: '',
                mob_index_top: ''
            },
            topVideo: ''
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
                            case 'top_img':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.topImg.img = data.imgs[0];
                                    this.topImg.link = data.links[0];
                                }else{
                                    console.log('top_img未填写内容');
                                }
                                break;
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
                            case 'index_focus':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.kvConfig.imgs = data.imgs;
                                    this.kvConfig.links = data.links;
                                }else{
                                    console.log('index_focus未填写内容');
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
                            case 'feature_img':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.fetureConfig.imgs = data.imgs;
                                }else{
                                    console.log('feature_img未填写内容');
                                }
                                break;
                            case 'footer_qr':
                                if(Object.prototype.toString.call(data) === '[object Object]'){
                                    this.qrcodeConfig.names = data.links;
                                    this.qrcodeConfig.imgs = data.imgs;
                                    this.qrcodeConfig.infos = data.text;
                                }else{
                                    console.log('footer_qr未填写内容');
                                }
                                break;
                            case 'reserve_link':
                                this.reserveLink = data.text;
                                break;
                            case 'gamesite_fcm_content_tips':
                                this.tip16Content = data.content;
                                break;
                            case 'gamesite_fcm_tips':
                                this.tip16Config.mob_index_img = data.data[0].mob_index_img;
                                this.tip16Config.mob_index_left = data.data[0].mob_index_left;
                                this.tip16Config.mob_index_top = data.data[0].mob_index_top;
                                break;
                            case 'top_video':
                                this.topVideo = data.links[0];
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
        },
        showVideo(){
            this.$video({
                videoSrc: this.topVideo
            })
        }
    },
    components: {
        TopNav,
        MainDownload,
        KvSwiper,
        NewsSwiper,
        RoleTab,
        FunnySwiper,
        FeatureSwiper,
        QrCodes
    },
    mounted(){
        this.getIndexNews(0,6);
        this.getIndexNews(1,6);
        this.getIndexNews(2,6);
        this.getIndexNews(4,6);
        this.getContent('top_img,pc_qrcode_download,download_and_link,download_app_link,index_focus,funny_img,feature_img,footer_qr,reserve_link,gamesite_fcm_content_tips,gamesite_fcm_tips,top_video');
    }
}
</script>
<style lang="scss" scoped>
</style>

