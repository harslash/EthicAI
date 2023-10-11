<template>
    <div class="about-us">
        <about-us-page></about-us-page>
    </div>
</template>

<script lang="ts">
import AboutUsPage from '../components/pages//about-us-page.vue';
export default {
    name: 'AboutUsView',
    components: {
        'about-us-page': AboutUsPage
    }
}
</script>
