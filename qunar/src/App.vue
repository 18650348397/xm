<template>
  <div id="app">
    <keep-alive>    <!--缓存,不让切换组件时重新加载-->
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  
}
</style>
