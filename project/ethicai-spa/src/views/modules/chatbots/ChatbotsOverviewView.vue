<template>
    <div class="chatbots-overview">
       <module-overview-page></module-overview-page>
    </div>
</template>

<script lang="ts">
import ModuleOverviewPage from '../../../components/pages/chatbots/chatbots-overview-page.vue';
export default {
    name: 'ChatbotsModuleOverviewView',
    components: {
        'module-overview-page': ModuleOverviewPage
    }
}
</script>
