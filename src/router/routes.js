const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Index.vue") }]
  },
  {
    path: "/vote_detail",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Index.vue") }]
  },
  {
    path: "/vote_rank",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Rank.vue") }]
  }
];

export default routes;
