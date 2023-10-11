<template>
    <nav-bar />
    <module-navigation-bar :moduleName="'chatbots'"/>
    <div class="container-fluid page-container text-center">
        <div class="container mb-5 text-section" :class="{ 'hidden': !showFirstSection }">
            <div class="row h-10 mb-5">
                <div class="col-md-12">
                    <h1 class="mt-5">Too Good to be True?</h1>
                </div>
            </div>
            <div class="row h-30 mb-5">
                <div class="col-md-12 pb-5">
                    <div class="d-flex justify-content-center flex-wrap">
                        <p class="section-text">
                            These new AI chatbots may be impressive, but their use can lead to many problems. The users like
                            yourself need to understand how they function and their implications.
                        </p>
                        <p class="section-text">
                            The current most popular chatbot, ChatGPT, works by attempting to understand your prompt and
                            spitting out strings of words that it predicts will be the best response based on the data used
                            to train it (<router-link :to="{ name: 'references' }">Guinness, 2023</router-link>).
                        </p>
                    </div>
                </div>
                <div class="col-md-12">
                    <img class="img-a" src="../../../assets//chatbots_page_2_a.jpeg"
                        alt="2d illustration of a robot pulling messages from a box" />
                </div>
            </div>
            <div class="row h-20">
                <div class="col-md-12 d-flex justify-content-end">
                    <purple-btn v-if="!section1Completed" :text="'Continue'"
                        @click="showSecondSection = true; scrollIntoSecondSection(); section1Completed = true;" />
                </div>
            </div>
        </div>
        <div ref="secondSection" class="container mb-5 text-section" :class="{ 'hidden': !showSecondSection }">
            <div class="row h-30 mb-5">
                <div class="col-md-12 pb-5">
                    <div class="d-flex justify-content-center flex-wrap">
                        <p class="section-text">
                            The creators of ChatGPT have trained the model on an extensive collection of textual data
                            containing over 570 GB of data (<router-link :to="{ name: 'references' }">Ruby,
                                2023</router-link>). That's over 1.3 million novels worth of information! The source of this
                            data includes books, articles, and web pages.
                        </p>
                        <p class="section-text">
                            If you’ve been on the internet for very long, you might expect some of those sources of data to
                            contain biases, stereotypes, and prejudiced language. ChatGPT unintentionally learns these
                            biases and may produce offensive responses or reinforce harmful stereotypes when it replies to
                            prompts. The training data used to create ChatGPT and other LLMs, can at times result in biassed
                            or inappropriate responses (<router-link :to="{ name: 'references' }">Ray, 2023</router-link>).
                        </p>
                    </div>
                </div>
                <div class="col-md-12">
                    <img class="img-a" src="../../../assets//chatbots_page_2_b.jpeg"
                        alt="2d illustration of a robot pulling messages from a box" />
                </div>
            </div>
            <div class="row h-20">
                <div class="col-md-12 d-flex justify-content-end">
                    <purple-btn v-if="section1Completed && !section2Completed" :text="'Continue'"
                        @click="showThirdSection = true; scrollIntoThirdSection(); section2Completed = true;" />
                </div>
            </div>
        </div>
        <div ref="thirdSection" class="container text-section pb-5" :class="{ 'hidden': !showThirdSection }">
            <div class="row h-30 pb-5">
                <div class="col-md-12 pb-5">
                    <div class="d-flex justify-content-center flex-wrap">
                        <p class="section-text">
                            Let's see how biases in a text can influence how language models response. The demo below allows
                            you to train a ‘Markov chain’ model on some training data, then see the kind of output it
                            produces. Just like ChatGPT, Markov chains can generate sentences. They both learn statistical
                            relationships between words from their training data, then they can complete sentences by
                            predicting the most likely next word in the text. However, Markov chains are much simpler than
                            the system behind ChatGPT, and you’ll see a direct correspondence between the training corpus
                            and what the Markov chain generates.
                        </p>
                        <p class="section-text">
                            Pay attention to the red highlighting: it shows biassed phrases that can be carried through into
                            the output of the model. This is similar to what goes on when ChatGPT repeats biassed ideas it
                            learnt from the internet.
                        </p>
                        <p class="section-text">
                            Experiment for yourself, by training the Markov chain model on each corpus of training data, and
                            consider the relationship between biases in the input and output.
                        </p>
                    </div>
                </div>
                <div class="col-md-12 d-flex justify-content-center pb-5">
                    <markov-demo class="demo"></markov-demo>
                </div>
                <div class="col-md-12 d-flex justify-content-center flex-wrap">
                    <p class="section-text">
                        As you can see from the demo, biases in ChatGPT's training data can cause it to produce harmful
                        responses. Some are obvious, such as overt racial prejudices, and some are less visible, such as
                        morality biases (<router-link :to="{ name: 'references' }">Cousins, 2023</router-link>).
                    </p>
                    <p class="section-text">
                        <b>Lesson of the day: </b>ChatGPT would be a lousy lawmaker.
                    </p>
                </div>
            </div>
            <div class="row h-20 pb-5">
                <div class="col-md-12 d-flex justify-content-between">
                    <router-link to="/chatbots/the-age-of-chatbots">
                        <purple-btn-outline :text="'Back'"></purple-btn-outline>
                    </router-link>
                    <router-link to="/chatbots/hallucination">
                        <purple-btn :text="'Continue'" @click="handlePageCompletionClick()" />
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    <page-footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '../../reusable/nav-bar.vue';
import ModuleNavigationBar from '../../reusable/module-navigation-bar.vue';
import PurpleBtn from '../../reusable-ui/purple-btn.vue';
import PurpleBtnOutline from '../../reusable-ui/purple-btn-outline.vue';
import MarkovDemo from '../../interactive/markov-demo.vue';

export default defineComponent({
    name: 'ChatbotsPage2',
    data() {
        return {
            showFirstSection: true,
            showSecondSection: false,
            showThirdSection: false,
            section1Completed: false,
            section2Completed: false,
            section3Completed: false,
        }
    },
    methods: {
        scrollIntoSecondSection() {
            this.$nextTick(() => {
                const element = this.$refs.secondSection as HTMLElement;
                if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
                }
            });
        },
        scrollIntoThirdSection() {
            this.$nextTick(() => {
                const element = this.$refs.thirdSection as HTMLElement;
                if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
                }
            });
        },
        handlePageCompletionClick(this: any) {
            this.$registerPageAsCompleted('chatbots', 'too-good-to-be-true');
        },
    },
    components: {
        'nav-bar': NavBar,
        'module-navigation-bar': ModuleNavigationBar,
        'purple-btn': PurpleBtn,
        'purple-btn-outline': PurpleBtnOutline,
        'markov-demo': MarkovDemo
    }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');

.container-fluid.page-container {
    margin-top: 60px;
}

.section-text {
    width: 60%;
    text-align: left;
}

.img-a {
    width: 30%;
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

.demo {
    height: 75vh;
    width: 80%;
}
</style>
