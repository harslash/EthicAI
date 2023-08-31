<template>
  <div class="app bg-yellow-300 ">
    <p class="text-lg">This text is from the App component</p>
    <purple-btn></purple-btn>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import purpleBtn from "./components/purple-btn.vue";

export default defineComponent({
  name: 'App',
  components: {
   purpleBtn
  }
});
</script>

<style>

</style>
