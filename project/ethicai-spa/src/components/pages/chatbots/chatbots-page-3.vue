<template>
    <nav-bar />
    <div class="container-fluid page-container text-center">
       <div class="container mb-5 text-section" :class="{ 'hidden': !showFirstSection }">
                    <div class="row h-10 mb-5">
                        <div class="col-md-12">
                            <h1 class="mt-5">Hallucination</h1>
                        </div>
                    </div>
                    <div class="row h-30 mb-5">
                        <div class="col-md-12 pb-5">
                            <div class="d-flex justify-content-center flex-wrap">
                                <p class="section-text">
                                    Can an AI hallucinate? Yes, but not in the way we normally think of that word. ChatGPT often generates confident, plausible-sounding responses that are just blatantly incorrect or nonsensical. This behaviour is called hallucination, a critical flaw in existing publicly-available LLMs. OpenAI, the company that developed ChatGPT, have repeatedly warned users about ChatGPT’s hallucinations, which they admit are a challenging issue to overcome (OpenAI, n.d.).
                                </p>
                            </div>
                        </div>
                        <div class="col-md-12">
                              <img class="img-a" src="../../../assets/chatbots_page_3_a.jpeg" alt="2d illustration of a robot pulling messages from a box"/>
                        </div>
                    </div>
                      <div class="row h-20">
                        <div class="col-md-12 d-flex justify-content-end">
                            <purple-btn
                                :text="'Continue'"
                                @click="showSecondSection = true;
                                scrollIntoSecondSection()"
                                ></purple-btn>
                        </div>
                    </div>
        </div>
        <div
            ref="secondSection"
            class="container mb-5 text-section" :class="{ 'hidden': !showSecondSection }">
                    <div class="row h-30 mb-5">
                        <div class="col-md-12 d-flex flex-wrap justify-content-center pb-5">
                            <div class="section-text">
                                An example can be seen below:
                            </div>
                        </div>
                        <div class="col-md-12 d-flex justify-content-center pb-5">
                            <chatgpt-ui-card 
                                :questionText="questionText"
                                :answerText="answerText"
                                ></chatgpt-ui-card>
                        </div>
                        <div class="col-md-12 d-flex flex-wrap justify-content-center pb-5">
                                <div class="section-text">
                                In fact, all months have four Tuesdays. However, with reasoning that seems convincing, ChatGPT could fool trusting users into accepting false information. As a user of the chatbot, you are responsible for confirming the accuracy of ChatGPT's responses. This is especially important when dealing with information on sensitive topics such as legal knowledge, medical treatments and industry compliance requirements. If users unquestioningly trust information from ChatGPT in those areas, there may be severe real-world consequences. 
                                </div>
                        </div>
                    <div class="row h-20">
                        <div class="col-md-12 d-flex justify-content-end">
                            <purple-btn
                                :text="'Continue'"
                                @click="showThirdSection = true;
                                scrollIntoThirdSection()"
                                ></purple-btn>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '../../reusable/nav-bar.vue';
import PurpleBtn from '../../reusable-ui/purple-btn.vue';
import ChatGPTUICard from '../../reusable/chatgpt_ui.vue';


export default defineComponent({
    name: 'ChatbotsPage3',
    data() {
        return {
            questionText: 'Are there any months that have less than four tuesdays?',
            answerText: "Yes, there are months that can have fewer than four Tuesdays. This occurs when a month starts on a Tuesday and is either 28 or 29 days long. Let's break down the possibilities:\n\nFebruary: In common years (non-leap years), February has 28 days. If February starts on a Tuesday, it will have only 3 Tuesdays.",
            showFirstSection: true,
            showSecondSection: false,
            showThirdSection: false
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
    },
    components: {
        'nav-bar': NavBar,
        'purple-btn': PurpleBtn,
        'chatgpt-ui-card': ChatGPTUICard

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