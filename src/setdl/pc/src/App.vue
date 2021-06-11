<template>
    <div class="container">
        <!-- <common-header></common-header> -->
        <!-- {{time}} -->
        <router-view></router-view>
        <common-footer></common-footer>  
    </div>
</template>
<script>
import './assets/css/main.scss';
import './assets/js/initLogin.js';
import CommonHeader from './components/common-header/common-header';
import CommonFooter from './components/common-footer/common-footer';
export default {
    data(){
        return{
            time: 0
        }
    },
    computed: {
        count(){
            return this.$store.state.count;
        }
    },
    components: {
        CommonHeader,
        CommonFooter
    },
    mounted(){
        // const timing = window.performance.timing;
        // 白屏时间
        // this.time = timing.domLoading - timing.fetchStart;
        // dom可操作时间
        // this.time = timing.domContentLoadedEventEnd - timing.fetchStart;
        // onload总下载时间
        // this.time = timing.loadEventEnd - timing.fetchStart;
        // console.log(this.time);
        // this.$store.commit('increment');
        // this.$store.dispatch('incrementAsync');
        // console.log(window.performance.getEntries());

        // var timing  = window.performance.timing;
        // console.log(timing);
        // console.log('准备新页面时间耗时: ' + (timing.fetchStart - timing.navigationStart));
        // console.log('redirect 重定向耗时: ' + (timing.redirectEnd  - timing.redirectStart));
        // console.log('Appcache 耗时: ' + (timing.domainLookupStart  - timing.fetchStart));
        // console.log('unload 前文档耗时: ' + (timing.unloadEventEnd - timing.unloadEventStart));
        // console.log('DNS 查询耗时: ' + (timing.domainLookupEnd - timing.domainLookupStart));
        // console.log('TCP连接耗时: ' + (timing.connectEnd - timing.connectStart));
        // console.log('request请求耗时: ' + (timing.responseEnd - timing.requestStart));
        // console.log('白屏时间: ' + (timing.responseStart - timing.navigationStart));
        // console.log('请求完毕至DOM加载: ' + (timing.domInteractive - timing.responseEnd));
        // console.log('解释dom树耗时: ' + (timing.domComplete - timing.domInteractive));
        // console.log('从开始至load总耗时: ' + (timing.loadEventEnd - timing.navigationStart));
    }
}
</script>
<style lang="scss">

</style>




