<template>
  <div>
    <ModuleCompletion
      :moduleName="'The Rise of DALL·E'"
      :buttonText="'Module Complete'"
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
