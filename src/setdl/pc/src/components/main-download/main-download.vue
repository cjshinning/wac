<template>
    <div class="main-download">
        <div class="tip"></div>
        <div class="qr-code">
            <img v-lazy="download.qrcode" width="100%" alt="">
        </div>
        <a href="javascript:;" class="btn-android" @click="showWaiting(download.androidLink)">安卓下载</a>
        <a href="javascript:;" class="btn-ios" @click="showWaiting(download.appLink)">ios下载</a>
    </div>
</template>
<script>
import mixin from '../../assets/js/mixin.js';
export default {
    props: ['download'],
    mixins: [mixin],
    data(){
        return{
        }
    },
    methods: {
        // showWaiting(link){
        //     if(!link){
        //         this.$modal({
        //             width: 508,
        //             height: 200,
        //             content: '敬请期待'
        //         });
        //     }else{
        //         window.open(link);
        //     }
        // }
    }
}
</script>
<style lang="scss" scoped>
    @import './css/sprite.scss';
    .main-download{
        position: absolute;
        left: 50%;
        margin-left: -234px;
        top: 788px;
        width: 468px;
        height: 184px;
        background: #f1f1f1;
        background: rgba(241,241,241,0.53);
        .tip{
            position: absolute;
            left: 29px;
            top: 28px;
            width: 16px;
            height: 123px;
            @include sprite($download-tip);
        }
        .qr-code{
            position: absolute;
            left: 55px;
            top: 26px;
            width: 126px;
            height: 126px;
            background: #4085fa;
        }
        .btn-android, .btn-ios{
            display: block;
            position: absolute;
            left: 204px;
            width: 238px;
            height: 65px;
            text-indent: -9999px;
        }
        .btn-android{
            top: 28px;
            @include sprite($btn-android);
            &:hover{
                @include sprite($btn-android-h);
            }
        }
        .btn-ios{
            top: 99px;
            @include sprite($btn-ios);
            &:hover{
                @include sprite($btn-ios-h);
            }
        }
    }
</style>
