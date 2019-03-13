import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import v1 from 'uuid/v1'
import { stat } from 'fs';
import axios from 'axios';

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  mutations: {

  },
  actions: {
    async getNotes(context) {
      return await axios.get('http://localhost:3000/notes');
    },

    async getNote(context, payload) {
      return await axios.get(`http://localhost:3000/notes/${payload.id}`);
    },

    async addNote(context, payload) {
      if (payload.title && payload.text) {
        const id = v1();
        const note = { id: id, title: payload.title, text: payload.text, isDone: false };

        return await axios.post('http://localhost:3000/notes', note)
      }
    },

    async removeNote(context, payload) {
      return await axios.delete(`http://localhost:3000/notes/${payload.id}`)
    },

    async updateNote(context, payload) {
      return await axios.put(`http://localhost:3000/notes/${payload.id}`, payload);
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
