import Vue from 'vue'
import Router from 'vue-router'
import MainPage from './components/MainPage'
import EditPage from './components/EditPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPage
    },
    {
      name: 'edit',
      path: '/edit/:id',
      component: EditPage
    }
  ]
})
