<template>
    <nav-bar />
    <div id="main" class="container-fluid page-container text-center big-wrapper">

        <div class="title">
            <h1>All Modules </h1>
        </div>

        <div class="subtitle">
            <h2>Large Language Models</h2>
        </div>

        <!-- LLM cards -->
        <div id="wrapper" class="d-flex flex-md-row flex-column">

            <router-link to="/chatbots" custom v-slot="{ navigate }">
                <button class="card" @click="navigate" role="link">
                    <img :src="require('@/assets/chatbots_Thumbnail.png')" alt="Human and robot face each other with speech bubbles, AI-generated image" style="width:100%;">
                    <div class="container">
                        <h4>The Age of Chatbots</h4>
                        <p>Chatbots are now everywhere. Find out how privacy battles bias, and learn how to protect yourself
                            from misinformation!</p>
                    </div>
                </button>
            </router-link>

            <button id="copilotCard" class="card" style="visibility: hidden;">
                <img :src="require('@/assets/copilot_Thumbnail.png')" alt="Smooth, glossy, abstract buttons with computer code written on them" style="width:100%">
                <div class="container">
                    <h4>Understanding Copilot</h4>
                    <p>Coming soon!</p>
                </div>
            </button>




        </div>

        <div class="subtitle">
            <h2>AI Generation</h2>
        </div>

        <!-- AI Generation cards -->
        <div id="wrapper" style="padding-bottom: 5%;" class="d-flex flex-md-row flex-column">

            <router-link to="/dalle" custom v-slot="{ navigate }">
                <button class="card" @click="navigate" role="link">
                    <img :src="require('@/assets/dalle_Thumbnail.png')" alt="Gruff moustachio'd man peers through grid of dots and binary digits, AI-generated image" style="width:100%;">
                    <div class="container">
                        <h4>The Rise of DALL·E</h4>
                        <p> Did you know that AI can create art? In this module you will learn the highs and lows of AI
                            image generation and will get to test your AI spotting skills!</p>
                    </div>
                </button>
            </router-link>

            <router-link to="/deepfakes" custom v-slot="{ navigate }">
                <button class="card" @click="navigate" role="link">
                    <img :src="require('@/assets/deepfakes_Thumbnail.png')" alt="Sound wave-form made from light, AI-generated image" style="width:100%">
                    <div class="container">
                        <h4>The Depths of Deepfakes</h4>
                        <p>Unmask the dangers of deepfakes and learn to spot digital deception.</p>
                    </div>
                </button>
            </router-link>
        </div>

    </div>
    <page-footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '../reusable/nav-bar.vue';
import PageFooter from '../reusable/page-footer.vue';

export default defineComponent({
    name: 'AllModulesPage',
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
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Poppins:wght@600&display=swap');

.title {
    padding-top: 8%;
    margin-left: 4%;
    margin-right: 4%;
}

h1 {
    font-family: "Open Sans", sans-serif;
    font-weight: 700;
    font-size: 36px;
}

.subtitle {
    padding-top: 3%;
    margin-left: 4%;
    margin-right: 4%;
    text-align: left;

}

h2 {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 24px;
    margin-left: 4%;

    /* more padding for 2 card layout */
    padding-left: 7%;
    padding-right: 7%;

}

#wrapper {
    display: flex;
    flex-wrap: wrap;
    /* Wrap elements so they flow below each other */
    overflow: hidden;
    flex-direction: row;
    float: center;
    padding: 1%;
    margin-left: 4%;
    margin-right: 4%;

    /* more padding for 2 card layout */
    padding-left: 7%;
    padding-right: 7%;
}

.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    border-radius: 5px;
    /* 5px rounded corners */
    display: flexbox;
    flex: 1;
    flex-direction: column;
    justify-content: top;
    text-align: center;
    padding: 2%;
    float: left;
    margin: 3%;

}


.card:hover {
    background-color: #E5D1FF;

}

h4 {
    font-family: "Open Sans", sans-serif;
    font-weight: 700;
    font-size: 20px;
    padding-top: 1%;
    padding-bottom: 1%;
}

p {
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    font-size: 16px;
}

/* Add rounded corners to the top left and the top right corner of the image */
img {
    border-radius: 5px 5px 0 0;
    padding-bottom: 5%;
}

[role="link"]:hover {
    cursor: pointer;
}


@media (max-width: 767.98px) {
    #copilotCard {
        display: none;
    }
}
</style>
