<template>
    <div class="dalle-page-one-view">
        <deepfakes-page-one></deepfakes-page-one>
    </div>
</template>

<script lang="ts">
import DeepfakesPageOne from '../../../components/pages/deepfakes/deepfakes-page-1.vue';
export default {
    name: 'DeepfakesPageOneView',
    components: {
        'deepfakes-page-one': DeepfakesPageOne
    }
}
</script>
