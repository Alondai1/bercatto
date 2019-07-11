import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './views/Home.vue'
import SearchResults from './views/SearchResults.vue'
import ItemDetails from './views/ItemDetails.vue'
import UserProfile from './views/UserProfile.vue'
import TradingArena from './views/TradingArena.vue'
import AddItem from './views/AddItem.vue'
import SignupPage from './views/SignupPage.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/item',
      component: SearchResults
    },
    {
      path: '/item/:id',
      component: ItemDetails
    },
    {
      path: '/user/:id',
      component: UserProfile
    },
    {
      path: '/arena/:trade',
      component: TradingArena
    },
    {
      path: '/add',
      component: AddItem
    },
    {
      path: '/signup',
      component: SignupPage
    }
  ]
})
