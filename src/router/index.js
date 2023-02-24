import { createRouter, createWebHashHistory } from "vue-router";
import Style from "@/views/StyleView.vue";
import Home from "@/views/HomeView.vue";

const routes = [
  {
    meta: {
      title: "Select style",
    },
    path: "/",
    name: "style",
    component: Style,
  },
  {
    // Document title tag
    // We combine it with defaultDocumentTitle set in `src/main.js` on router.afterEach hook
    meta: {
      title: "Dashboard",
    },
    path: "/dashboard",
    name: "dashboard",
    component: Home,
  },
  {
    meta: {
      title: "Tables",
    },
    path: "/tables",
    name: "tables",
    component: () => import("@/views/TablesView.vue"),
  },
  {
    meta: {
      title: "Forms",
    },
    path: "/forms",
    name: "forms",
    component: () => import("@/views/FormsView.vue"),
  },
  {
    meta: {
      title: "Profile",
    },
    path: "/profile",
    name: "profile",
    component: () => import("@/views/ProfileView.vue"),
  },
  {
    meta: {
      title: "Ui",
    },
    path: "/ui",
    name: "ui",
    component: () => import("@/views/UiView.vue"),
  },
  {
    meta: {
      title: "Responsive layout",
    },
    path: "/responsive",
    name: "responsive",
    component: () => import("@/views/ResponsiveView.vue"),
  },
  {
    meta: {
      title: "Login",
    },
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginView.vue"),
  },
  {
    meta: {
      title: "Error",
    },
    path: "/error",
    name: "error",
    component: () => import("@/views/ErrorView.vue"),
  },
  {
    meta: {
      title: "Membros",
    },
    path: "/membro",
    name: "membro-listar",
    component: () => import("@/views/MembroIndexView.vue"),
  },
  {
    meta: {
      title: "Novo Cadastro",
    },
    path: "/membro/new",
    name: "membro-visualizar",
    component: () => import("@/views/MembroView.vue"),
  },
  {
    meta: {
      title: "Visualizar Cadastro",
    },
    path: "/membro/:id",
    name: "membro-cadastrar",
    component: () => import("@/views/MembroView.vue"),
  },
  {
    meta: {
      title: "Estudos",
    },
    path: "/estudo",
    name: "estudo-listar",
    component: () => import("@/views/EstudoIndexView.vue"),
  },
  {
    meta: {
      title: "Ministérios",
    },
    path: "/ministerio",
    name: "ministerio-listar",
    component: () => import("@/views/MinisterioIndexView.vue"),
  },
  {
    meta: {
      title: "Material de Apoio",
    },
    path: "/material-apoio",
    name: "material-apoio-listar",
    component: () => import("@/views/MaterialApoioIndexView.vue"),
  },
  {
    meta: {
      title: "Agenda",
    },
    path: "/agenda",
    name: "agenda-listar",
    component: () => import("@/views/AgendaIndexView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 };
  },
});

export default router;
