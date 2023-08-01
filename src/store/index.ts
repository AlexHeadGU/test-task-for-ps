import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    GET_DATA() {
      return new Promise((resolve, reject) => {
        axios({ url: 'https://api.openweathermap.org/data/2.5/weather?lat=lat&lon=lon&appid=5d73f817a7f0f4e140650ce116e911f3', method: 'GET' })
        .then(resp => {
          console.log(resp)
          resolve(resp)
        })
        .catch(err => {
          reject(err)
        })
      })
     },
  },
  modules: {
  }
})
