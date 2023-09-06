<template>
  <div class="landing">
    <nav-bar></nav-bar>
    <landing-hero></landing-hero>
    <landing-card></landing-card>
    <page-footer></page-footer>  

  </div>
</template>

<script lang="ts">
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import LandingHero from '../components/pages/landing-hero.vue';
import LandingCard from '../components/pages/landing-card.vue';
import NavBar from '../components/reusable/nav-bar.vue';
import PageFooter from '../components/reusable/page-footer.vue';

export default {
  name: 'LandingView',
  components: {
    'nav-bar': NavBar,
    'landing-hero': LandingHero,
    'landing-card': LandingCard,
    'page-footer': PageFooter
  }
}
</script>
