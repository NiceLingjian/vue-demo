import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Tips from '@/components/Tips'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
