<template>
    <div class="allmodules">
      <all-modules-page></all-modules-page>
    </div>
</template>

<script lang="ts">
import AllModulesPage from '../components/pages/all-modules-page.vue'
export default {
    name: 'AllModulesView',
    components: {
        'all-modules-page': AllModulesPage
    }
}
</script>