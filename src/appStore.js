
import axios from 'axios'

export default {
  namespaced: true,
  state: {
    appName: 'My Movie List',
    records:[],
  },
  getters: {
    updatedRecords: state => state.records
  },
  mutations: {
    MEMBER_DATA(state,data){
      state.records = data
      
    }
  },
  actions: {
    fetchData() {
      return new Promise((resolve, reject) => {
        axios
          .get('http://www.omdbapi.com/?s=toy&y=2019&apikey=61c0472e')
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    getDetail(imdbID){
      return new Promise((resolve, reject) => {
        axios
          .get('http://www.omdbapi.com/i='+imdbID+'?apikey=61c0472e')
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    }
  },
}
