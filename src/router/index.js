import { createRouter, createWebHistory } from 'vue-router'
// import { getAuth, onAuthStateChanged } from 'firebase/auth'
// import HomeView from '../views/HomeView.vue'
import Signup from '../views/SignUp.vue'
import Signin from '../views/SignIn.vue'
import Chat from '../views/Chat.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import HomePage from '../views/HomePage.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },

  {
    path: '/signup',
    name: 'signup',
    component: Signup,
  },
  {
    path: '/signin',
    name: 'signin',
    component: Signin
  },
  {
    path: '/chat',
    name: 'chat',
    component: Chat,
    props: true,
    requiresAuth: true
  },
  {
    path: '/forgot',
    name: 'forgot',
    component: ForgotPassword
  },
  {
    path: '/home',
    name: 'home',
    component: HomePage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

// const getCurrentuser = () => {
//   return new Promise((resolve, reject) => {
//     const removeListener = onAuthStateChanged(
//       getAuth(),
//       (user) => {
//         removeListener();
//         resolve(user);
//       },
//       reject
//     );
//   });
// };

// router.beforeEach(async(to, from, next) => {
//   if(to.matched.some((record) => record.meta.requiresAuth)) {
//     if(await getCurrentuser) {
//       next();
//     }
//   } else {
//     next('/');
//   }
// })

export default router
