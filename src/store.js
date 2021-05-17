import { createStore } from 'vuex'
import appStore from './appStore'

// Create a new store instance.
const store = createStore({
    modules: {
        appStore,
        
      },
  
})

export default store;