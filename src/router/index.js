import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../Views/HomeView.vue";
import PokemonDetail from "../Views/PokemonDetail.vue";

const routes = [
    {
      path: "/",
      name: "HomeView",
      component: HomeView,
    },
    {
        path: "/pokemon/:name",
        name: "Pokemon",
        component: PokemonDetail,
      }
  ];

  const router = createRouter({
    history:createWebHistory(),
    routes
  });

export default router;
