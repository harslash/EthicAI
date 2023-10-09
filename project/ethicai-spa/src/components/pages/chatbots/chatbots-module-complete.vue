<template>
    <div>
        <ModuleCompletion :moduleName="'The Age of Chatbots'" :buttonText="'Module Complete'" />
    </div>
</template>
  
<script lang="ts">
import { registerPageAsCompleted } from '@/helpers';
import ModuleCompletion from '../../../components/reusable/module_completion.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    components: {
        ModuleCompletion
    },
    methods: {
        handlePageCompletionClick() {
            registerPageAsCompleted('chatbots', 'chatbot-quiz');
        },
    },
    created() {
        this.handlePageCompletionClick();
    },
});
</script>
  