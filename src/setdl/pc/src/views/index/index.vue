<template>
    <div class="index">
        <top-nav></top-nav>
        <div class="banner">
            <div class="inner">
                <main-download :qrDownload="qrDownload"></main-download>
            </div>
        </div>
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
export default {
    data(){
        return{
            qrDownload: '',
            reserveLink: '',
            kvConfig: {
                imgs: [],
                links: []
            },
            roleConfig: {
                current: 0,
                tabs: ['战士', '法师', '祭师', '小丑'],
                pannels: [
                    '//img1.37wanimg.com/setdl/pc/extras/img/role-1.png',
                    '//img1.37wanimg.com/setdl/pc/extras/img/role-2.png',
                    '//img1.37wanimg.com/setdl/pc/extras/img/role-3.png',
                    '//img1.37wanimg.com/setdl/pc/extras/img/role-4.png'
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
                'gonglve': []
            },
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
                                this.qrDownload = data.imgs[0];
                                break;
                            case 'index_focus':
                                this.kvConfig.imgs = data.imgs;
                                this.kvConfig.links = data.links;
                                break;
                            case 'funny_img':
                                this.funnyConfig.imgs = data.imgs;
                                this.funnyConfig.text = data.text;
                                this.funnyConfig.thumb = data.thumbnails;
                                break;
                            case 'feature_img':
                                this.fetureConfig.imgs = data.imgs;
                                break;
                            case 'footer_qr':
                                this.qrcodeConfig.names = data.links;
                                this.qrcodeConfig.imgs = data.imgs;
                                this.qrcodeConfig.infos = data.text;
                                break;
                            case 'reserve_link':
                                this.reserveLink = data.text;
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
                            this.indexNews.gonglve = res.data;
                            break;
                    }
                }
                
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
        this.getContent('pc_qrcode_download,index_focus,funny_img,feature_img,footer_qr,reserve_link');
        this.getIndexNews(0,6);
        this.getIndexNews(1,6);
        this.getIndexNews(2,6);
        this.getIndexNews(4,6);
    }
}
</script>
<style lang="scss" scoped>
</style>

