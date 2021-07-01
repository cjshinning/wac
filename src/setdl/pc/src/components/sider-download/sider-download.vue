<template>
    <div class="sider-download">
        <div class="qr-code">
            <img v-lazy="download.qrcode" width="100%" alt="">
        </div>
        <div class="qr-tip">扫一扫 下载游戏</div>
        <div class="download-btns">
            <a href="javascript:;" class="btn-android" @click="showWaiting(download.androidLink)">安卓下载</a>
            <a href="javascript:;" class="btn-ios" @click="showWaiting(download.appLink)">ios下载</a>
        </div>
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
    }
}
</script>
<style lang="scss" scoped>
@import './css/sprite.scss';
.sider-download{
    float: left;
    width: 302px;
    height: 458px;
    @include sprite($sider-bg);
    .qr-code{
        width: 166px;
        height: 166px;
        margin: 46px auto 0;
    }
    .qr-tip{
        margin-top: 10px;
        text-align: center;
        line-height: 24px;
        font-size: 16px;
        color: #333;
    }
    .download-btns{
        width: 238px;
        margin: 30px auto 0;
        a{
            display: block;
            width: 238px;
            height: 65px;
            margin-top: 6px;
            text-indent: -9999px;
        }
        .btn-android{
            @include sprite($btn-android);
            &:hover{
                @include sprite($btn-android-h);
            }
        }
        .btn-ios{
            @include sprite($btn-ios);
            &:hover{
                @include sprite($btn-ios-h);
            }
        }
    }
}
</style>

