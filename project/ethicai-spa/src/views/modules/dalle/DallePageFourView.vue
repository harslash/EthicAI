<template>
    <div class="dalle-page-four-view">
        <dalle-page-four></dalle-page-four>
    </div>
</template>

<script lang="ts">
import DallePageFour from '../../../components/pages/dalle/dalle-module-complete.vue';
export default {
    name: 'DallePageFourView',
    components: {
        'dalle-page-four': DallePageFour
    }
}
</script>