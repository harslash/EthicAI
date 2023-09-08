<template>
    <div class="chatbots-page-two-view">
        <chatbots-page-three></chatbots-page-three>
    </div>
</template>

<script lang="ts">
import ChatbotsPageThree from '../../../components/pages/chatbots/chatbots-page-3.vue';
export default {
    name: 'ChatbotsPageTwoView',
    components: {
        'chatbots-page-three': ChatbotsPageThree
    }
}
</script>
