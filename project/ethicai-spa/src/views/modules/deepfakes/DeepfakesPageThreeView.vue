<template>
    <div class="dalle-page-three-view">
        <deepfakes-page-three></deepfakes-page-three>
    </div>
</template>

<script lang="ts">
import DeepfakesPageThree from '../../../components/pages/deepfakes/deepfakes-page-3.vue';
export default {
    name: 'DeepfakesPageThreeView',
    components: {
        'deepfakes-page-three': DeepfakesPageThree
    }
}
</script>
