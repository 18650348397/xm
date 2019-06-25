<template>
    <div class="detail">
      <detail-banner :bannerImg="bannerImg" :sightName="sightName"
      :gallaryImgs="gallaryImgs"></detail-banner>
      <detail-header></detail-header>
      <detail-card :cardInfo="cardInfo"></detail-card>
      <detail-recommend :recommendInfo="recommendInfo">
        <h3 class="border-bottom">去哪儿推荐</h3>
      </detail-recommend>
      <detail-calendar :calendarInfo="calendarInfo"></detail-calendar>
      <detail-comment :commentInfo="commentInfo"></detail-comment>
    </div>
</template>

<script>
    import DetailBanner from './base/Banner'
    import DetailHeader from './base/Header'
    import DetailCard from './base/Card'
    import DetailRecommend from './base/Recommend'
    import DetailCalendar from './base/Calendar'
    import DetailComment from './base/Comment'
    import  {getDetails} from "@/api";

    export default {
        name: "Detail",
        data(){
          return {
            bannerImg: "",
            sightName: "",
            gallaryImgs: [],
            cardInfo: {},
            recommendInfo: [],
            calendarInfo: [],
            commentInfo: []
          }
        },
        components: {
          DetailBanner,
          DetailHeader,
          DetailCard,
          DetailRecommend,
          DetailCalendar,
          DetailComment
        },
        methods: {
          async getData(){
            let {bannerImg,sightName,gallaryImgs,cardInfo,recommendInfo,calendarInfo,commentInfo} = await getDetails(this.$route.params.id)
            this.bannerImg = bannerImg
            this.sightName = sightName
            this.gallaryImgs = gallaryImgs
            this.cardInfo = cardInfo
            this.recommendInfo = recommendInfo
            this.calendarInfo = calendarInfo
            this.commentInfo = commentInfo
          }
        },
        // created(){   //写在这,不会实时更新资源,因为被keep-alive缓存了上次的数据
        //   this.getData()
        // }
        activated(){    //写在这,会实时更新资源
          this.getData()
        }
    }
</script>

<style lang="stylus" scoped>
  .detail
    height 40rem
</style>
