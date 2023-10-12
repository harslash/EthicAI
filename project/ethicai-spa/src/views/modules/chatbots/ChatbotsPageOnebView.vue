<template>
    <div class="chatbots-page-two-view">
        <chatbots-page-one-b></chatbots-page-one-b>
    </div>
</template>

<script lang="ts">
import ChatbotsPageOneb from '../../../components/pages/chatbots/chatbots-page-1b.vue';
export default {
    name: 'ChatbotsPageTwoView',
    components: {
        'chatbots-page-one-b': ChatbotsPageOneb
    }
}
</script>
