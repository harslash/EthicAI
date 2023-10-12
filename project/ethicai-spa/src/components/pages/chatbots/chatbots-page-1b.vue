<template>
    <nav-bar />
    <module-navigation-bar :moduleName="'chatbots'" />
    <div class="container-fluid page-container text-center">
        <div class="container mb-5 text-section" :class="{ 'hidden': !showFirstSection }">
            <div class="row h-10 mb-5">
                <div class="col-md-12">
                    <h1 class="tw-mt-24">ChatGPT 101</h1>
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
                        alt="2d illustration of a robot pulling messages from a box" />
                </div>
            </div>
            <div class="row h-20">
                <div class="col-md-12 d-flex justify-content-end">
                    <purple-btn v-if="!section1Completed" :text="'Continue'"
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
                        alt="2d illustration of a robot pulling messages from a box" />
                </div>
            </div>
            <div class="row h-20">
                <div class="col-md-12 d-flex justify-content-end">
                    <purple-btn v-if="section1Completed && !section2Completed" :text="'Continue'"
                        @click="showThirdSection = true; scrollIntoSection('thirdSection'); section2Completed = true;" />
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
                    console.log(element)
                    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
                }
            });
        },
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
        'purple-btn': PurpleBtn
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
        width: 60%;
    }

    .img-c,
    .img-d {
        width: 90%;
    }
}
</style>
