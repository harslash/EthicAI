<template>
  <div>
    <div class="progress">
      <div
        class="progress-bar"
        role="progressbar"
        style="width: 100%"
        aria-valuenow="100"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ModuleNavigationBar",
  data() {
    return {};
  },
  methods: {},
});
</script>

<style lang="css" scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap");
/* Your component-specific styles go here */
</style>
