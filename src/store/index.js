import Vue from 'vue'
import Vuex from 'vuex'
import guests from './guests'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        guests: guests
    }
  })

export default store;