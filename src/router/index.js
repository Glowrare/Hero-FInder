import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home';
import SearchBoxPage from '../views/SearchBoxPage';
import SearchResult from '../views/SearchResult';
import NotFound from '../views/NotFound';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/find-a-hero',
    name: 'SearchBoxPage',
    component: SearchBoxPage,
    props: true,
  },
  {
    path: '/search-result/:id',
    name: 'SearchResult',
    component: SearchResult,
    props: true,
  },
  { path: '/:notFound(.*)', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
