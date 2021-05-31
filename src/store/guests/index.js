import { getField } from 'vuex-map-fields';
import guestService from '../../services/guest.service'

const state = {
    form:{
        nome: '',
        documento: '',
        telefone: ''
    },
    select:'nome',
    search:'',
    guests: [
        {
        nome: '',
        documento: '',
        telefone: ''
        }
    ]
};

const mutations = {
    addGuest(state, guest){
        state.guests.push(guest);
    },
    setGuests(state, guests){
        state.guests= guests;
    },
    setSelect(state, value){
        state.select = value;
    },
    setSearch(state, value){
        state.search = value;
    },
    updateFormName(state, field) {
        state.form.nome = field
    },
    updateFormDocument(state, field) {
        state.form.documento = field
    },
    updateFormPhone(state, field) {
        state.form.telefone = field
    },
};

const getters = {
    getSearch(state){
        return { [state.select]: state.search }
    },
    getFormField(state) {
        return getField(state.form);
    },
}

const actions = {
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
    },
    searchGuests({ commit, getters}){
        guestService.searchGuests(getters.getSearch)
            .then((response) => {
                commit('setGuests', response)
            })
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions,
}