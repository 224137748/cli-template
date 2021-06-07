import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/home.vue';

const Detail = () => import('../views/detail.vue');

const routes = [

  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/detail',
    name: 'detail',
    component: Detail
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;