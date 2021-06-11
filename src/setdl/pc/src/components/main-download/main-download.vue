<template>
    <div class="main-download">
        <div class="tip"></div>
        <div class="qr-code">
            <img v-lazy="qrDownload" width="100%" alt="">
        </div>
        <a href="#" target="_blank" class="btn-android">安卓下载</a>
        <a href="#" target="_blank" class="btn-ios">ios下载</a>
    </div>
</template>
<script>

export default {
    props: ['qrDownload'],
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
        top: 692px;
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
            // background: url('./img/download-tip.png') no-repeat;
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
            // background: url('./img/btn-ios.png') no-repeat;
            &:hover{
                @include sprite($btn-ios-h);
                // background: url('./img/btn-ios-h.png') no-repeat;
            }
        }
    }
</style>
