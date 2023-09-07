<template>
    <nav-bar/>
    <div class="container-fluid page-container text-center">
        <div class="row h-10 mb-5">
            <div class="col-md-12">
                <h1 class="mt-5">The Age of Chatbots</h1>
            </div>
        </div>
        <div class="row h-30 mb-5">
            <div class="col-md-8 d-flex align-items-center">
                <div class="d-flex justify-content-center flex-wrap">
                        <p class="text-left section-text">
                        At their humble beginning, chatbots were primitive computer programs that mimicked human intelligence by answering questions with scripted responses. In 1966, ELIZA was created. ELIZA repeated words and phrases the user had typed, by inserting them into a list of pre-written phrases. At the time, some users of that rudimentary system were convinced they were conversing with a fellow human.
                    </p>

                    <p class="section-text">
                    In 2011, Apple released the revolutionary voice assistant, Siri, with more advanced capabilities than any chatbot predecessors offering. Since then, the popularity of chatbots has drastically surged due to their convenience and flexibility (Ina, 2023). Nowadays, people use chatbots to provide customer service, assist  in various tasks, practice language skills, and more.
                    </p>
                </div>
                
                
            </div>
            <div class="col-md-4 d-flex align-items-center">
                <img class="img-a" src="../../../assets//chatbots_page_1_a.jpeg" alt="2d illustration of chatbots"/>
            </div>
        </div>
         <div class="row h-30 mb-3">
            <div class="col-md-4 d-flex justify-content-end">
                <important-terms-card :terms-and-definitions="termsAndDefinitions"></important-terms-card>
            </div>
            <div class="col-md-8 d-flex align-items-center">
                <div class="d-flex justify-content-center flex-wrap">
                    <p class="section-text">
                        The latest development of chatbots is large language models or LLMs. LLMs can perform a range of text-based tasks, like summarising, translating, and generate content, using information gained from large training datasets of text downloaded from all over the internet. You've probably heard of ChatGPT, an LLM-based chatbot that can have a human-like dialogue with a user.
                    </p>
                     <p class="section-text">
                        Since LLMs arrived on the scene, chatbots such as ChatGPT and Google Bard have taken the world by storm. These chatbots seem to know everything and are conveniently accessible to anyone with an internet connection. Thanks to this, ChatGPT is now heavily used to answer questions, to assist in writing, to create written content, and more.
                    </p>
                </div>  
            </div>
           
        </div>
         <div class="row h-20">
            <div class="col-md-12 d-flex justify-content-end">
                <purple-btn :text="'Continue'"></purple-btn>
            </div>
        </div>
    </div>
    <page-footer/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '../../reusable/nav-bar.vue';
import PageFooter from '../../reusable/page-footer.vue';
import ImportantTermsCard from '../../reusable/important-terms-card.vue';
import PurpleBtn from '../../reusable-ui/purple-btn.vue';

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
        'important-terms-card': ImportantTermsCard,
        'purple-btn': PurpleBtn
    }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');

.container-fluid.page-container {
    height: 150vh;
    margin-top: 60px;
}

.img-a {
    width: 75%;
    height: 75%;
}

.section-text {
    width: 60%;
    text-align: left;
}
</style>