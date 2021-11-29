import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [
      {name: 'Poção', id: 1}, 
      {name: 'Espada', id: 2},
      {name: 'Escudo', id: 3},
      {name: 'Arco', id: 4},
      {name: 'Flecha', id: 5},
      {name: 'Força', id: 6},
      {name: 'Mana', id: 7},
      {name: 'Vida', id: 8},
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
