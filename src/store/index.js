import Vue from 'vue'
import Vuex from 'vuex'
import prediction from './prediction/prediction'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        prediction
    }
  })
  
