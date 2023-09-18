<template>
    <div class="chatbots-page-two-view">
        <chatbots-page-two></chatbots-page-two>
    </div>
</template>

<script lang="ts">
import ChatbotsPageTwo from '../../../components/pages/chatbots/chatbots-page-2.vue';
export default {
    name: 'ChatbotsPageTwoView',
    components: {
        'chatbots-page-two': ChatbotsPageTwo
    }
}
</script>
