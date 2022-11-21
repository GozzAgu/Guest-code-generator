import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import About from '../views/AboutView.vue'
import Signup from '../views/SignUp.vue'
import Chat from '../views/Chat.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: About
  // },
  {
    path: '/',
    name: 'signup',
    component: Signup
  },
  {
    path: '/chat',
    name: 'chat',
    component: Chat
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
