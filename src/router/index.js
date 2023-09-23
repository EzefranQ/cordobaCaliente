import { createWebHistory, createRouter } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PanelView from "../views/PanelView.vue";
import HomeServices from "../views/HomeServices.vue";
import AddUser from "../components/AddUser.vue";
import ViewUser from "../components/ViewUser.vue";
import EscortDetails from "../views/EscortDetails.vue";
import Condiciones from "../components/Condiciones.vue";
import Escorts from "../components/Escorts.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/admin",
    name: "admin",
    component: PanelView,
    children: [
      {
        path: "/addUser",
        name: "addUser",
        component: AddUser,
      },
      {
        path: "/viewUser",
        name: "viewUser",
        component: ViewUser,
      }
  ]
  },
  {
    path: "/homeServices",
    name: "homeServices",
    component: HomeServices,
    children: [
      {
        path: "/condiciones",
        name: "Condiciones",
        component: Condiciones,
      },
      {
        path: "/escorts",
        name: "Escorts",
        component: Escorts,
      },
    ]
  },
  {
    path: "/escortDetails",
    name: "EscortDetails",
    component: EscortDetails,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;
