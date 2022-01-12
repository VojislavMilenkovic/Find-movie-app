import { createRouter, createWebHistory } from "vue-router";
import TheHomepage from "./pages/TheHomepage.vue";
import MovieDetails from "./pages/MovieDetails.vue";
import AboutPage from "./pages/AboutPage.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: TheHomepage },
    { name: 'details', path: "/home/:id", component: MovieDetails },
    { path: "/about", component: AboutPage },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
