<template>
    <div class="main-download">
        <div class="tip"></div>
        <div class="qr-code">
            <img v-lazy="download.qrcode" width="100%" alt="">
        </div>
        <a :href="download.androidLink" target="_blank" class="btn-android">安卓下载</a>
        <a :href="download.appLink" target="_blank" class="btn-ios">ios下载</a>
    </div>
</template>
<script>

export default {
    props: ['download'],
    data(){
        return{
        }
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
