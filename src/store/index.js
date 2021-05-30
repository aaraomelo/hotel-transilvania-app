import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        select:'nome',
        search:'',
        guests: [
            {
                nome: "Bruno",
                documento: "12345678",
                telefone: "4712234554"
            },
            {
                nome: "Aarão",
                documento: "87654321",
                telefone: "47122344554"
            }
        ]
    },
    mutations: {
        setSelect(state, value){
            state.select = value;
        },
        setSearch(state, value){
            state.search = value;
        }
    },
    getters: {
        getSearch(state){
            return { [state.select]: state.search }
        }
    },
    actions: {}
  })

export default store;