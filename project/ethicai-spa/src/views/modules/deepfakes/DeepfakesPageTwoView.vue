<template>
    <div class="dalle-page-two-view">
        <deepfakes-page-two></deepfakes-page-two>
    </div>
</template>

<script lang="ts">
import DeepfakesPageTwo from '../../../components/pages/deepfakes/deepfakes-page-2.vue';
export default {
    name: 'DeepfakesPageOneView',
    components: {
        'deepfakes-page-two': DeepfakesPageTwo
    }
}
</script>
