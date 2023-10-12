<template>
    <nav-bar />
    <module-navigation-bar :moduleName="'chatbots'" />
    <div class="container-fluid page-container text-center">
        <div class="container mb-5 text-section" :class="{ 'hidden': !showFirstSection }">
            <div class="row h-10 mb-5">
                <div class="col-md-12">
                    <h1 class="tw-mt-24">Hallucination</h1>
                </div>
            </div>
            <div class="row h-30 mb-5">
                <div class="col-md-12 pb-5">
                    <div class="d-flex justify-content-center flex-wrap">
                        <p class="section-text">
                         You might wonder if AI can "hallucinate." Well, it can, but not in the way we typically associate with the term. ChatGPT, for instance, has a tendency to produce responses that sound confident and plausible, yet they are often blatantly incorrect or downright nonsensical. This phenomenon is known as "hallucination," and it's a significant drawback in publicly available Large Language Models (LLMs) like ChatGPT.
                        </p>
                    </div>
                </div>
                <div class="col-md-12">
                    <img class="img-a" src="../../../assets/chatbots_page_3_a.jpeg"
                        alt="2d illustration of a robot acting confused" />
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
                <div class="col-md-12 d-flex flex-wrap justify-content-center pb-5">
                    <p class="section-text">
                        OpenAI, the company behind ChatGPT, has been forthright in cautioning users about this peculiar behavior exhibited by the model. They acknowledge that addressing hallucination is a complex challenge that they are actively working to overcome  
                        <span class="reference-link" @click="handleReferenceClick('hallucination')">(Guinness, 2023)
                        </span>. Understanding these quirks is crucial for using ChatGPT effectively and responsibly.
                    </p>
                    <div class="section-text">
                        An example can be seen below:
                    </div>
                </div>
                <div class="col-md-12 d-flex justify-content-center pb-5">
                    <chatgpt-ui-card :questionText="questionText" :answerText="answerText"></chatgpt-ui-card>
                </div>
                <div class="col-md-12 d-flex flex-wrap justify-content-center pb-5">
                    <div class="section-text">
                      In reality, every month naturally contains four Tuesdays. However, ChatGPT, with its persuasive arguments, can potentially mislead trusting users into accepting inaccurate information. As a user of this chatbot, the responsibility lies with you to verify the accuracy of ChatGPT's responses. This diligence becomes particularly crucial when dealing with information in sensitive areas such as legal matters, medical advice, and industry compliance requirements. Blindly relying on ChatGPT's responses in these contexts could lead to significant real-world repercussions.
                    </div>
                </div>
                <div class="row h-20">
                    <div class="col-md-12 d-flex justify-content-end">
                        <purple-btn v-if="section1Completed && !section2Completed" :text="'Continue'"
                            @click="showThirdSection = true; scrollIntoThirdSection(); section2Completed = true;" />
                    </div>
                </div>
            </div>
        </div>
        <div ref="thirdSection" class="container mb-5 text-section" :class="{ 'hidden': !showThirdSection }">
            <div class="row h-30 mb-5">
                <div class="col-md-12 d-flex flex-wrap justify-content-center pb-5">
                    <div class="section-text">
                       <b>Telling apart hallucination and facts:</b>
                    </div>
                    <div class="section-text">
                        Picture yourself as a student, navigating uncharted territory and turning to ChatGPT for answers to your questions on unfamiliar subjects. As you explore generated responses, each paired with a typical student's prompt, challenge yourself to determine whether ChatGPT offers a legitimate answer.
                    </div>
                </div>
                <div class="col-md-12 pb-5">
                    <hallucination-demo @end-of-demo-event="handleEndOfDemoEvent"></hallucination-demo>
                </div>
            </div>
        </div>

        <div ref="lastSection" class="container text-section" :class="{ 'hidden': !showLastSection }">
            <div class="row">
                <div class="col-md-12 d-flex flex-wrap justify-content-center pb-5">
                    <div class="section-text">
                        <b>Lesson of the day:</b> Don’t ask ChatGPT to do your maths homework.
                    </div>
                </div>
                <div class="row h-20 pb-5">
                    <div class="col-md-12 d-flex justify-content-end">
                        <router-link to="/chatbots/misuses-and-plagiarism">
                            <purple-btn :text="'Continue'" @click="handlePageCompletionClick()" />
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '../../reusable/nav-bar.vue';
import ModuleNavigationBar from '../../reusable/module-navigation-bar.vue';
import PurpleBtn from '../../reusable-ui/purple-btn.vue';
import ChatGPTUICard from '../../reusable/chatgpt_ui.vue';
import HallucinationDemo from '../../interactive/hallucination-demo/hallucination-demo.vue';


export default defineComponent({
    name: 'ChatbotsPage3',
    data() {
        return {
            questionText: 'Are there any months that have less than four tuesdays?',
            answerText: "Yes, there are months that can have fewer than four Tuesdays. This occurs when a month starts on a Tuesday and is either 28 or 29 days long. Let's break down the possibilities:\n\nFebruary: In common years (non-leap years), February has 28 days. If February starts on a Tuesday, it will have only 3 Tuesdays.",
            showFirstSection: true,
            showSecondSection: false,
            showThirdSection: false,
            showLastSection: false,
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
        scrollIntoLastSection() {
            this.$nextTick(() => {
                const element = this.$refs.lastSection as HTMLElement;
                if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
                }
            });
        },
        handleEndOfDemoEvent() {
            this.showLastSection = true;
            this.scrollIntoLastSection();
        },
        handlePageCompletionClick(this: any) {
            this.$registerPageAsCompleted('chatbots', 'hallucination');
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
        'chatgpt-ui-card': ChatGPTUICard,
        'hallucination-demo': HallucinationDemo

    },
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
</style>
