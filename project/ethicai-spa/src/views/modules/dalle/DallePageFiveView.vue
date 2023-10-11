<template>
    <div class="dalle-page-five-view">
        <dalle-page-five></dalle-page-five>
    </div>
</template>

<script lang="ts">
import DallePageFive from '../../../components/pages/dalle/dalle-module-complete.vue';
export default {
    name: 'DallePageFiveView',
    components: {
        'dalle-page-five': DallePageFive
    }
}
</script>