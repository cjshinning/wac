<template>
    <div class="list">
        <top-nav></top-nav>
        <div class="c-kv"></div>
        <div class="c-wrap">
            <sider-download :download="downloadConfig"></sider-download>
            <div class="c-main">
                <div class="article-hd">
                    <h3>{{cateMap[cate]}}</h3>
                    <p>
                        您的位置：
                        <router-link target="_blank" :to="{ path: '/' }">赛尔特大陆</router-link> >
                        <router-link :to="{ path: `/${cate}` }">{{cateMap[cate]}}</router-link>
                    </p>
                </div>
                <div class="article-list">
                    <ul>
                        <li v-for="(item,index) in news" :key="index">
                            <span>{{item.PUB_TIME}}</span>
                            <!-- <a href="#" target="_blank">{{item.TITLE}}</a> -->
                            <router-link target="_blank" :to="'/'+cate+'/'+item.ID">{{item.TITLE}}</router-link>
                        </li>
                    </ul>
                </div>
                <news-paging :page="pageConfig" @update="upateArticleList($event)"></news-paging>
            </div>
        </div>
    </div>
</template>
<script>
import {jsonp} from 'axios-jsonp-pro';
import apiUrl from '../../assets/js/apiUrl.js';
import TopNav from '../../components/top-nav/top-nav';
import SiderDownload from '../../components/sider-download/sider-download';
import NewsPaging from '../../components/news-paging/news-paging';
export default {
    data(){
        return{
            downloadConfig: {
                qrcode: '',
                androidLink: '',
                appLink: ''
            },
            news: [],
            cateMap: {
                'xinwen': '公告资讯',
                'huodong': '活动资讯',
                'gonglue': '游戏攻略'
            },
            cate: '',
            cateId: 0,
            page: 0,
            pageConfig: {
                currentPage: 1,
                totalPages: 1
            }
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
                                this.downloadConfig.qrcode = data.imgs[0];
                                break;
                            case 'download_and_link':
                                this.downloadConfig.androidLink = data.text[0];
                                break;
                            case 'download_app_link':
                                this.downloadConfig.appLink = data.text[0];
                                break;
                        }
                    }
                }
            })
        },
        getArticleList(cateId, pageNum){
            jsonp(apiUrl.article_list,{
                params:{
                    cate_id: cateId,
                    page: pageNum
                }
            }).then(res=>{
                // res = {
                //     "code": 1,
                //     "data": {
                //         "page": 2,
                //         "count": 20,
                //         "total": 50,
                //         "list": [{
                //             "ID": "217",
                //             "TITLE": "【公告】6月11日更新维护公告",
                //             "IMG": "",
                //             "PUB_TIME": "06-10",
                //             "PUB_DATE": "2021-06-10 22:00:00",
                //             "IS_BOLD": "0",
                //             "TITLE_COLOR": "",
                //             "REDIRECT_URL": "",
                //             "ORD": 1,
                //             "CATE_NAME": "新闻公告",
                //             "SUMMARY": "亲爱的掌柜们：又到了激动人心的版本更新日，小二携刚出炉的V3.2版本更新内容前来报道。新一年的弓术大会正在如火如荼的举办,欢迎掌柜们前往比赛大展拳脚，同时还有伟大航线悄然降临，欢迎各位掌柜挑战，此次还推出",
                //             "GAME_ID": 690
                //         }, {
                //             "ID": "211",
                //             "TITLE": "【登陆充值异常已修复】",
                //             "IMG": "",
                //             "PUB_TIME": "06-09",
                //             "PUB_DATE": "2021-06-09 00:55:00",
                //             "IS_BOLD": "0",
                //             "TITLE_COLOR": "",
                //             "REDIRECT_URL": "",
                //             "ORD": 1,
                //             "CATE_NAME": "新闻公告",
                //             "SUMMARY": "尊敬的各位掌柜：目前登陆充值出现异常我们正在紧急排查中，给各位掌柜造成的不便敬请谅解，异常解决后将有补偿奉上，请各位掌柜相互转告，感谢您的支持！",
                //             "GAME_ID": 690
                //         }, {
                //             "ID": "176",
                //             "TITLE": "【公告】拉人我们绝不姑息，掌柜谨防上当受骗",
                //             "IMG": "",
                //             "PUB_TIME": "05-08",
                //             "PUB_DATE": "2021-05-08 18:51:00",
                //             "IS_BOLD": "0",
                //             "TITLE_COLOR": "",
                //             "REDIRECT_URL": "",
                //             "ORD": 1,
                //             "CATE_NAME": "新闻公告",
                //             "SUMMARY": "亲爱的各位掌柜们：自游戏上线以来，在各位掌柜们的支持下，汴梁商业日渐繁华，开发组由衷感谢各位掌柜们的支持。但在和谐环境下出现一批“狗皮膏药”恶意扰乱游戏环境，他们拉人、恶意踢人甚至欺诈，给各位掌柜正常",
                //             "GAME_ID": 690
                //         }, {
                //             "ID": "199",
                //             "TITLE": "【公告】新手指导员上线啦，接受各位掌柜的检阅~",
                //             "IMG": "",
                //             "PUB_TIME": "05-28",
                //             "PUB_DATE": "2021-05-28 19:39:00",
                //             "IS_BOLD": "0",
                //             "TITLE_COLOR": "",
                //             "REDIRECT_URL": "",
                //             "ORD": 0,
                //             "CATE_NAME": "新闻公告",
                //             "SUMMARY": "各位掌柜好！相信不少新区的掌柜们都有看到咱们帅气的指导员【百晓生】闪亮登场啦！没错，5月26日起，热心志愿者指导员【百晓生】将空降新区，为各位萌新、小白掌柜热心解答各种问题~官方指定指导员拥有专属外显，红",
                //             "GAME_ID": 690
                //         }, {
                //             "ID": "192",
                //             "TITLE": "【公告】招商玩法来袭",
                //             "IMG": "",
                //             "PUB_TIME": "05-24",
                //             "PUB_DATE": "2021-05-24 16:00:00",
                //             "IS_BOLD": "0",
                //             "TITLE_COLOR": "",
                //             "REDIRECT_URL": "",
                //             "ORD": 0,
                //             "CATE_NAME": "新闻公告",
                //             "SUMMARY": "亲爱的掌柜：招商系统现已开放，在此之际小二特地带来客栈系统的玩法内容，玩法内容如下：①掌柜身份达到20级，可在城郊“招商”入口进入该玩法。（按服开启，不同区服开启时间不同）②掌柜通过消耗不同项目【批文】",
                //             "GAME_ID": 690
                //         }, {
                //             "ID": "189",
                //             "TITLE": "\u3010\u516c\u544a\u30115\u670822\u65e5\u505c\u673a\u7ef4\u62a4\u516c\u544a",
                //             "IMG": "",
                //             "PUB_TIME": "05-22",
                //             "PUB_DATE": "2021-05-22 22:00:00",
                //             "IS_BOLD": "0",
                //             "TITLE_COLOR": "",
                //             "REDIRECT_URL": "",
                //             "ORD": 0,
                //             "CATE_NAME": "新闻公告",
                //             "SUMMARY": "亲爱的掌柜们：\r\n此次更新了钱庄玩法，其他海量更新内容，还请掌柜移步游戏中体验~部分活动会根据开服时间进行安排，请各位掌柜耐心等候~\r\n《叫我大掌柜》将于5月22日早上6-8点进行停服更新维护工作，请各位掌柜互相告知，注意游戏时间，本次维护结束后，小二为掌柜们奉上丰厚补偿奖励，祝掌柜们游戏愉快！",
                //             "GAME_ID": 690
                //         }, {
                //             "ID": "182",
                //             "TITLE": "【公告】5月11日不停服更新公告",
                //             "IMG": "",
                //             "PUB_TIME": "05-11",
                //             "PUB_DATE": "2021-05-11 18:04:00",
                //             "IS_BOLD": "0",
                //             "TITLE_COLOR": "",
                //             "REDIRECT_URL": "",
                //             "ORD": 0,
                //             "CATE_NAME": "新闻公告",
                //             "SUMMARY": "亲爱的各位掌柜们：我们将于5月11日18点30分进行不停服更新，本次更新主要对部分游戏体验进行了优化，更新完成后玩家重新登录游戏即可。如更新过程中遇到任何问题，请点击用户中心与我们联系。感谢各位掌柜对我们的",
                //             "GAME_ID": 690
                //         }, {
                //             "ID": "178",
                //             "TITLE": "【掌柜观察报告】来看看掌柜们都是怎么致富的",
                //             "IMG": "",
                //             "PUB_TIME": "05-09",
                //             "PUB_DATE": "2021-05-09 01:08:00",
                //             "IS_BOLD": "0",
                //             "TITLE_COLOR": "",
                //             "REDIRECT_URL": "",
                //             "ORD": 0,
                //             "CATE_NAME": "新闻公告",
                //             "SUMMARY": "各位掌柜好，有了我们之前的引导，各位掌柜这几天有摸到门道吗？最近我们看到排行榜上一些掌柜，已经在用自己的智慧摸索到收益更大化的玩法了~ 今天老壶也来和大家盘一下，这位掌柜策略。",
                //             "GAME_ID": 690
                //         }, {
                //             "ID": "159",
                //             "TITLE": "【攻略】荣华富贵小功略·续篇",
                //             "IMG": "",
                //             "PUB_TIME": "05-07",
                //             "PUB_DATE": "2021-05-07 17:10:00",
                //             "IS_BOLD": "0",
                //             "TITLE_COLOR": "",
                //             "REDIRECT_URL": "",
                //             "ORD": 0,
                //             "CATE_NAME": "新闻公告",
                //             "SUMMARY": "各位掌柜好！‍上次我们推出的赚钱小技巧引起了大家热烈的反响原来有这么多提升赚速的小技巧！老壶非常高兴能帮到大家~那书接上回，让我们接着来看！七、知己培养别忽略结识了美美的知己，在欣赏他们的美貌的同时，",
                //             "GAME_ID": 690
                //         }, {
                //             "ID": "161",
                //             "TITLE": "【攻略】大掌柜赚速小技巧",
                //             "IMG": "",
                //             "PUB_TIME": "05-07",
                //             "PUB_DATE": "2021-05-07 16:52:00",
                //             "IS_BOLD": "0",
                //             "TITLE_COLOR": "",
                //             "REDIRECT_URL": "",
                //             "ORD": 0,
                //             "CATE_NAME": "新闻公告",
                //             "SUMMARY": "各位新晋掌柜大家好！赚速提升、门客养成、知己获取、徒弟培养有没有还没发现最佳技巧赚速提升绞尽脑汁不用着急，让老壶来给各位掌柜指指路吧~一起往下看叭!一、商铺赚速知多少商铺赚速是总赚速中十分重要的部分。商",
                //             "GAME_ID": 690
                //         }, {
                //             "ID": "164",
                //             "TITLE": "【小科普】诚心祈福，自有财神庇佑！",
                //             "IMG": "",
                //             "PUB_TIME": "05-06",
                //             "PUB_DATE": "2021-05-06 19:05:00",
                //             "IS_BOLD": "0",
                //             "TITLE_COLOR": "",
                //             "REDIRECT_URL": "",
                //             "ORD": 0,
                //             "CATE_NAME": "新闻公告",
                //             "SUMMARY": "拜得诚心，自有神庇佑，想要大富大贵，财神爷也是要好好供奉起来呢！一起来财神庙诚心祈福吧！【财神庙玩法】一、财神庙1. 掌柜拥有财神称号时可晋升至财神庙，供其他掌柜祈福。2. 掌柜每日可祈福一次，祈福后可获",
                //             "GAME_ID": 690
                //         }, {
                //             "ID": "163",
                //             "TITLE": "【小科普】乔迁新居，玩转府邸",
                //             "IMG": "",
                //             "PUB_TIME": "05-06",
                //             "PUB_DATE": "2021-05-06 19:01:00",
                //             "IS_BOLD": "0",
                //             "TITLE_COLOR": "",
                //             "REDIRECT_URL": "",
                //             "ORD": 0,
                //             "CATE_NAME": "新闻公告",
                //             "SUMMARY": "",
                //             "GAME_ID": 690
                //         }, {
                //             "ID": "162",
                //             "TITLE": "【小科普】门客的作用你都知道吗？",
                //             "IMG": "",
                //             "PUB_TIME": "05-06",
                //             "PUB_DATE": "2021-05-06 18:55:00",
                //             "IS_BOLD": "0",
                //             "TITLE_COLOR": "",
                //             "REDIRECT_URL": "",
                //             "ORD": 0,
                //             "CATE_NAME": "新闻公告",
                //             "SUMMARY": "",
                //             "GAME_ID": 690
                //         }, {
                //             "ID": "150",
                //             "TITLE": "【公告】关于预约奖励发放的说明",
                //             "IMG": "",
                //             "PUB_TIME": "05-01",
                //             "PUB_DATE": "2021-05-01 10:56:00",
                //             "IS_BOLD": "0",
                //             "TITLE_COLOR": "",
                //             "REDIRECT_URL": "",
                //             "ORD": 0,
                //             "CATE_NAME": "新闻公告",
                //             "SUMMARY": "",
                //             "GAME_ID": 690
                //         }, {
                //             "ID": "135",
                //             "TITLE": "【奇人异士】 挑担日复日，趋途长更长—祝货郎",
                //             "IMG": "",
                //             "PUB_TIME": "04-30",
                //             "PUB_DATE": "2021-04-30 16:41:00",
                //             "IS_BOLD": "0",
                //             "TITLE_COLOR": "",
                //             "REDIRECT_URL": "",
                //             "ORD": 0,
                //             "CATE_NAME": "新闻公告",
                //             "SUMMARY": "",
                //             "GAME_ID": 690
                //         }, {
                //             "ID": "133",
                //             "TITLE": "【奇人异士】 西园到日栽桃李，红白低枝拂酒杯—郑果农",
                //             "IMG": "",
                //             "PUB_TIME": "04-30",
                //             "PUB_DATE": "2021-04-30 16:37:00",
                //             "IS_BOLD": "0",
                //             "TITLE_COLOR": "",
                //             "REDIRECT_URL": "",
                //             "ORD": 0,
                //             "CATE_NAME": "新闻公告",
                //             "SUMMARY": "",
                //             "GAME_ID": 690
                //         }, {
                //             "ID": "130",
                //             "TITLE": "【奇人异士】 香分花上露，水吸石中泉——康茶师",
                //             "IMG": "",
                //             "PUB_TIME": "04-30",
                //             "PUB_DATE": "2021-04-30 16:29:00",
                //             "IS_BOLD": "0",
                //             "TITLE_COLOR": "",
                //             "REDIRECT_URL": "",
                //             "ORD": 0,
                //             "CATE_NAME": "新闻公告",
                //             "SUMMARY": "",
                //             "GAME_ID": 690
                //         }]
                //     },
                //     "msg": ""
                // };
                if(res.code === 1){
                    this.news = res.data.list;
                    this.pageConfig.totalPages = res.data.total;
                }
            })
        },
        upateArticleList(currentPage){
            this.$router.push({ query: { page: currentPage}})
                .then(()=>{
                    this.getArticleList(this.cateId, currentPage);
                })
                .catch(()=>{
                    // console.log('超出了')
                });
        }
    },
    components: {
        TopNav,
        SiderDownload,
        NewsPaging
    },
    mounted(){
        this.cate = this.$route.params.cate;
        this.page = this.$route.query.page ? parseInt(this.$route.query.page) : 1;
        switch(this.cate){
            case 'xinwen':
                this.cateId = 1;
                break;
            case 'huodong':
                this.cateId = 2;
                break;
            case 'gonglue':
                this.cateId = 4;
                break;
        }
        this.pageConfig.currentPage = this.page;
        this.getArticleList(this.cateId, this.page);
        this.getContent('pc_qrcode_download,download_and_link,download_app_link');
    }
}
</script>
<style lang="scss" scoped>

</style>

