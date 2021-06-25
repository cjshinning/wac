<template>
  <div class="feature-wrap">
    <swiper class="swiper" :options="swiperOption" ref="FeatureSwiper" v-if="showSwiper">
      <swiper-slide v-for="(item,index) in feature.imgs" :key="index"><img :data-src="item" class="swiper-lazy" width="100%" alt=""></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import 'swiper/swiper-bundle.css'

  export default {
    name: 'FeatureSwiper',
    props:["feature"],
    components: {
      swiper,
      swiperSlide
    },
    computed: {
      swiper() {
        return this.$refs.FeatureSwiper.swiper
      },
      showSwiper(){
        return this.feature.imgs.length;
      }
    },
    data() {
      return {
        swiperOption: {
          loop : true,
          lazy: {
            loadPrevNext: true
          },
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          autoplay: {
            delay: 5000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
          },
          coverflowEffect: {
            rotate: 0,
            stretch: 30,
            depth: 35,
            modifier: 10,
            slideShadows : true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    },
    mounted(){
    }
  }
</script>

<style lang="scss" scoped>
  @import './css/sprite.scss';
  @import '../../assets/css/mixins.scss';
  .feature-wrap {
    width: 668px;
    height: 604px;
    margin: 120px auto 0;
    overflow: hidden;

    /deep/ .swiper-button-prev{
      width: 25px;
      height: 41px;
      left: 214px;
      top: 560px;
      opacity: 1;
      text-indent: -9999px;
      margin-top: 0;
      // background: url('./img/btn-prev.png');
      @include sprite($btn-prev);
      &:after{
        content: '';
      }
    }
    /deep/ .swiper-button-next{
      width: 25px;
      height: 41px;
      right: 214px;
      top: 560px;
      opacity: 1;
      text-indent: -9999px;
      margin-top: 0;
      // background: url('./img/btn-next.png');
      @include sprite($btn-next);
      &:after{
        content: '';
      }
    }
    /deep/ .swiper-pagination-bullets{
      left: 50%;
      margin-left: -85px;
      top: 560px;
      width: 170px;
      height: 41px;
    }
    /deep/ .swiper-pagination-bullet{
      width: 11px;
      height: 11px;
      margin: 0 11px 0 12px;
      background: #818181;
      opacity: 1;
    }
    /deep/ .swiper-pagination-bullet-active{
      background: #3c82fc;
    }
  }
  
  .swiper {
    width: 668px;
    height: 544px;
    overflow: visible;
    .swiper-inner{
      height: 100%;
      width: 100%;
      overflow: hidden;
    }
    .swiper-slide {
      width: 306px;
      height: 544px;
    }
  }
</style>