<template>
    <nav-bar />
    <module-navigation-bar :moduleName="'chatbots'" />
    <div id="main" class="container-fluid page-container text-center">
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
                          Now that you have gained some understanding of ChatGPT and interacted with an LLM, you're beginning to grasp the capabilities of LLMs. It's no secret that ChatGPT is a powerful tool. Many students rely on it for assignment assistance. According to a recent survey of 1,000 U.S. college students, almost a third had utilized ChatGPT to complete written homework assignments, with nearly 60% using it for more than half of their assignments. While ChatGPT can be helpful, it's crucial to recognize two significant limitations:

                        </p>
                        <p class="section-text">
                            Firstly, ChatGPT builds its knowledge from a vast dataset sourced from the internet. However, this data can often contain harmful biases and stereotypes. Consequently, ChatGPT might inadvertently perpetuate these biases to its users. Unquestioningly trusting ChatGPT can lead to misinformation and reinforce dangerous misconceptions.
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
                        Secondly, ChatGPT often exhibits a phenomenon known as "hallucination." In simple terms, it confidently generates responses that sound convincing but can lack factual accuracy. Unaware of this trait, students might be impressed by ChatGPT's apparent omniscience. However, their submitted work could inadvertently stray into fiction rather than fact.

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
                          In the upcoming sections, we'll delve deeper into these limitations through interactive demos, fostering a sense of awareness and cautiousness in students like yourself to use ChatGPT effectively. We will also explore practical strategies to overcome the ChatGPT's shortcomings.
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
