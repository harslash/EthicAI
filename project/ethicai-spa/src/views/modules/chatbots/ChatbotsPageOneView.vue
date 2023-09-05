<template>
    <div class="chatbots-page-one-view">
        <chatbots-page-one></chatbots-page-one>
    </div>
</template>

<script lang="ts">
import ChatbotsPageOne from '../../../components/pages/chatbots/chatbots-page-1.vue';
export default {
    name: 'ChatbotsPageOneView',
    components: {
        'chatbots-page-one': ChatbotsPageOne
    }
}
</script>
