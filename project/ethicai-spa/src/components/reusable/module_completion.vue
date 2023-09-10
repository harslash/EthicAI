<template>
  <nav-bar/>
  <div class="module-completion">
    <h1 class="module-name">You have completed... </h1>
    <h1 class="module-name"><span style="color: #6D0CFF;">{{ moduleName }}</span></h1>
    <p class="congrats-text">Woo! Great Job!</p>
    <img src="../../assets/celebration.svg" alt="Celebration Image" style="max-width: 40%;">
    <br>
    <ModuleCompleteButton :text="buttonText" />
  </div>
  <page-footer/>
</template>

<script>
import { defineComponent} from 'vue';
import ModuleCompleteButton from '../reusable-ui/module-complete-btn.vue';
import NavBar from './nav-bar.vue'
import PageFooter from './page-footer.vue';

export default {
  name: 'ModuleCompletion',
  components: {
    ModuleCompleteButton,
    'nav-bar': NavBar,
    'page-footer': PageFooter,
  },
  props: {
    moduleName: String,
    buttonText: String
  }
};
</script>

<style scoped>
.module-completion {
  text-align: center;
  font-family: 'Open Sans', sans-serif;
  margin-top: 60px;
}

.module-name {
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 10px;
}

.congrats-text {
  font-size: 24px;
  margin-bottom: 20px;
}

.celebration-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
}
</style>