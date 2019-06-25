<template>
    <div class="swiper">
      <swiper :options="swiperOption" v-if="isShow">
        <!-- slides -->
        <swiper-slide v-for="(item,index) in swiperList" :key="index">
          <img style="width: 100%" class="swiper-img" :src="item.imgUrl" alt="">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>
    export default {
        name: "HomeSwiper",
        props: ["swiperList"],
        data(){
          return {
            swiperOption: {
              pagination: {   //分页器
                el: '.swiper-pagination',
              },
              loop: true,  //无缝轮播
              autoplay: true    //自动轮播
            }
          }
        },
        computed:{
          isShow(){
            return this.swiperList.length > 0
          }
        }
    }
</script>

<style lang="stylus" scoped>
  .swiper >>> .swiper-pagination-bullet-active  //穿透
    background-color: #fff
  .swiper
    height: 2.19rem
    .swiper-container
      height: 100%
      .swiper-img
        widtht: 100%
</style>
