<template>
    <div class="references">
        <references-page></references-page>
    </div>
</template>

<script lang="ts">
import ReferencesPage from '../components/pages/references-page.vue'
export default {
    name: 'ReferencesView',
    components: {
        'references-page': ReferencesPage
    }
}
</script>
