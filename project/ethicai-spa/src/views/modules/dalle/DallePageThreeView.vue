<template>
    <div class="dalle-page-three-view">
        <dalle-page-three></dalle-page-three>
    </div>
</template>

<script lang="ts">
import DallePageThree from '../../../components/pages/dalle/dalle-page-3.vue';
export default {
    name: 'DallePageThreeView',
    components: {
        'dalle-page-three': DallePageThree
    }
}
</script>