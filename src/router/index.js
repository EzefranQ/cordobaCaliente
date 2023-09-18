import { createWebHistory, createRouter } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PanelView from "../views/PanelView.vue";
import AddUser from "../components/AddUser.vue";
import ViewUser from "../components/ViewUser.vue";
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
  // {
  //   path: "/addUser",
  //   name: "addUser",
  //   component: AddUser,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;
