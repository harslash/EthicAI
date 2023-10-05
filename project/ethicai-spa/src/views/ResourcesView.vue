<template>
    <div class="resources">
        <resources-page></resources-page>
    </div>
</template>

<script lang="ts">
import ResourcesPage from '../components/pages/resources-page.vue'
export default {
    name: 'ResourcesView',
    components: {
        'resources-page': ResourcesPage
    }
}
</script>
