import { createRouter, createWebHistory } from "vue-router";
import UserTypeSelectionPage from "../views/UserTypeSelectionPage.vue";
import IDInputPage from "../views/IDInputPage.vue";
import DepartmentSelectionPage from "../views/DepartmentSelectionPage.vue";
import ServiceSelectionPage from "../views/ServiceSelectionPage.vue";
import AdditionalRequestsPage from "../views/AdditionalRequestsPage.vue";
import StressTestPage from "../views/StressTestPage.vue";
import TicketDisplayPage from "../views/TicketDisplayPage.vue";
import QueueWindowPage from "../views/QueueWindowPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "department-select",
      component: DepartmentSelectionPage,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/id-input",
      name: "id-input",
      component: IDInputPage,
    },
    {
      path: "/user-type",
      name: "user-type",
      component: UserTypeSelectionPage,
    },
    {
      path: "/service-selection",
      name: "service-select",
      component: ServiceSelectionPage,
    },
    {
      path: "/additional-requests",
      name: "additional-requests",
      component: AdditionalRequestsPage,
    },
    {
      path: "/stresstest",
      name: "stresstest",
      component: StressTestPage,
    },
    {
      path: "/ticket-display",
      name: "ticket-display",
      component: TicketDisplayPage,
    },
    {
      path: "/window/",
      name: "window",
      component: QueueWindowPage,
    },
    // {
    //   path: "/window/:department",
    //   name: "window",
    //   component: QueueWindowPage,
    // },
  ],
});

export default router;
