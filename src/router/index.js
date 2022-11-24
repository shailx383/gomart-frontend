import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import Product from '../views/Product.vue'
import Account from '../views/Account.vue'
import Main from '../views/Main.vue'
import AddProd from '../views/AddProd.vue'
import EditProd from '../views/EditProd.vue'
const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: SignUp
  },
  {
    path: '/product',
    name: 'product',
    component: Product
  },
  {
    path: '/account',
    name: 'account',
    component: Account
  },
  {
    path: '/main',
    name: 'main',
    component: Main
  },
  {
    path: '/addprod',
    name: 'addprod',
    component: AddProd
  },
  {
    path: '/editprod',
    name: 'editprod',
    component: EditProd
  },
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
