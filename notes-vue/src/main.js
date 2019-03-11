import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import v1 from 'uuid/v1'
import { stat } from 'fs';

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    notes: []
  },
  mutations: {
    addNote(state, payload) {
      if (payload.title && payload.text) {
        const id = v1();
        const note = { id: id, title: payload.title, text: payload.text, isDone: false };
        state.notes.push(note);
        return id;
      }

      return -1;
    },

    removeNote(state, payload) {
      const index = state.notes.findIndex(n => n.id === payload.id);
      if (index === -1) {
        return null;
      }

      return state.notes.splice(index, 1);
    },

    updateNote(state, payload) {
      const index = state.notes.findIndex(n => n.id === payload.id);
      if (index === -1) {
        return null;
      }

      state.notes[index].title = payload.title;
      state.notes[index].text = payload.text;
      return state.notes[payload.index];
    },

    markAsDone(state, payload) {
      const index = state.notes.findIndex(n => n.id === payload.id);
      if (index === -1) {
        return null;
      }

      state.notes[index].isDone = true;
      return state.notes[index];
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
