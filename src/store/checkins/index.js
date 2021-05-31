import { getField } from 'vuex-map-fields';
import checkinService from '../../services/checkin.service'

const state = {
    form:{
        nome: '',
        documento: '',
        telefone: ''
    },
    select:'nome',
    search:'',
    checkins: [
        {
        nome: '',
        documento: '',
        telefone: ''
        }
    ]
};

const mutations = {
    addCheckin(state, checkins){
        state.checkins.push(checkins);
    },
    setCheckins(state, checkins){
        state.checkins= checkins;
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