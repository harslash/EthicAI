<template>
    <nav-bar/>
    <div class="container-fluid page-container text-center">
        <div class="row h-25">
            <h1>The Age of Chatbots</h1>
        </div>
         <div class="row h-25">
            <div class="col-md-4">
                <important-terms-card :terms-and-definitions="termsAndDefinitions"></important-terms-card>
            </div>
            <div class="col-md-8"></div>
        </div>
    </div>
    <page-footer/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '../../reusable/nav-bar.vue';
import PageFooter from '../../reusable/page-footer.vue';
import ImportantTermsCard from '../../reusable/important-terms-card.vue';

export default defineComponent({
    name: 'ChatbotsPage1',
    data() {
        return {
            termsAndDefinitions: 
            [
                {
                    term: 'GPT',
                    definition: 'Stands for Generative Pre-trained Transformer. It is a family of neural network models that uses the transformer architecture. It powers recent generative AI applications such as ChatGPT (AWS, 2023).'

                },
                {
                    term: 'LLM',
                    definition: 'Stands for Large Language Model. LLMs are deep learning algorithms trained on a very large dataset that can recognise, summarise, translate, predict and generate text (NVIDIA, 2023).'

                },
                {
                    term: 'Chatbot',
                    definition: 'A computer program that simulates human conversation, allowing humans to interact with digital devices as if they were communicating with a real person (Oracle, 2023).'

                },
                {
                    term: 'Markov Chain',
                    definition: 'A mathematical system that experiences transitions from one state to another according to certain probabilistic rules. (Brilliant, n.d.).'
                },
                {
                    term: 'Prompts',
                    definition: 'ChatGPT prompts are the textual inputs (e.g., questions, instructions) a user enters into ChatGPT to get responses (Scribbr, 2023).'
                }
            ]
        }
    },
    methods: {

    },
    components: {
        'nav-bar': NavBar,
        'page-footer': PageFooter,
        'important-terms-card': ImportantTermsCard
    }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');

.container-fluid.page-container {
    height: 105vh;
    margin-top: 60px;
}
</style>