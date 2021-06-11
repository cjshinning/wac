<template>
    <div class="funny-swiper">
        <swiper class="swiper" ref="funnySwiper" :options="swiperOptions" v-if="showSwiper">
            <swiper-slide v-for="(item,index) in funny.imgs" :key="index">
                <img v-lazy="item" width="376" height="463" alt="">
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
                            return `<div class="${className} swiper-pagination-bullet-custom"><div class="thumb"><img src="${this.funny.thumb[index]}" width="158" height="152" alt=""></div><p class="txt">${this.funny.text[index]}</p></div>`
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
    .funny-swiper{
        position: absolute;
        left: 666px;
        top: 400px;
        width: 376px;
        height: 463px;
        padding: 1px;
        // background: url('./img/funny-pic-bg.png') no-repeat;
        @include sprite($funny-pic-bg);
        .swiper-container{
            overflow: visible;
            .swiper-slide{
                width: 376px;
                height: 463px;
                a{
                    display: block;
                }
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
                // background: url('./img/btn-prev.png');
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
                // background: url('./img/btn-next.png');
                @include sprite($btn-next);
                &:after{
                    content: '';
                }
            }
            /deep/ .swiper-pagination-bullets{
                display: block;
                width: 537px;
                left: -572px;
                bottom: -23px;
            }
            /deep/ .swiper-pagination-bullet-custom {
                width: 171px;
                height: 221px;
                margin: 0 4px 23px;
                border-radius: 0;
                opacity: 1;
                // background: url('./img/funny-bullet.png') no-repeat;
                background: none;
                @include sprite($funny-bullet);
                &.swiper-pagination-bullet-active {
                    opacity: 1;
                    // background: url('./img/funny-bullet-h.png') no-repeat;
                    background: none;
                    @include sprite($funny-bullet-h);
                    .txt{
                        color: #fff;
                    }
                }
                .thumb{
                    width: 158px;
                    height: 152px;
                    margin: 5px auto;
                }
                .txt{
                    height: 44px;
                    line-height: 44px;
                    margin-top: 1px;
                    text-align: center;
                    font-size: 24px;
                    color: #632726;
                }
            }
        }
    }
</style>