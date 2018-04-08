import HomePage from './pages/home.vue';
import DishPage from './pages/dish.vue';
import NotFoundPage from './pages/not-found.vue';

export default [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/dish/:id/',
    component: DishPage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];
