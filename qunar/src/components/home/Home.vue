<template>
    <div class="home">
      <home-header></home-header>   <!--组件用驼峰,在html使用标签时需要加-号-->
      <div class="contaniner" ref="wrapper">
        <div>
          <home-swiper :swiperList="swiperList"></home-swiper>
          <home-nav :imgsList="iconList"></home-nav>
          <home-favourite :favList="recommendList"></home-favourite>
          <home-weekend :weekendList="weekendList"></home-weekend>
        </div>
      </div>
    </div>
</template>

<script>
    import HomeHeader from './base/Header'
    import HomeSwiper from './base/Swiper'
    import HomeNav from './base/Nav'
    import HomeFavourite from './base/Favourite'
    import HomeWeekend from './base/Weekend'
    import {getHome} from '@/api'   //引入getHome这个箭头函数
    import BScroll from 'better-scroll'

    export default {
        name: "Home",
        data(){
          return {
            iconList: [],
            recommendList: [],
            swiperList: [],
            weekendList: []
          }
        },
        components: {
          HomeHeader,
          HomeSwiper,
          HomeNav,
          HomeFavourite,
          HomeWeekend
        },
        // created(){
        //   this.getData()
        // },
        methods: {
          async getData(){
            let {iconList,recommendList,swiperList,weekendList} = await getHome()
            this.iconList = iconList
            this.recommendList = recommendList
            this.swiperList = swiperList
            this.weekendList = weekendList
          }
        },
        mounted(){
          this.scroll = new BScroll(this.$refs.wrapper,{
            click: true
          })
        },
        activated(){    //钩子函数;写在这不受keep-alive控制,不会缓存,会实时更新.
          this.getData()
        }
    }
</script>

<style lang="stylus" scoped>
  .contaniner
    position: fixed
    top: .88rem
    left: 0
    bottom: 0
    right: 0
    overflow: hidden
</style>
