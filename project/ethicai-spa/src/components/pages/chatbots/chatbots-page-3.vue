<template>
    <nav-bar />
    <div class="container-fluid page-container text-center">
        <div class="row h-10 mb-5">
                    <div class="col-md-12">
                        <h1 class="mt-5">Hallucination</h1>
                    </div>
                </div>
        <div>
            <chatgpt_ui :questionText="questionText" :answerText="answerText" class="text"/>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '../../reusable/nav-bar.vue';
import chatgpt_ui from '../../reusable/chatgpt_ui.vue';

export default defineComponent({
    name: 'ChatbotsPage3',
    data() {
        return {
            questionText: 'Your question goes here',
            answerText: 'Your answer goes here',
        }
    },
    components: {
        'nav-bar': NavBar,
        'chatgpt_ui': chatgpt_ui,
    },
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');

.container-fluid.page-container {
    height: 105vh;
    margin-top: 60px;
}

.text {
    font-size: 14px; /* Adjust the size as needed */
}

</style>