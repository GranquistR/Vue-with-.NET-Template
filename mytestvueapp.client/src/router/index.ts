import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: () => import("../views/HelloWorldView.vue"),
    },
  ],
});
export default router;
