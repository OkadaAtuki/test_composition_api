import finishe from "../page/finishe.vue";
import unfinishe from "../page/unfinishe.vue";
import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";

const routes = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: HomeView,
  // },
  // {
  //   path: "/about",
  //   name: "about",
  //   route level code-splitting
  //   this generates a separate chunk (about.[hash].js) for this route
  //   which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
  {
    path: '/',
    name: 'unfinishe',
    // component: () =>
    //   import("../page/unfinishe.vue"),
    component: unfinishe,
    // props: true
  },
  {
    path: '/finishe/',
    name: 'finishe',
    component: finishe,
    // component: () =>
    //   import("../page/finishe.vue"),  
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
