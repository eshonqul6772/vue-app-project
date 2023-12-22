import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import LoginView from "@/views/LoginView.vue";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: HomeView
    },
    {
      path: '/Login',
      name: 'login',
      component:LoginView
    },
  ]
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/Login'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/Login');
  }

  next();
})

