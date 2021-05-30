import Vue from 'vue'
import Vuex from 'vuex'
import { getField, updateField } from 'vuex-map-fields';
import guestService from '../services/guest.service'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        form:{
            nome: '',
            documento: '',
            telefone: ''
        },
        select:'nome',
        search:'',
        guests: []
    },
    mutations: {
        addGuest(state, guest){
            state.guests.push(guest);
        },
        setGuests(state, guests){
            this.state.guests= guests;
        },
        setSelect(state, value){
            state.select = value;
        },
        setSearch(state, value){
            state.search = value;
        },
        updateField
    },
    getters: {
        getSearch(state){
            return { [state.select]: state.search }
        },
        getField
    },
    actions: {
        loadGuests({commit}){
            guestService.getAllGuests()
                .then((response)=>{
                    commit('setGuests', response)
                })
        },
        saveGuest({state, commit}){
            guestService.saveGuest(state.form)
                .then(() => {
                    commit('addGuest', state.form)
                })
        }
    }
  })

export default store;