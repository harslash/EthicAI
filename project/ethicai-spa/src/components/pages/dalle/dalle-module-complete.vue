<template>
  <div>
    <ModuleCompletion
      :moduleName="'The Rise of DALL·E'"
      :buttonText="'Complete Module'"
    />
  </div>
</template>

<script>
import ModuleCompletion from '../../../components/reusable/module_completion.vue';

export default {
  components: {
    ModuleCompletion
  }
};
</script>

<style>
/* Your page-specific styles go here */
</style>