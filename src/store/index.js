import { createStore } from 'vuex'

export default createStore({
  state: {
    city_id: 1,
    isMsc: true,
    reqValid: true,
    isNameInvalid:false,
    isPhoneInvalid:false,
    isEmailInvalid:false,
    isFormInvalid:false,
    isOpened: false,
    


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
    },
    closeResponse(state){
      state.isOpened = false
    },
    openResponse(state){
      state.isOpened = true
    },
    
  },
  actions: {
  },
  modules: {
  }
})
