import { getField } from 'vuex-map-fields';
import checkinService from '../../services/checkin.service'

const state = {
    form:{
        hospede:'',
        dataentrada: '',
        datasaida: '',
        adicionalveiculo: false,
    },
    select:'nome',
    guests:[],
    checkins: [
        {
            hospede:'',
            dataentrada: '',
            datasaida: '',
            adicionalveiculo: false,
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
    updateFormDataEntrada(state, field) {
        state.form.dataentrada = field
    },
    updateFormDataSaida(state, field) {
        state.form.datasaida = field
    },
    updateFormAdicionalVeiculo(state, field) {
        state.form.adicionalveiculo = field
    }
};

const getters = {
    getGuestsNames(state){
        return state.guests.map((guest) => guest.nome);
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