<template>
  <div class="feature-wrap">
    <swiper class="swiper" :options="swiperOption" ref="FeatureSwiper" v-if="showSwiper">
      <!-- <div class="swiper-inner"> -->
        <swiper-slide v-for="(item,index) in feature.imgs" :key="index"><img :data-src="item" class="swiper-lazy" width="100%" alt=""></swiper-slide>
      <!-- </div> -->
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
            stretch: 70,
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
  .feature-wrap {
    position: absolute;
    left: 0;
    top: 322px;
    width: 1200px;
    height: 640px;
    overflow: hidden;

    /deep/ .swiper-button-prev{
      width: 34px;
      height: 55px;
      left: 438px;
      top: 594px;
      opacity: 1;
      text-indent: -9999px;
      // background: url('./img/btn-prev.png');
      @include sprite($btn-prev);
      &:after{
        content: '';
      }
    }
    /deep/ .swiper-button-next{
      width: 34px;
      height: 55px;
      right: 438px;
      top: 594px;
      opacity: 1;
      text-indent: -9999px;
      // background: url('./img/btn-next.png');
      @include sprite($btn-next);
      &:after{
        content: '';
      }
    }
    /deep/ .swiper-pagination-bullets{
      left: 50%;
      margin-left: -112.5px;
      top: 594px;
      width: 225px;
      height: 15px;
    }
    /deep/ .swiper-pagination-bullet{
      width: 15px;
      height: 15px;
      margin: 0 15px;
      background: #818181;
      opacity: 1;
    }
    /deep/ .swiper-pagination-bullet-active{
      background: #3c82fc;
    }
  }
  
  .swiper {
    width: 1200px;
    height: 559px;
    overflow: visible;
    .swiper-inner{
      height: 100%;
      width: 100%;
      overflow: hidden;
    }
    .swiper-slide {
      width: 983px;
      height: 559px;
    }
  }
</style>