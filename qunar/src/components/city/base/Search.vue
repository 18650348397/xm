<template>
    <div class="search">
      <input type="text" class='header-input' v-model="keyword" placeholder='请输入城市名和拼音'>
      <div class="search-content" v-show="keyword" ref="swapper">
        <ul>
          <li class='search-item border-bottom'
           @click="handleClick(city.name)" v-for="(city,index) in filterCities" :key="city.id">{{city.name}}</li>
          <li v-if="isShow" class='search-item border-bottom'>未匹配到数据</li>
        </ul>
      </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        name: "CitySearch",
        props: ["cities"],
        data(){
          return {
            keyword:"",
          }
        },
        mounted(){
          this.scroll = new BScroll(this.$refs.swapper,{
            click: true
          })
        },
        computed: {
          filterCities(){
            let result = []
            for(let key in this.cities){
              this.cities[key].forEach((city,index) => {
                if(city.name.includes(this.keyword) || city.spell.includes(this.keyword)){
                  result.push(city)
                }
              })
            }
            return result
          },
          isShow(){
            return !this.filterCities.length    //取反表示双筛选的数组长度为0或不存在
          }
        },
        methods:{
          handleClick(city){
            this.$store.commit("changeCity",city) //函数名在前面,参数在后
            this.$router.push("/")
          }
        }
    }
</script>

<style lang='stylus' scoped>
  .border-bottom::before
    border-color:#aaa
  .search
    position:relative
    height:.72rem
    padding:0.1rem
    background-color:#00bcd4
    .header-input
      width:100%
      height:100%
      border-radius:.1rem
      text-align:center
    .search-content
      position:fixed
      z-index:20
      overflow:hidden
      top:1.78rem
      left:0
      right:0
      bottom:0
      background-color:#ccc
      .search-item
        line-height:.8rem
        padding-left:.2rem
        background-color:#fff
</style>
