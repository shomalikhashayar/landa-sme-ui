const routes = [
  {
    path: "",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/dashboard", component: () => import("pages/TheDashboard.vue") },
      { path: "/proformas", component: () => import("pages/TheProformas.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
