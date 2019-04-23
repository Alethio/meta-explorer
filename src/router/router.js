import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ContractPage',
      component: ContractPage
    },
    {
      path: '/:transactions',
      name: 'Transactions',
      component: Transactions
    }
  ]
})
