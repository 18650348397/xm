<template>
    <div class="header">
      <i class="iconfont icon-fanhui header-back"></i>
      <div class="header-input">
        <i class="iconfont icon-sousuo"></i>
        <input type="text" placeholder="输出城市/景点/游玩主题">
      </div>
      <router-link tag="div" to="/city" class="header-right">
        <span>{{this.$store.state.city}}</span><i class="iconfont icon-jiantou"></i>
      </router-link>
    </div>
</template>

<script>
    export default {
        name: "HomeHeader"
    }
</script>

<style lang="stylus" scoped>  //本案例中,1rem = 50px
  .header
    display: flex   //让里面元素横排显示
    height: .88rem
    background-color: #00bcd4
    line-height: .88rem
    color: #fff
    .header-back
      width: .88rem
      text-align: center
    .header-input
      flex: 1   //自动撑开
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      padding-left: .15rem
      background-color: #fff
      border-radius: .12rem
      .icon-sousuo
        color: #ccc
        vertical-align: middle
      input
        width: 80%
        vertical-align: middle
        font-size: .26rem
    .header-right
      padding: 0 .15rem
      span
        vertical-align: top
      .icon-jiantou
        font-size: .24rem
        vertical-align: top
</style>
