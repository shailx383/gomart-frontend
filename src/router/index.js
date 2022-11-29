import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import Product from '../views/Product.vue'
import Account from '../views/Account.vue'
import Main from '../views/Main.vue'
import AddProd from '../views/AddProd.vue'
import EditProd from '../views/EditProd.vue'
import ManAdmApply from '../views/ManAdmApply.vue'
import ProductSearch from '../views/ProductSearch.vue'
import ManAdmList from '../views/ManAdmList.vue'
import RstPass from '../views/RstPass.vue'
import ViewProf from '../views/ViewProf.vue'
import Checkout from '../views/Checkout.vue'
import PastOrders from '../views/PastOrders.vue'


const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
    props: true
  },
  {
    path: '/signup',
    name: 'signup',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: SignUp,
    props: true
  },
  {
    path: '/product',
    name: 'product',
    component: Product,
    props: true
  },
  {
    path: '/account',
    name: 'account',
    component: Account,
    props: true
  },
  {
    path: '/main',
    name: 'main',
    component: Main,
    props: true
  },
  {
    path: '/addprod',
    name: 'addprod',
    component: AddProd,
    props: true
  },
  {
    path: '/editprod',
    name: 'editprod',
    component: EditProd,
    props: true
  },
  {
    path: '/manadmapply',
    name: 'manadmapply',
    component: ManAdmApply,
    props: true
  },
  {
    path: '/prodsearch/:search',
    name: 'prodsearch',
    component: ProductSearch,
    props: true
  },
  {
    path: '/manadmlist',
    name: 'manadmlist',
    component: ManAdmList,
    props: true
  },
  {
    path: '/rstpass',
    name: 'rstpass',
    component: RstPass,
    props: true
  },

  {
    path: '/PastOrders',
    name: 'PastOrders',
    component: PastOrders,
    props: true
  },
  {
    path: '/viewprof',
    name: 'viewprof',
    component: ViewProf,
    props: true
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: Checkout,
    props: true
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
