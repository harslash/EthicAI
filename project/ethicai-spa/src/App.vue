<template>
  <!-- <landingPage></landingPage> -->
  <NavBar></NavBar>

</template>


<script lang="ts">
import { defineComponent } from 'vue';
// import LandingPage from './components/pages/landing-page.vue';
import NavBar from './components/nav-bar.vue'

export default defineComponent({
  name: 'App',
  components: {
    // LandingPage,
    NavBar
  }
});
</script>

<style>

</style>
