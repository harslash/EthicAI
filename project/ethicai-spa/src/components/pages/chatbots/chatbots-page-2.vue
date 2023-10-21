<template>
    <nav-bar />
    <module-navigation-bar :moduleName="'chatbots'" />
    <div id="main" class="container-fluid page-container text-center">
        <div class="container mb-5 text-section" :class="{ 'hidden': !showFirstSection }">
            <div class="row h-10 mb-5">
                <div class="col-md-12">
                    <h1 class="tw-mt-24">Too Good To Be True?</h1>
                </div>
            </div>
            <div class="row h-30 mb-5">
                <div class="col-md-12 pb-5">
                    <div class="d-flex justify-content-center flex-wrap">
                        <p class="section-text">
                            While the capabilities of new AI chatbots like ChatGPT are undeniably impressive, it's essential
                            for users like you to grasp how they work and their potential drawbacks.
                        </p>
                        <p class="section-text">
                            The current frontrunner in the world of chatbots, ChatGPT, operates by striving to comprehend
                            your prompt and generating responses it predicts to be the most fitting, based on the vast
                            dataset used for its training
                            <span class="reference-link" @click="handleReferenceClick('tooGoodToBeTrue')">(Guinness, 2023)
                            </span>.
                        </p>
                    </div>
                </div>
                <div class="col-md-12">
                    <img class="img-a" src="../../../assets//chatbots_page_2_a.jpeg"
                        alt="2d illustration of a robot pulling messages from a box, AI generated image" />
                </div>
            </div>
            <div class="row h-20">
                <div class="col-md-12 d-flex justify-content-end">
                    <purple-btn :tag="'button'" v-if="!section1Completed" :text="'Continue'"
                        @click="showSecondSection = true; scrollIntoSection('secondSection'); section1Completed = true;" />
                </div>
            </div>
        </div>
        <div ref="secondSection" class="container mb-5 text-section" :class="{ 'hidden': !showSecondSection }">
            <div class="row h-30 mb-5">
                <div class="col-md-12 pb-5">
                    <div class="d-flex justify-content-center flex-wrap">
                        <p class="section-text">
                            The minds behind ChatGPT have honed this model by exposing it to an extensive repository of
                            textual data, exceeding a staggering 570 GB
                            <span class="reference-link" @click="handleReferenceClick('tooGoodToBeTrue')">(Ruby, 2023)
                            </span>. To put it in perspective, that's equivalent to more than 1.3 million novels' worth of
                            information
                            <span class="reference-link" @click="handleReferenceClick('tooGoodToBeTrue')">(Gupta, 2023)
                            </span>! This data amalgamation includes a myriad of sources like books, articles, and web
                            pages.
                        </p>
                        <p class="section-text">
                            If you've been navigating the online realm for some time, you might already suspect that some of
                            these data sources can harbor biases, stereotypes, and prejudiced language. It's an unintended
                            consequence that ChatGPT and similar Language Models (LLMs) may inherit these biases,
                            potentially leading to offensive responses or the reinforcement of harmful stereotypes in their
                            replies. This phenomenon arises from the training data, and it's a critical aspect to be aware
                            of when utilizing ChatGPT and similar LLMs
                            <span class="reference-link" @click="handleReferenceClick('tooGoodToBeTrue')">(Ray, 2023)
                            </span>.
                        </p>
                    </div>
                </div>
                <div class="col-md-12">
                    <img class="img-b" src="../../../assets//chatbots_page_2_b.jpeg"
                        alt="two baby robots sit on the ground, and share a speech bubble, AI generated image" />
                </div>
            </div>
            <div class="row h-20">
                <div class="col-md-12 d-flex justify-content-end">
                    <purple-btn :tag="'button'" v-if="section1Completed && !section2Completed" :text="'Continue'"
                        @click="showThirdSection = true; scrollIntoSection('thirdSection'); section2Completed = true;" />
                </div>
            </div>
        </div>
        <div ref="thirdSection" class="section-three container mb-5 text-section" :class="{ 'hidden': !showThirdSection }">
            <div class="row">
                <div class="col-md-12">
                    <div class="d-flex justify-content-center">
                        <p class="section-text">
                            Here's a glimpse into ChatGPT's inner workings. ChatGPT undergoes comprehensive training by
                            drawing data
                            from diverse sources on the internet, including Wikipedia, books, news articles, and scientific
                            journals.
                            After this immersive learning process, ChatGPT is primed for interaction. As showcased in our
                            flowchart, you
                            initiate interaction by sending ChatGPT a prompt or question. ChatGPT, armed with the knowledge
                            it has
                            acquired during training, then crafts a tailored response, promptly delivering it back to you,
                            the user.
                        </p>
                    </div>
                </div>
                <div class="col-md-12">
                    <img src="../../../assets//chatbots_page_2_c.png" class="img-c"
                        alt="flowchart diagram, training data and user prompt (asking 'what does it look like') go to ChatGPT, which reads conversational context of a cat. ChatGPT looks at most likely words ('claws, tail, fur') and unlikely words ('wings, beak, tall'). Then ChatGPT gives user a sentence about a typical cat having claws and a long tail" />
                </div>
            </div>
            <div class="row h-20">
                <div class="col-md-12 d-flex justify-content-end">
                    <purple-btn :tag="'button'" v-if="section2Completed && !section3Completed" :text="'Continue'"
                        @click="showFourthSection = true; scrollIntoSection('fourthSection'); section3Completed = true;" />
                </div>
            </div>
        </div>
        <div ref="fourthSection" class="section-four container mb-5 text-section" :class="{ 'hidden': !showFourthSection }">
            <div class="row">
                <div class="col-md-12">
                    <div class="d-flex justify-content-center">
                        <p class="section-text">
                            Markov chains, akin to ChatGPT, rely on statistical probabilities. Picture a Markov Chain
                            consulting a corpus to calculate these probabilities, similar to how ChatGPT uses its training
                            data. However, there are differences. Unlike ChatGPT, Markov chains operate without considering
                            context as they lack conversation history. Their word predictions are solely based on preceding
                            words, determined by probabilities. As you can see, Markov Chain doesn't rely on a traditional
                            prompt. Instead, we initiate it with a starting word. In this case, the word is "How," prompting
                            the system to generate a response. This text-generation process is similar to the
                            auto-completion feature we use to type words in a Google search bar.
                        </p>
                    </div>
                </div>
                <div class="col-md-12">
                    <img src="../../../assets//chatbots_page_2_d.png" class="img-d"
                        alt="flowchart diagram, Markov chain takes input from user and corpus. User sends a sentence word by word, and Markov chain calculates probabilities for the next word in the sequence" />
                </div>
            </div>
            <div class="row h-20">
                <div class="col-md-12 d-flex justify-content-end">
                    <purple-btn :tag="'button'" v-if="section3Completed && !section4Completed" :text="'Continue'"
                        @click="showFifthSection = true; scrollIntoSection('fifthSection'); section4Completed = true;" />
                </div>
            </div>
        </div>
        <div ref="fifthSection" class="container text-section pb-5" :class="{ 'hidden': !showFifthSection }">
            <div class="row h-30 pb-5">
                <div class="col-md-12 pb-5">
                    <div class="d-flex align-items-center flex-column">
                        <h5>Exploring Potential Biases in ChatGPT</h5>
                        <p class="section-text">Welcome to our Bias Exploration feature. Here's how you can engage with our
                            Markov chain powered demo:</p>
                        <p class="section-text px-3">• <b>Train Model:</b> Click "Train Model" to observe the Markov Chain
                            learning word probabilities from the corpus, mirroring ChatGPT's training process. The generated
                            output will resemble ChatGPT's responses, with highlighted biased phrases reflecting ChatGPT's
                            learned biases from the internet.</p>
                        <p class="section-text px-3">• <b>Experimentation:</b> You have the freedom to experiment by:</p>

                        <p class="section-text px-5">
                            • Adjusting biases: See how biases can look different for the same corpus if we use another type
                            of biased training.
                        </p>
                        <p class="section-text px-5">
                            • Changing the Corpus: Alter the corpus to observe various biases that might exist in ChatGPT's
                            training data.
                        </p>
                        <p class="section-text">Dive in and discover the intricacies of LLM biases, such as ChatGPT's biases.</p>
                    </div>
                </div>
                <div class="col-md-2"></div>
                <div class="col-md-8 d-flex justify-content-center pb-5">
                    <markov-demo class="demo"></markov-demo>
                </div>
                <div class="col-md-2"></div>
            </div>
            <div class="row h-20 pb-5">
                <div class="col-md-12 d-flex justify-content-end">
                    <router-link to="/chatbots/hallucination">
                        <purple-btn :text="'Next Page'" @click="handlePageCompletionClick()" />
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
import MarkovDemo from '../../interactive/markov-demo.vue';

export default defineComponent({
    name: 'ChatbotsPage2',
    data() {
        return {
            showFirstSection: true,
            showSecondSection: false,
            showThirdSection: false,
            showFourthSection: false,
            showFifthSection: false,
            section1Completed: false,
            section2Completed: false,
            section3Completed: false,
            section4Completed: false
        }
    },
    methods: {
        scrollIntoSection(sectionName: string) {
            this.$nextTick(() => {
                const element = this.$refs[sectionName] as HTMLElement;
                if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
                }
            });
        },
        // eslint-disable-next-line 
        handlePageCompletionClick(this: any) {
            this.$registerPageAsCompleted('chatbots', 'too-good-to-be-true');
        },
        handleReferenceClick(referenceSectionId: string) {
            const hash = `#${referenceSectionId}`;
            this.$router.push({ name: "references", hash });
        },
    },
    components: {
        'nav-bar': NavBar,
        'module-navigation-bar': ModuleNavigationBar,
        'purple-btn': PurpleBtn,
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

.img-a,
.img-b {
    width: 30%;
}

.img-c,
.img-d {
    width: 50%;
}

.text-section {
    opacity: 1;
    max-height: 1000px;
    transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
}

.hidden {
  display: none;
    opacity: 0;
    max-height: 0;
    overflow: hidden;
}

/* .demo {
    height: 75vh;
    width: 80%;
} */

@media (max-width: 767.98px) {
    .section-text {
        width: 90%;
    }

    .img-a,
    .img-b {
        width: 80%;
    }

    .img-c,
    .img-d {
        width: 100%;
    }
}
</style>
