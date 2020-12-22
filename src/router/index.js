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
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
