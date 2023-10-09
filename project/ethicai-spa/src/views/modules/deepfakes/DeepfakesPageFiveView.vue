<template>
    <div class="dalle-page-five-view">
        <deepfakes-page-five></deepfakes-page-five>
    </div>
</template>

<script lang="ts">
import DeepfakesPageFive from '../../../components/pages/deepfakes/deepfakes-page-3.vue';
export default {
    name: 'DeepfakesPageFiveView',
    components: {
        'deepfakes-page-five': DeepfakesPageFive
    }
}
</script>
