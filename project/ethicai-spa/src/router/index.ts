import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import LandingView from '../views/LandingView.vue'
import LoginView from '../views/LoginView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: LandingView
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/references',
    name: 'references',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ReferencesView.vue')
  },
  {
    path: '/chatbots',
    component: () => import('../views/modules/chatbots/ChatbotsOverviewView.vue'),
  },
  {
    path: '/chatbots/the-age-of-chatbots', 
    name: 'the-age-of-chatbots',
    component: () => import('../views/modules/chatbots/ChatbotsPageOneView.vue'),
  },
  {
    path: '/all-modules',
    name: 'all-modules',
    component: () => import('../views/AllModulesView.vue')
  },
  {
    path: '/chatbots/too-good-to-be-true',
    name: 'too-good-to-be-true',
    component: () => import('../views/modules/chatbots/ChatbotsPageTwoView.vue')
  },
  {
    path: '/chatbots/hallucination',
    name: 'hallucination',
    component: () => import('../views/modules/chatbots/ChatbotsPageThreeView.vue')
  },
  {
    path: '/chatbots/misuses-and-plagarism',
    name: 'misuses-and-plagarism',
    component: () => import('../components/pages/chatbots/chatbots-page-4.vue')
  },
  {
    path: '/dalle',
    component: () => import('../views/modules/dalle/DalleOverviewView.vue'),
  },
  {
    path: '/dalle/the-rise-of-dalle',
    component: () => import('../views/modules/dalle/DallePageOneView.vue'),
  },
  {
    path: '/dalle/ai-generated-vs-human-art',
    component: () => import('../views/modules/dalle/DallePageTwoView.vue'),
  },
  {
    path: '/dalle/copyright-and-copywrong',
    component: () => import('../views/modules/dalle/DallePageThreeView.vue'),
  },
  {
    path: '/dalle/module-complete',
    component: () => import('../components/pages/dalle/dalle-module-complete.vue'),
  },
  {
    path: '/quiz-ui',
    component: () => import('../components/reusable/quiz-ui.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
