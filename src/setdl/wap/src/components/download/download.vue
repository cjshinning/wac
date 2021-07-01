<template>
    <div class="download">
        <div class="txt"></div>
        <div class="qr-box">
            <img :src="config.qrSrc" width="100%" alt="">
        </div>
        <a href="javascript:;" class="btn-android" @click="showWaiting(config.androidLink)">android下载</a>
        <a href="javascript:;" class="btn-appstore" @click="showWaiting(config.appstoreLink)">appstore下载</a>
    </div>
</template>
<script>
import mixin from '../../assets/js/mixin.js';
export default {
    props: ['config'],
    mixins: [mixin],
    data(){
        return{

        }
    }
}
</script>
<style lang="scss" scoped>
@import './css/sprite.scss';
@import '../../assets/css/mixins.scss';
.download{
    position: absolute;
    top: 970px;
    left: 50%;
    transform: translateX(-50%);
    width: 518px;
    height: 171px;
    .txt{
        position: absolute;
        left: 0;
        top: 1px;
        width: 21px;
        height: 155px;
        @include sprite($download-txt);
    }
    .qr-box{
        position: absolute;
        left: 33px;
        top: 0;
        width: 158px;
        height: 158px;
        background: #4085fa;
    }
    .btn-android, .btn-appstore{
        display: block;
        position: absolute;
        right: 0;
        width: 298px;
        height: 80px;
        text-indent: -9999px;
    }
    .btn-android{
        top: 2px;
        @include sprite($btn-android);
    }
    .btn-appstore{
        top: 91px;
        @include sprite($btn-appstore);
    }
}
</style>

