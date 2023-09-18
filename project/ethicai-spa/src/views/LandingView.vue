<template>
  <div class="landing">
    <landing-page></landing-page>

  </div>
</template>

<script lang="ts">
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import LandingPage from '../components/pages/landing-page.vue';


export default {
  name: 'LandingView',
  components: {
    'landing-page': LandingPage,
  }
}
</script>
