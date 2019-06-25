import  Vue from 'vue'
import  Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    letter: "",
    city: localStorage.getItem("city") || "福州"
  },
  mutations: {
    changeLetter(state,letter){
      this.state.letter = letter
    },
    changeCity(state,city){
      this.state.city = city
      localStorage.setItem("city",city)
    }
  }
})
