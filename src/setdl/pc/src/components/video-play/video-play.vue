<template>
    <div class="video-container">
        <div class="video-mask"></div>
        <div class="video-wrap">
            <video controls="controls" webkit-playsinline="true" playsinline width="100%" autoplay height="100%">
                <source :src="videoSrc" type="video/mp4">
            </video>
            <a href="javascript:;" class="video-close" @click.prevent="closeCb()">+</a>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.video-container{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
}
.video-mask{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.8);
}
.video-wrap{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
}
.video-close{
    position: absolute;
    right: -50px;
    top: -60px;
    transform: rotate(45deg);
    font-size: 50px;
    color: #ebd3bf;
    &:hover{
        text-decoration: none;
    }
}
</style>

