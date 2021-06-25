<template>
    <div class="role-swiper">
        <swiper class="swiper" ref="roleSwiper" :options="swiperOptions" v-if="showSwiper">
            <swiper-slide v-for="(item,index) in role.imgs" :key="index">
                <img v-lazy="item" width="100%" alt="">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper';
    import 'swiper/swiper-bundle.css';
    export default {
        name: 'roleSwiper',
        props: ['role'],
        data() {
            return {
                flag: false,
                swiperOptions: {
                    effect : 'fade',
                    fadeEffect: {
                        crossFade: true,
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                        renderBullet: (index, className) => {
                            return `<div class="${className} swiper-pagination-bullet-custom"></div>`
                        }
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
                return this.role.imgs.length;
            },
        },
        mounted() {
        }
    }
</script>
<style lang="scss" scoped>
@import './css/sprite.scss';
@import '../../assets/css/mixins.scss';
.role-swiper{
    position: relative;
    width: 750px;
    height: 872px;
    .swiper-container{
        overflow: visible;
        .swiper-slide{
            width: 750px;
            height: 872px;
            a{
                display: block;
            }
        }
    }
    .swiper {
        /deep/ .swiper-pagination-bullets{
            display: block;
            width: 654px;
            height: 172px;
            left: 48px;
            bottom: 0px;
            @include sprite($role-tab-bg);
        }
        /deep/ .swiper-pagination-bullet-custom {
            display: block;
            position: absolute;
            width: 128px;
            height: 172px;
            border-radius: 0;
            opacity: 1;
            text-indent: -9999px;
            margin: 0;
            top: 0;
            background: none;
            &:nth-child(1){
              left: 28px;
              @include sprite($role-tab-1);
            }
            &:nth-child(2){
              left: 178px;
              @include sprite($role-tab-2);
            }
            &:nth-child(3){
              left: 332px;
              @include sprite($role-tab-3);
            }
            &:nth-child(4){
              left: 492px;
              @include sprite($role-tab-4);
            }
            &.swiper-pagination-bullet-active {
              opacity: 1;
              &:nth-child(1){
                @include sprite($role-tab-h1);
              }
              &:nth-child(2){
                @include sprite($role-tab-h2);
              }
              &:nth-child(3){
                @include sprite($role-tab-h3);
              }
              &:nth-child(4){
                @include sprite($role-tab-h4);
              }
            }
        }
    }
}
</style>