<template>
    <div>
        <ModuleCompletion :moduleTitle="'The Age of Chatbots'" :moduleName="'chatbots'" :buttonText="'Return Home'" />
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
            registerPageAsCompleted('chatbots', 'chatbots-quiz');
        },
    },
    created() {
        this.handlePageCompletionClick();
    },
});
</script>
