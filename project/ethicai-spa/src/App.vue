<template>
  <!-- <landingPage></landingPage> -->
  <NavBar></NavBar>
  <LandingPage/>
  <PageFooter/>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import LandingPage from './components/pages/landing-page.vue';
import NavBar from './components/nav-bar.vue'
import PageFooter from './components/page-footer.vue'

export default defineComponent({
  name: 'App',
  components: {
    LandingPage,
    NavBar,
    PageFooter
  }
});
</script>

<style>

</style>
