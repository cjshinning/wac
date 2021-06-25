<template>
    <div class="funny-swiper">
        <swiper class="swiper" ref="funnySwiper" :options="swiperOptions" v-if="showSwiper">
            <swiper-slide v-for="(item,index) in funny.imgs" :key="index">
                <img v-lazy="item" width="100%" alt="">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </div>
</template>
<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper';
    import 'swiper/swiper-bundle.css';
    export default {
        name: 'funnySwiper',
        props: ['funny'],
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
                            return `<div class="${className} swiper-pagination-bullet-custom"><div class="thumb"><img src="${this.funny.thumb[index]}" width="100%" alt=""></div><p class="txt">${this.funny.text[index]}</p></div>`
                        }
                    },
                    autoplay: {
                        delay: 5000,
                        stopOnLastSlide: false,
                        disableOnInteraction: false,
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
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
                return this.funny.thumb.length;
            },
        },
        mounted() {
        }
    }
</script>
<style lang="scss" scoped>
@import './css/sprite.scss';
@import '../../assets/css/mixins.scss';
.funny-swiper{
    position: relative;
    margin: 182px auto 0;
    width: 318px;
    height: 463px;
    // background: url('./img/funny-pic-bg.png') no-repeat;
    @include sprite($funny-pic-bg);
    .swiper-container{
        overflow: visible;
        .swiper-slide{
            display: flex;
            align-items: center;
            width: 318px;
            height: 463px;
        }
    }
    .swiper {
        /deep/ .swiper-button-prev{
            width: 44px;
            height: 44px;
            left: 15px;
            top: 50%;
            margin-top: -22px;
            opacity: 1;
            text-indent: -9999px;
            @include sprite($btn-prev);
            &:after{
                content: '';
            }
        }
        /deep/ .swiper-button-next{
            width: 44px;
            height: 44px;
            right: 15px;
            top: 50%;
            margin-top: -22px;
            opacity: 1;
            @include sprite($btn-next);
            &:after{
                content: '';
            }
        }
        /deep/ .swiper-pagination-bullets{
            display: block;
            width: 595px;
            height: 464px;
            left: -154px;
            bottom: -0px;
        }
        /deep/ .swiper-pagination-bullet-custom {
            position: absolute;
            width: 116px;
            height: 150px;
            border-radius: 0;
            opacity: 1;
            background: none;
            margin: 0;
            @include sprite($funny-bullet);
            &.swiper-pagination-bullet-active {
                opacity: 1;
                background: none;
                @include sprite($funny-bullet-h);
                .txt{
                    color: #fff;
                }
            }
            .thumb{
                width: 106px;
                height: 102px;
                margin: 5px auto;
            }
            .txt{
                height: 40px;
                line-height: 40px;
                text-align: center;
                font-size: 16px;
                color: #632726;
            }
            &:nth-child(1){
                left: 0px;
                top: 0px;
            }
            &:nth-child(2){
                left: 0px;
                top: 157px;
            }
            &:nth-child(3){
                left: 0px;
                top: 314px;
            }
            &:nth-child(4){
                right: 0px;
                top: 0px;
            }
            &:nth-child(5){
                right: 0px;
                top: 157px;
            }
            &:nth-child(6){
                right: 0px;
                top: 314px;
            }
        }
    }
}
</style>