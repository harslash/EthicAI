<template>
    <div class="dalle-overview">
       <module-overview-page></module-overview-page>
    </div>
</template>

<script lang="ts">
import ModuleOverviewPage from '../../../components/pages/dalle/dalle-overview-page.vue';
export default {
    name: 'DalleModuleOverviewView',
    components: {
        'module-overview-page': ModuleOverviewPage
    }
}
</script>