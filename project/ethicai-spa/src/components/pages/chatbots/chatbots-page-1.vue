<template>
    <nav-bar/>
    <div class="container-fluid page-container text-center">
        <div class="section-one container mb-5 text-section" :class="{ 'hidden': !showFirstSection}">
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
            <div class="row h-30 mb-">
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
                    <purple-btn :text="'Continue'" @click="showSecondSection = true"></purple-btn>
                </div>
            </div>
        </div>
        <div class="section-two container mb-5 text-section" :class="{ 'hidden': !showSecondSection }">
            <div class="row h-30">
                <div class="col-md-12">
                    <h5>Have a go for yourself!</h5>
                </div>
                <div class="col-md-3"></div>
                <div class="col-md-6">            
                    <chatgpt-prompt-form class="form"></chatgpt-prompt-form>
                </div>
                 <div class="col-md-2"></div>
            </div>
             <div class="row h-20">
                <div class="col-md-12 d-flex justify-content-end">
                    <purple-btn :text="'Continue'" 
                    @click="showThirdSection = true" >
                    </purple-btn>
                </div>
            </div>
        </div>
        <div class="section-three container text-section" :class="{ 'hidden': !showThirdSection }" >
            <div class="row h-20 mb-3">
                <div class="col-md-12 pb-5">
                    <h5 class="pb-4">Is this your first time using ChatGPT?</h5>
                    <div class="radio-div d-flex justify-content-around">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                            <label class="form-check-label" for="flexRadioDefault1">
                                Yes
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                            <label class="form-check-label" for="flexRadioDefault2">
                                No
                            </label>
                        </div>
                    </div>
                </div>
                 <div class="col-md-12">
                    <h5 class="pb-5">What is your trust level in ChatGPT?</h5>
                    <div class="d-flex justify-content-center">
                        <div class="slider-container">
                            <prime-slider v-model="value" class="w-14rem" />
                        </div>
                    </div>
                   
                </div>
            </div>
            <div class="row h-20">
                <div class="col-md-12 d-flex justify-content-end">
                    <purple-btn :text="'Continue'"></purple-btn>
                </div>
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
import ChatgptPromptForm from '../../reusable/chatgpt-prompt-form.vue'

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
            ],
            value: null,
            showFirstSection: true,
            showSecondSection: false,
            showThirdSection: false
        }
    },
    methods: {

    },
    components: {
        'nav-bar': NavBar,
        'page-footer': PageFooter,
        'important-terms-card': ImportantTermsCard,
        'purple-btn': PurpleBtn,
        'chatgpt-prompt-form': ChatgptPromptForm
    }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');

.container-fluid.page-container {
    height: 180vh;
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

.form {
    height: 30vh;
}

.slider-container{
    width: 50%;
}

.slider-container :deep(.p-slider-range) {
    background: #454545;
}

.slider-container :deep(.p-slider-handle) {
    background: #696969;
    border: 2px solid #696969;
}

.radio-div .form-check-input:checked {
    background-color: #696969;
    border-color: #696969;
}

.text-section {
  opacity: 1;
  max-height: 1000px;
  transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
}

.hidden {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
}

</style>