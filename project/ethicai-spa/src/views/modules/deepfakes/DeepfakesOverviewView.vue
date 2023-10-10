<template>
    <div class="deepfakes-overview">
        <module-overview-page></module-overview-page>
    </div>
</template>

<script lang="ts">
import ModuleOverviewPage from '../../../components/pages/deepfakes/deepfakes-overview-page.vue';
export default {
    name: 'DeepfakesModuleOverviewView',
    components: {
        'module-overview-page': ModuleOverviewPage
    }
}
</script>