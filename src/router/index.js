import { createRouter, createWebHistory } from "vue-router";
import ListPage from "../components/ListPage.vue";
import MainPage from "../components/MainPage.vue";

const routes = [
  {
    path: "/",
    name: MainPage,
    component: MainPage,
  },
  {
    path: "/listpage",
    name: ListPage,
    component: ListPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
