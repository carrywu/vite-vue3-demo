import Vuex from 'vuex'


export  const store = Vuex.createStore({
    
    state () {
        return {
          name: 'carry',
          password:'123123'
        }
      },
      mutations:{
        setPassword (state,password){
            state.password=password
          }
      },
      actions:{
        changePassword({commit},password){
            commit('setPassword',password)
        }
      }
      
})