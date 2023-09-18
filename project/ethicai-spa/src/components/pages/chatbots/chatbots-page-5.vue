<template>
    <nav-bar />
    <div class="container-fluid page-container">
        <div class="row h-100">
            <div class="col-md-12 d-flex align-items-center">
                <quiz-container category="chatbot"></quiz-container>
            </div>
        </div>
    </div>
    <page-footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '../../reusable/nav-bar.vue'
import PageFooter from '../../reusable/page-footer.vue';
import QuizContainer from '../../interactive/quiz/QuizContainer.vue';


export default defineComponent({
    name: 'QuizPage',
    components: {
        'nav-bar': NavBar,
        'page-footer': PageFooter,
        'quiz-container': QuizContainer
    }
});
</script>

<style scoped>
.container-fluid.page-container {
    height: 100vh;
    margin-top: 60px;
}
</style>