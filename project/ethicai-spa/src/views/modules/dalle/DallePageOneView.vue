<template>
    <div class="dalle-page-one-view">
        <dalle-page-one></dalle-page-one>
    </div>
</template>

<script lang="ts">
import DallePageOne from '../../../components/pages/dalle/dalle-page-1.vue';
export default {
    name: 'DallePageOneView',
    components: {
        'dalle-page-one': DallePageOne
    }
}
</script>
