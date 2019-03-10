import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    notes: []
  },
  mutations: {
    addNote(state, payload) {
      if (payload.title && payload.text) {
        const note = { title: payload.title, text: payload.text, isDone: false };
        state.notes.push(note);
        return state.notes.lenght - 1;
      }

      return -1;
    },

    removeNote(state, payload) {
      if (payload.index < 0 || payload.index > state.notes.length - 1) {
        return undefined;
      }

      return state.notes.splice(payload.index, 1);
    },

    updateNote(state, payload) {
      if (payload.index < 0 || payload.index > state.notes.length - 1) {
        return undefined;
      }

      state.notes[payload.index].title = payload.title;
      state.notes[payload.index].text = payload.text;
      return state.notes[payload.index];
    },

    markAsDone(state, payload) {
      if (payload.index < 0 || payload.index > state.notes.length - 1) {
        return undefined;
      }

      state.notes[payload.index].isDone = true;
      return state.notes[payload.index];
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
