import { getField } from 'vuex-map-fields';
import checkinService from '../../services/checkin.service'

const state = {
    form:{
        hospede:'',
        nome: '',
        documento: '',
        telefone: ''
    },
    select:'nome',
    search:'',
    guests:[],
    checkins: [
        {
        nome: '',
        documento: '',
        telefone: ''
        }
    ]
};

const mutations = {
    setHospedeByName(state, name){
        state.form.hospede = state.guests.find(guest => guest.nome === name).documento;
    },
    addCheckin(state, checkins){
        state.checkins.push(checkins);
    },
    setCheckins(state, checkins){
        state.checkins= checkins;
    },
    setGuests(state, guests){
        state.guests = guests;
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
    getGuestsNames(state){
        return state.guests.map((guest) => guest.nome);
    },
    getSearch(state){
        return { [state.select]: state.search }
    },
    getFormField(state) {
        return getField(state.form);
    },
}

const actions = {
    loadCheckins({commit}){
        checkinService.getAllCheckins()
            .then((response)=>{
                commit('setCheckins', response)
            })
    },
    saveCheckin({state, commit}){
        checkinService.saveCheckin(state.form)
            .then(() => {
                commit('addCheckin', state.form)
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