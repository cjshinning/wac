<template>
    <div class="mobile-tip" v-if="tipShow">
        <div class="pic">
            <img :src="picSrc" width="100%" alt="">
        </div>
        <div class="txt">请竖屏浏览体验更佳</div>
    </div>
</template>
<script>
import picSrc from './img/phone-ui.png';
export default {
    name: 'MobileTip',
    data(){
        return {
            picSrc,
            tipShow: false
        }
    },
    methods: {
        listenOrientation(){
            const rotate = () => {
                if(window.orientation === 0 || window.orientation === 180){
                    this.tipShow = false;
                }
                if(window.orientation === 90 || window.orientation === -90){
                    this.tipShow = true;
                }
            }
            window.addEventListener('load', rotate, false);
            window.addEventListener('onorientationchange' in window ? 'orientationchange' : 'resize', rotate, false);
        }
    },
    mounted(){
        this.listenOrientation();
    }
}
</script>
<style lang="scss" scoped>
.mobile-tip{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #000;
    z-index: 9999;
    .pic{
        position: absolute;
        left: 50%;
        top: 50%;
        width: 110px;
        height: 170px;
        margin: -85px 0 0 -55px;
        animation: mobile_flip_tip 2s infinite;
    }
    .txt{
        position: absolute;
        left: 0;
        top: 50%;
        width: 100%;
        margin-top: 92px;
        line-height: 36px;
        text-align: center;
        font-size: 28px;
        color: #a94a1d;
    }
}
/*横屏动画*/
@keyframes mobile_flip_tip {
    0% {
        transform: rotate(0deg) translate3d(0px, 0px, 0px);
    }

    40% {
        transform: rotate(-90deg) translate3d(0px, 0px, 0px);
    }

    80%, 100% {
        transform: rotate(0deg) translate3d(0px, 0px, 0px);
    }
}
</style>


