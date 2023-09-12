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
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '../../reusable/nav-bar.vue';
import PurpleBtn from '../../reusable-ui/purple-btn.vue';


export default defineComponent({
    name: 'ChatbotsPage3',
    data() {
        return {
            questionText: 'Your question goes here',
            answerText: 'Your answer goes here',
            showFirstSection: true,
            showSecondSection: false
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
    },
    components: {
        'nav-bar': NavBar,
        'purple-btn': PurpleBtn

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