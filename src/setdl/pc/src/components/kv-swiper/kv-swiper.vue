<template>
    <swiper class="swiper" ref="kvwiper" :options="swiperOptions" v-if="showSwiper">
        <swiper-slide v-for="(item,index) in kv.imgs" :key="index">
            <a :href="kv.links[index]" target="_blank">
                <img v-lazy="item" width="506" height="562" alt="">
            </a>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>
<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper';
    import 'swiper/swiper-bundle.css';
    export default {
        name: 'kvSwiper',
        props: ['kv'],
        data() {
            return {
                swiperOptions: {
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    autoplay: {
                        delay: 5000,
                        stopOnLastSlide: false,
                        disableOnInteraction: false,
                    }
                }
            }
        },
        components: {
            swiper,
            swiperSlide
        },
        computed: {
            showSwiper(){
                return this.kv.imgs;
            },
        },
        mounted() {
        }
    }
</script>
<style lang="scss" scoped>
    @import './css/sprite.scss';
    .swiper-container{
        width: 506px;
        height: 562px;
        border-radius: 10px;
        overflow: hidden;
        .swiper-slide{
            width: 506px;
            height: 562px;
            a{
                display: block;
            }
        }
    }
    .swiper {
        /deep/ .swiper-pagination-bullets{
            right: 15px;
            bottom: 10px;
            text-align: right;
        }
        /deep/ .swiper-pagination-bullet{
            width: 20px;
            height: 20px;
            border-radius: 0;
            // background: url('./img/kv-bullet.png') no-repeat;
            background: none;
            @include sprite($kv-bullet);
            margin: 0 5px;
            opacity: 1;
        }
        /deep/ .swiper-pagination-bullet-active{
            // background: url('./img/kv-bullet-h.png') no-repeat;
            background: none;
            @include sprite($kv-bullet-h);
        }
  }
</style>
