<template>
    <nav-bar />
    <div class="container-fluid page-container text-center">
        <div class="row h-25">
            <h1 class="main-heading"><u> References </u> </h1>
        </div>
        <div class="row">
            <div class="col-md-12">
                <h2 class="section-heading">The Age of Chatbots Module</h2> <!-- Second Header -->
            </div>
        </div>
        <div class="row">
            <!-- Add empty headers labeled "text" above each rectangle -->
            <div class="col-md-12">
                <h3 class="sub-heading">The Age of Chatbots</h3>
            </div>
            <div class="col-md-12">
                <div class="gray-rectangle">
                    <p>
                        AWS. (2023). What is GPT? Retrieved August 30, 2023, from
                        <a href="https://aws.amazon.com/what-is/gpt/" target="_blank">https://aws.amazon.com/what-is/gpt/</a>
                    </p>
                    <p>
                        Brilliant. (n.d.). Markov Chains | Brilliant Math & Science Wiki. Retrieved August 30, 2023, from
                        <a href="https://brilliant.org/wiki/markov-chains/" target="_blank">https://brilliant.org/wiki/markov-chains/</a>
                    </p>
                    <p>
                        Ina. (2023). The History Of Chatbots – From ELIZA to ChatGPT. AI-chatbot Software for Complex Requirements.
                        <a href="https://onlim.com/en/the-history-of-chatbots/" target="_blank">https://onlim.com/en/the-history-of-chatbots/</a>
                    </p>
                    <p>
                        NVIDIA. (2023). What are Large Language Models? Retrieved August 30, 2023, from
                        <a href="https://www.nvidia.com/en-us/glossary/data-science/large-language-models/" target="_blank">https://www.nvidia.com/en-us/glossary/data-science/large-language-models/</a>
                    </p>
                    <p>
                        Oracle. (2023). What is a Chatbot? Retrieved August 30, 2023, from
                        <a href="https://www.oracle.com/nz/chatbots/what-is-a-chatbot/" target="_blank">https://www.oracle.com/nz/chatbots/what-is-a-chatbot/</a>
                    </p>
                    <p>
                        Scribbr. (2023, July 10). What are ChatGPT prompts? Retrieved August 30, 2023, from
                        <a href="https://www.scribbr.com/frequently-asked-questions/what-are-chatgpt-prompts/" target="_blank">https://www.scribbr.com/frequently-asked-questions/what-are-chatgpt-prompts/</a>
                    </p>
                </div>
            </div>
            <div class="col-md-12">
                <h3 class="sub-heading">Too Good to be True?</h3>
            </div>
            <div class="col-md-12">
                <div class="gray-rectangle"></div>
            </div>
            <div class="col-md-12">
                <h3 class="sub-heading">Hallucination</h3>
            </div>
            <div class="col-md-12">
                <div class="gray-rectangle"></div>
            </div>
            <div class="col-md-12">
                <h3 class="sub-heading">Misuses and Plagiarism</h3>
            </div>
            <div class="col-md-12">
                <div class="gray-rectangle"></div>
            </div>
            
            <div class="col-md-12">
                <h2 class="section-heading">Rise of Dalle Module</h2> <!-- Second Header -->
            </div>
            <div class="col-md-12">
                <h3 class="sub-heading">The Rise of DALL·E</h3>
            </div>
            <div class="col-md-12">
                <div class="gray-rectangle"></div>
            </div>
            <div class="col-md-12">
                <h3 class="sub-heading">AI Generated vs Human Art</h3>
            </div>
            <div class="col-md-12">
                <div class="gray-rectangle"></div>
            </div>
            <div class="col-md-12">
                <h3 class="sub-heading">Copyright and Copywrong</h3>
            </div>
            <div class="col-md-12">
                <div class="gray-rectangle"></div>
            </div>
        </div>
    </div>
    <page-footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '../reusable/nav-bar.vue';
import PageFooter from '../reusable/page-footer.vue';

export default defineComponent({
    name: 'ReferencesPage',
    data() {
        return {

        }
    },
    methods: {

    },
    components: {
        'nav-bar': NavBar,
        'page-footer': PageFooter
    }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');
.container-fluid.page-container {
    min-height: calc(100vh - 60px); /* Set the minimum height to avoid going into the footer */
    margin-top: 60px;
    padding-bottom: 20px; /* Add some padding at the bottom for spacing */
    padding-top: 40px;
    margin-left: 20px;
    margin-right: 20px;
}

.main-heading {
    font-size: 30px;
    font-weight: bold;
}

.section-heading {
    text-align: left;
    text-decoration: underline;
    color: #6D0CFF;
    font-size: 20px;
    margin: 20px 0;
}

.sub-heading {
    text-align: left;
    font-size: 20px;
    margin: 10px 0;
}

.gray-rectangle {
    background-color: #ccc; /* Gray color for the rectangle */
    padding: 20px; /* Add padding to the rectangle */
    margin: 20px 0; /* Add vertical margin for spacing between rectangles */
}

.gray-rectangle p {
    margin: 5px 0; /* Add margin to paragraphs within the rectangle */
    text-align: left;
    font-size: 15px;
}
</style>