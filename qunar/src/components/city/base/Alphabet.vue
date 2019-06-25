<template>
    <div class="alphabet">
      <ul style="padding-top: 1.5rem">
        <li v-for="(item,key) in cities" :key="item.id"
        @click="handleClick(key)">{{key}}</li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "CityAlphabet",
        props: ["cities"],
        methods: {
          handleClick(letter){
            this.$store.commit("changeLetter",letter) //函数名在前面,参数在后
          }
        }
    }
</script>

<style lang='stylus' scoped>
  .alphabet
    position:fixed
    display:flex
    flex-direction:column
    justify-content:center
    right:0
    top:0
    bottom:0
    width:.4rem
    li
      line-height: .5rem
      text-align: center
      color: red
      font-weight:600
</style>
