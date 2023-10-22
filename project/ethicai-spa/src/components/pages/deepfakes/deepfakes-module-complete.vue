<template>
    <div>
        <ModuleCompletion :moduleTitle="'The Depths of Deepfakes'" :moduleName="'deepfakes'" :buttonText="'Return Home'" />
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
            registerPageAsCompleted('deepfakes', 'deepfakes-quiz');
        },
    },
    created() {
        this.handlePageCompletionClick();
    },
});
</script>
