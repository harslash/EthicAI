<template>
  <div>
    <module-navigation-bar :moduleName="'dalle'"></module-navigation-bar>
    <ModuleCompletion
      :moduleName="'The Rise of DALL·E'"
      :buttonText="'Module Complete'"
    />
  </div>
</template>

<script>
import ModuleNavigationBar from "../../reusable/module-navigation-bar.vue";
import { registerPageAsCompleted } from "@/helpers";
import ModuleCompletion from "../../../components/reusable/module_completion.vue";
import { defineComponent } from "vue"; // Import defineComponent from Vue 3

export default defineComponent({
  components: {
    ModuleCompletion,
    "module-navigation-bar": ModuleNavigationBar,
  },
  methods: {
    handlePageCompletionClick() {
      registerPageAsCompleted("dalle", "dalle-quiz");
    },
  },
  created() {
    this.handlePageCompletionClick();
  },
});
</script>
