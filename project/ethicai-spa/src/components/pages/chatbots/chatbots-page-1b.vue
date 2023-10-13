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
                            Welcome to the eye-opening world of ChatGPT and the common pitfalls that students sometimes stumble upon. It's no secret that ChatGPT is a powerful tool, often tempting students to lean on it for assistance with their assignments. While it can be a handy companion, it's essential to tread carefully, as ChatGPT comes with two notable limitations that can lead you astray.
                        </p>
                        <p class="section-text">
                           First, ChatGPT's knowledge is rooted in the vast sea of text it was trained on, and just like any ocean, it carries its own currents. This means it can unintentionally perpetuate biases and misconceptions found in its training data. Trusting it blindly might lead you down a path of misinformation.
                        </p>
                    </div>
                </div>
                <div class="col-md-12">
                    <img class="img-a" src="../../../assets/chatbots_page_1b_a.jpeg"
                        alt="2d illustration of a robot sleeping om a pile of books" />
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
                          Second, ChatGPT is known to exhibit a phenomenon called "hallucination." In simple terms, it can sometimes generate content that sounds convincing but isn't entirely accurate. Relying on it too heavily might have your assignments drifting into the realm of fiction rather than fact.
                        </p>
                    </div>
                </div>
                <div class="col-md-12 pb-5">
                    <img class="img-b" src="../../../assets/chatbots_page_1b_b.jpeg"
                        alt="2d illustration of a robot hallucinating"/>
                </div>
                <div class="col-md-12">
                    <div class="d-flex justify-content-center flex-wrap">
                        <p class="section-text">
                            But don't worry, we're here to guide you through these potential pitfalls and help you harness ChatGPT's incredible capabilities effectively. In the next section, we'll dive deeper into these limitations so you can better understand how to navigate the ChatGPT landscape and make the most out of this powerful tool without falling into these common traps.
                        </p>
                    </div>
                </div>
            </div>
            <div class="row h-20 pb-5">
                <div class="col-md-12 d-flex justify-content-end">
                    <router-link to="/chatbots/too-good-to-be-true">
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

export default defineComponent({
    name: 'ChatbotsPage2',
    data() {
        return {
            showFirstSection: true,
            showSecondSection: false,
            section1Completed: false,
            section2Completed: false,
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
    display: none;
    opacity: 0;
    max-height: 0;
    overflow: hidden;
}

@media (max-width: 767.98px) {
    .section-text {
        width: 90%;
    }

    .img-a,
    .img-b {
        width: 80%;
    }
}
</style>
