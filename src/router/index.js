import { createWebHistory, createRouter } from "vue-router";
import Home                               from "@/views/Home.vue";
import Category                           from '@/components/category/Category';

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: '/category',
    name: 'Category',
    component: Category,
    children: [
      {
        name: 'Gay',
        path: '/gay',
        component: Category
      },
      {
        name: 'Furry',
        path: '/furry',
        component: Category
      },
      {
        name: 'Lesbian',
        path: '/lesbian',
        component: Category
      },
      {
        name: 'Amateur',
        path: '/amateur',
        component: Category
      },
      {
        name: 'Natural',
        path: '/natural',
        component: Category
      },
      {
        name: 'Gangbang',
        path: '/gangbang',
        component: Category
      },
      {
        name: 'Search',
        path: '/search/:kink',
        component: Category
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
