import { createStore } from 'vuex'

export default createStore({
  state: {
    city_id: 1,
    MscId: 1,
    SaintId: 2,
    isMsc: true,
    reqValid: true


  },
  getters: {
    setSaintId(state){
      return state.isMsc 
    },
    setCityId(state){
      return state.city_id
    }
    
  },
  mutations: {
    setSaint(state){
      state.isMsc = false,
      state.city_id = 2
    },
    setMsc(state){
      state.isMsc = true,
      state.city_id = 1
    },
    setCityId(state){ if (state.isMsc){state.city_id = 1} else {
      state.city_id = 2
    }
    },
    setSaintId(state){
      state.city_id = 2
    }
  },
  actions: {
  },
  modules: {
  }
})
