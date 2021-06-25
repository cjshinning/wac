<template>
  <div class="list-wrap">
    <swiper class="swiper" ref="listSwiper" :options="swiperOptions" @slideChange="slideChange">
      <!-- <swiper-slide>
        <ul>
          <li v-for="(item,index) in news.zonghe.lists" :key="index">
            <span>{{item.PUB_TIME}}</span>
            <router-link :to="'/'+cate+'/'+item.ID">{{item.TITLE}}</router-link>
          </li>
        </ul>
        <div class="news-loading" v-show="loadMore && news.zonghe.totalPages > 1">加载中...</div>
        <div class="news-loaded" v-show="!loadMore && news.zonghe.totalPages > 1">已经到底了</div>
      </swiper-slide> -->
      <swiper-slide>
        <ul>
          <li v-for="(item,index) in news.xinwen.lists" :key="index">
            <span>{{item.PUB_TIME}}</span>
            <router-link :to="'/'+cate+'/'+item.ID">{{item.TITLE}}</router-link>
          </li>
        </ul>
        <div class="news-loading" v-show="loadMore && news.xinwen.totalPages > 1">加载中...</div>
        <div class="news-loaded" v-show="!loadMore && news.xinwen.totalPages > 1">已经到底了</div>
      </swiper-slide>
      <swiper-slide>
        <ul>
          <li v-for="(item,index) in news.huodong.lists" :key="index">
            <span>{{item.PUB_TIME}}</span>
            <router-link :to="'/'+cate+'/'+item.ID">{{item.TITLE}}</router-link>
          </li>
        </ul>
        <div class="news-loading" v-show="loadMore && news.huodong.totalPages > 1">加载中...</div>
        <div class="news-loaded" v-show="!loadMore && news.huodong.totalPages > 1">已经到底了</div>
      </swiper-slide>
      <swiper-slide>
        <ul>
          <li v-for="(item,index) in news.gonglue.lists" :key="index">
            <span>{{item.PUB_TIME}}</span>
            <router-link :to="'/'+cate+'/'+item.ID">{{item.TITLE}}</router-link>
          </li>
        </ul>
        <div class="news-loading" v-show="loadMore && news.gonglue.totalPages > 1">加载中...</div>
        <div class="news-loaded" v-show="!loadMore && news.gonglue.totalPages > 1">已经到底了</div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  import 'swiper/swiper-bundle.css';
  export default {
    name: 'listSwiper',
    props: ['news'],
    data() {
      return {
        cate: 'xinwen',
        cateId: 0,
        loadMore: false,
        // isLoading: false,
        swiperOptions: {
          effect : 'fade',
          autoHeight: true,
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
        return this.$refs.listSwiper.swiper;
      }
    },
    methods: {
      slideChange(){
        let activeIndex = this.swiper.activeIndex;
        switch(activeIndex){
          case 1:
            this.cate = 'xinwen';
            this.cateId = 1;
            break;
          case 2:
            this.cate = 'huodong';
            this.cateId = 2;
            // this.cateId = 11;
            break;
          case 3:
            this.cate = 'gonglue';
            this.cateId = 4;
            // this.cateId = 6;
            break;
          default:
            this.cate = 'xinwen';
            this.cateId = 0;
        }
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    created: function () {
        window.onscroll = () => {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
            const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
            if (scrollTop + windowHeight >= scrollHeight && !this.isLoading) {
                // console.log('当前页面：' + this.news[this.cate].currentPage);
                // console.log('总共页数：' + this.news[this.cate].totalPages);
                if(this.news[this.cate].currentPage < this.news[this.cate].totalPages){
                  this.loadMore = true;
                  this.$emit('update', this.cateId, this.news[this.cate].currentPage+1);
                }else{
                  this.loadMore = false;
                }
            }
        };
    },
    mounted() {
    }
  }
</script>
<style lang="scss" scoped>
  .list-wrap{
    position: relative;
    margin: 74px auto 0;
    width: 708px;
    min-height: 840px;
  }
  .swiper-container{
    width: 664px;
    overflow: visible;
    .swiper-wrapper{
      overflow: hidden;
    }
    .swiper-slide{
      width: 664px;
    }
  }
  .swiper{
    li{
      height: 83px;
      line-height: 83px;
      border-bottom: 1px dashed #676767;
      overflow: hidden;
      font-size: 24px;
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
      display: flex;
      width: 708px;
      height: 73px;
      border-bottom: 1px solid #4085fa;
      left: 50%;
      top: -73px;
      transform: translateX(-50%);
      text-align: left;
    }
    /deep/ .swiper-pagination-bullet-custom {
      display: block;
      flex: 1;
      width: 177px;
      height: 73px;
      line-height: 73px;
      margin: 0;
      border-radius: 0;
      opacity: 1;
      background: none;
      color: #676767;
      text-align: center;
      user-select: none;
      font-size: 26px;
      &:focus{
        outline: none;
      }
      &.swiper-pagination-bullet-active {
        opacity: 1;
        width: 177px;
        height: 73px;
        margin: 0 0px;
        color: #5290f4;
      }
    }
    .news-loading,.news-loaded{
      text-align: center;
      line-height: 40px;
      font-size: 24px;
      color: #676767;
    }
  }
</style>
