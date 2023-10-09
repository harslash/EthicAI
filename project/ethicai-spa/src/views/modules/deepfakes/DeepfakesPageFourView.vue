<template>
    <div class="dalle-page-four-view">
        <deepfakes-page-four></deepfakes-page-four>
    </div>
</template>

<script lang="ts">
import DeepfakesPageFour from '../../../components/pages/deepfakes/deepfakes-page-3.vue';
export default {
    name: 'DeepfakesPageFourView',
    components: {
        'deepfakes-page-four': DeepfakesPageFour
    }
}
</script>
