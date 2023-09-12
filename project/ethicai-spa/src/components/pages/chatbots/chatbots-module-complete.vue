<template>
    <div>
        <ModuleCompletion :moduleName="'The Rise of Chatbots'" :buttonText="'Module Complete'" />
    </div>
</template>

<script lang="ts">
import ModuleCompletion from '../../../components/reusable/module_completion.vue';

export default {
    components: {
        ModuleCompletion
    }
};
</script>
