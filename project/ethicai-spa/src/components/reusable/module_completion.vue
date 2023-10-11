<template>
  <nav-bar />
  <module-navigation-bar :moduleName="moduleName"></module-navigation-bar>
  <div class="module-completion pt-3">
    <div class="content-container">
      <h1 class="module-name">You have completed...</h1>
      <h1 class="module-name">
        <span style="color: #6d0cff">{{ moduleTitle }}</span>
      </h1>
      <p class="congrats-text">Woo! Great Job!</p>
      <img
        src="../../assets/celebration.svg"
        alt="Celebration Image"
        class="celebration-image"
      />
      <router-link to="/all-modules" class="continue-link">
        <ModuleCompleteButton :text="buttonText" />
      </router-link>
    </div>
  </div>
  <page-footer />
</template>

<script>
import { defineComponent } from "vue";
import ModuleNavigationBar from "../reusable/module-navigation-bar.vue";
import ModuleCompleteButton from "../reusable-ui/module-complete-btn.vue";
import NavBar from "./nav-bar.vue";
import PageFooter from "./page-footer.vue";

export default defineComponent({
  name: "ModuleCompletion",
  components: {
    ModuleCompleteButton,
    "nav-bar": NavBar,
    "module-navigation-bar": ModuleNavigationBar,
    "page-footer": PageFooter,
  },
  props: {
    moduleTitle: String,
    moduleName: String,
    buttonText: String,
  },
});
</script>

<style scoped>
.module-completion {
  text-align: center;
  font-family: "Open Sans", sans-serif;
  margin-top: 60px;
}

.content-container {
  margin-top: 80px; /* Add space at the top */
  margin-bottom: 40px; /* Add space at the bottom */
}

.module-name {
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 20px;
}

.congrats-text {
  font-size: 24px;
  margin-bottom: 20px;
}

.celebration-image {
  width: 30%;
  height: auto;
  margin-top: 40px; /* Add space at the top */
  margin-bottom: 40px; /* Add space at the bottom */
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.continue-link {
  text-decoration: none;
}

@media (max-width: 576px) {
  .celebration-image {
    width: 50%;
  }
  .module-name {
    font-size: 32px;
  }

  .congrats-text {
    font-size: 18px;
  }

  .module-complete-button {
    font-size: 14px;
  }
}
</style>
