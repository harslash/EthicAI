import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LandingView from "../views/LandingView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: LandingView,
  },
  {
    path: "/references",
    name: "references",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ReferencesView.vue"),
  },
  {
    path: "/about-us",
    name: "about-us",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutUsView.vue"),
  },
  {
    path: "/resources",
    name: "resources",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ResourcesView.vue"),
  },
  {
    path: "/chatbots",
    component: () =>
      import("../views/modules/chatbots/ChatbotsOverviewView.vue"),
  },
  {
    path: "/chatbots/the-age-of-chatbots",
    name: "the-age-of-chatbots",
    component: () =>
      import("../views/modules/chatbots/ChatbotsPageOneView.vue"),
  },
  {
    path: "/all-modules",
    name: "all-modules",
    component: () => import("../views/AllModulesView.vue"),
  },
  {
    path: "/chatbots/chatgpt-101",
    name: "chatgpt-101",
    component: () =>
      import("../views/modules/chatbots/ChatbotsPageOnebView.vue"),
  },
  {
    path: "/chatbots/too-good-to-be-true",
    name: "too-good-to-be-true",
    component: () =>
      import("../views/modules/chatbots/ChatbotsPageTwoView.vue"),
  },
  {
    path: "/chatbots/hallucination",
    name: "hallucination",
    component: () =>
      import("../views/modules/chatbots/ChatbotsPageThreeView.vue"),
  },
  {
    path: "/chatbots/misuses-and-plagiarism",
    name: "misuses-and-plagiarism",
    component: () =>
      import("../views/modules/chatbots/ChatbotsPageFourView.vue"),
  },
  {
    path: "/chatbots/quiz",
    name: "chatbots-quiz",
    component: () =>
      import("../views/modules/chatbots/ChatbotsPageFiveView.vue"),
  },
  {
    name: "chatbots-complete",
    path: "/chatbots/module-complete",
    component: () =>
      import("../views/modules/chatbots/ChatbotsPageSixView.vue"),
  },
  {
    path: "/dalle",
    component: () => import("../views/modules/dalle/DalleOverviewView.vue"),
  },
  {
    name: "the-rise-of-dalle",
    path: "/dalle/the-rise-of-dalle",
    component: () => import("../views/modules/dalle/DallePageOneView.vue"),
  },
  {
    name: "ai-generated-vs-human-art",
    path: "/dalle/ai-generated-vs-human-art",
    component: () => import("../views/modules/dalle/DallePageTwoView.vue"),
  },
  {
    name: "the-complexities-of-copyright",
    path: "/dalle/the-complexities-of-copyright",
    component: () => import("../views/modules/dalle/DallePageThreeView.vue"),
  },
  {
    name: "dalle-quiz",
    path: "/dalle/quiz",
    component: () => import("../views/modules/dalle/DallePageFourView.vue"),
  },
  {
    name: "dalle-complete",
    path: "/dalle/module-complete",
    component: () => import("../views/modules/dalle/DallePageFiveView.vue"),
  },
  {
    path: "/deepfakes",
    component: () =>
      import("../views/modules/deepfakes/DeepfakesOverviewView.vue"),
  },
  {
    name: "the-depth-of-deepfakes",
    path: "/deepfakes/the-depth-of-deepfakes",
    component: () =>
      import("../views/modules/deepfakes/DeepfakesPageOneView.vue"),
  },
  {
    name: "ai-for-evil",
    path: "/deepfakes/ai-for-evil",
    component: () =>
      import("../views/modules/deepfakes/DeepfakesPageTwoView.vue"),
  },
  {
    name: "real-or-not-real",
    path: "/deepfakes/real-or-not-real",
    component: () =>
      import("../views/modules/deepfakes/DeepfakesPageThreeView.vue"),
  },
  {
    name: "deepfakes-in-media",
    path: "/deepfakes/deepfakes-in-media",
    component: () =>
      import("../views/modules/deepfakes/DeepfakesPageFourView.vue"),
  },
  {
    name: "judgement-day",
    path: "/deepfakes/judgement-day",
    component: () =>
      import("../views/modules/deepfakes/DeepfakesPageFiveView.vue"),
  },
  {
    name: "deepfakes-quiz",
    path: "/deepfakes/quiz",
    component: () =>
      import("../views/modules/deepfakes/DeepfakesPageSixView.vue"),
  },
  {
    name: "deepfakes-complete",
    path: "/deepfakes/module-complete",
    component: () =>
      import("../views/modules/deepfakes/DeepfakesPageSevenView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
