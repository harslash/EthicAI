<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
/* eslint-disable vue/no-unused-components */
import { defineComponent } from 'vue';
import LoginPage from './components/pages/login-page.vue';
import NavBar from './components/reusable/nav-bar.vue'
import PageFooter from './components/reusable/page-footer.vue'
import ModuleOverview from './components/reusable/module_overview.vue'
import LandingPage from './components/pages/landing-page.vue';
import ChatGPTUI from './components/reusable/chatgpt_ui.vue';
export default defineComponent({
  name: 'App',
  components: {
    LoginPage,
    NavBar,
    PageFooter,
    ModuleOverview,
    LandingPage,
    ChatGPTUI
  }
});
</script>

<style>

</style>

