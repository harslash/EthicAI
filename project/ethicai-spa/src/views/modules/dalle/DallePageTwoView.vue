<template>
    <div class="dalle-page-two-view">
        <dalle-page-two></dalle-page-two>
    </div>
</template>

<script lang="ts">
import DallePageTwo from '../../../components/pages/dalle/dalle-page-2.vue';
export default {
    name: 'DallePageTwoView',
    components: {
        'dalle-page-two': DallePageTwo
    }
}
</script>