<template>
  <div class="module-completion">
    <h1 class="module-name">You have completed {{ moduleName }}</h1>
    <p class="congrats-text">Woo! Great Job!</p>
    <img src="celebration.svg" alt="Celebration Image" class="celebration-image">
    <ModuleCompleteButton :text="buttonText" />
  </div>
</template>

<script>
import ModuleCompleteButton from './module-complete-btn.vue';

export default {
  name: 'ModuleCompletion',
  components: {
    ModuleCompleteButton
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