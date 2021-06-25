<template>
  <div class="news-wrap">
    <swiper class="swiper" ref="newsSwiper" :options="swiperOptions" @slideChange="slideChange">
      <swiper-slide>
        <ul>
          <li v-for="(item,index) in news.zonghe" :key="index">
            <span>{{item.PUB_TIME}}</span>
            <router-link target="_blank" :to="'/'+cate+'/'+item.ID">{{item.TITLE}}</router-link>
          </li>
        </ul>
      </swiper-slide>
      <swiper-slide>
        <ul>
          <li v-for="(item,index) in news.xinwen" :key="index">
            <span>{{item.PUB_TIME}}</span>
            <router-link target="_blank" :to="'/'+cate+'/'+item.ID">{{item.TITLE}}</router-link>
          </li>
        </ul>
      </swiper-slide>
      <swiper-slide>
        <ul>
          <li v-for="(item,index) in news.huodong" :key="index">
            <span>{{item.PUB_TIME}}</span>
            <router-link target="_blank" :to="'/'+cate+'/'+item.ID">{{item.TITLE}}</router-link>
          </li>
        </ul>
      </swiper-slide>
      <swiper-slide>
        <ul>
          <li v-for="(item,index) in news.gonglue" :key="index">
            <span>{{item.PUB_TIME}}</span>
            <router-link target="_blank" :to="'/'+cate+'/'+item.ID">{{item.TITLE}}</router-link>
          </li>
        </ul>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <router-link target="_blank" :to="{ path: cate, query:{ page: 1 } }" class="news-more">更多+</router-link>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  import 'swiper/swiper-bundle.css';
  export default {
    name: 'newsSwiper',
    props: ['news'],
    data() {
      return {
        cate: 'xinwen',
        swiperOptions: {
          effect : 'fade',
          fadeEffect: {
            crossFade: true,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet(index, className) {
              var tabs = ['综合', '新闻', '活动', '攻略'];
              return `<span class='${className} swiper-pagination-bullet-custom'>${tabs[index]}</span>`
            }
          },
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.newsSwiper.swiper;
      }
    },
    methods: {
      slideChange(){
        let activeIndex = this.swiper.activeIndex;
        switch(activeIndex){
          case 2:
            this.cate = 'huodong';
            break;
          case 3:
            this.cate = 'gonglue';
            break;
          default:
            this.cate = 'xinwen';
        }
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    mounted() {
    }
  }
</script>
<style lang="scss" scoped>
  .news-wrap{
    position: absolute;
    right: 74px;
    top: 166px;
    width: 548px;
    height: 408px;
    .news-more{
      position: absolute;
      right: 0;
      bottom: 416px;
      width: 110px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      text-decoration: none;
      font-size: 22px;
      color: #676767;
      z-index: 2;
      &:hover{
        color: #4085fa;
      }
    }
  }
  .swiper-container{
    width: 548px;
    height: 408px;
    overflow: visible;
    .swiper-wrapper{
      overflow: hidden;
    }
    .swiper-slide{
      width: 548px;
      height: 408px;
    }
  }
  .swiper{
    li{
      height: 67px;
      line-height: 67px;
      border-bottom: 1px dashed #676767;
      overflow: hidden;
      font-size: 20px;
      color: #676767;
      &:last-child{
        border-bottom: 0px;
      }
      span{
        float: right;
      }
      a{
        color: #676767;
        text-decoration: none;
        &:hover{
          color: #3272f8;
        }
      }
    }
    /deep/ .swiper-pagination-bullets{
      width: 548px;
      height: 40px;
      border-bottom: 1px solid #4085fa;
      left: 50%;
      bottom: 416px;
      transform: translateX(-50%);
      text-align: left;
    }
    /deep/ .swiper-pagination-bullet-custom {
      width: 110px;
      height: 40px;
      line-height: 40px;
      margin: 0;
      border-radius: 0;
      opacity: 1;
      background: none;
      color: #676767;
      text-align: center;
      user-select: none;
      font-size: 22px;
      &:focus{
        outline: none;
      }
      &.swiper-pagination-bullet-active {
        opacity: 1;
        width: 110px;
        height: 40px;
        margin: 0 0px;
        background: #4085fa;
        color: #fff;
      }
    }
  }
</style>
