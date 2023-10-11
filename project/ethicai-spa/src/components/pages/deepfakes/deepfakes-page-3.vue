<template>
  <nav-bar />
  <module-navigation-bar :moduleName="'deepfakes'"></module-navigation-bar>
  <div class="container-fluid page-container text-center">
    <div class="container mb-5 text-section">
      <div class="row h-10 mb-5">
        <div class="col-md-12">
          <h1 class="tw-mt-24">Real or Not Real?</h1>
        </div>
      </div>
      <div class="col-md-12 d-flex justify-content-end">
        <router-link to="/deepfakes/deepfakes-in-media">
          <purple-btn :text="'Continue'" @click="handlePageCompletionClick()"></purple-btn>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import NavBar from '../../reusable/nav-bar.vue';
import ModuleNavigationBar from "../../reusable/module-navigation-bar.vue";
import PurpleBtn from '../../reusable-ui/purple-btn.vue';

export default defineComponent({
  name: 'DeepfakesPage3',
  data() {
    return {
    };
  },
  methods: {
    handlePageCompletionClick(this: any) {
      this.$registerPageAsCompleted('deepfakes', 'real-or-not-real');
    }
  },
  components: {
    'nav-bar': NavBar,
    "module-navigation-bar": ModuleNavigationBar,
    'purple-btn': PurpleBtn
  }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');

.container-fluid.page-container {
  margin-top: 60px;
}

.section-text {
  width: 60%;
  text-align: left;
}

.text-section {
  opacity: 1;
  max-height: 2000px;
  transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
}

.hidden {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
}

@media (max-width: 767.98px) {
  .section-text {
    width: 90%;
  }
}
</style>
