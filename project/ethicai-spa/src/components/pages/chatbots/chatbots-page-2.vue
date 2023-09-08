<template>
    <nav-bar />
    <div class="container-fluid page-container text-center ">
         <div class="section-one container mb-5 text-section" :class="{ 'hidden': !showFirstSection }">
                <div class="row h-10 mb-5">
                    <div class="col-md-12">
                        <h1 class="mt-5">Too Good to be True?</h1>
                    </div>
                </div>
                <div class="row h-30 mb-5">
                    <div class="col-md-12 pb-5">
                        <div class="d-flex justify-content-center flex-wrap">
                            <p class="section-text">
                                These new AI chatbots may be impressive, but their use can lead to many problems. The users like yourself need to understand how they function and their implications.
                            </p>
                            <p class="section-text">
                                The current most popular chatbot, ChatGPT, works by attempting to understand your prompt and spitting out strings of words that it predicts will be the best response based on the data used to train it (Guinness, 2023).
                            </p>
                        </div>
                    </div>
                    <div class="col-md-12">
                          <img class="img-a" src="../../../assets//chatbots_page_2_a.jpeg" alt="2d illustration of a robot pulling messages from a box"/>
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
            class="section two container mb-5 text-section" :class="{ 'hidden': !showSecondSection }">
                    <div class="row h-30 mb-5">
                        <div class="col-md-12 pb-5">
                            <div class="d-flex justify-content-center flex-wrap">
                                <p class="section-text">
                                    The creators of ChatGPT have trained the model on an extensive collection of textual data containing over 570 GB of data (Ruby, 2023). That's over 1.3 million novels worth of information! The source of this data includes books, articles, and web pages.
                                </p>
                                <p class="section-text">
                                    If you’ve been on the internet for very long, you might expect some of those sources of data to contain biases, stereotypes, and prejudiced language. ChatGPT unintentionally learns these biases and may produce offensive responses or reinforce harmful stereotypes when it replies to prompts. The training data used to create ChatGPT and other LLMs, can at times result in biassed or inappropriate responses (Ray, 2023).
                                </p>
                            </div>
                        </div>
                        <div class="col-md-12">
                              <img class="img-a" src="../../../assets//chatbots_page_2_b.jpeg" alt="2d illustration of a robot pulling messages from a box"/>
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
    <page-footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '../../reusable/nav-bar.vue';
import PurpleBtn from '../../reusable-ui/purple-btn.vue';

export default defineComponent({
    name: 'ChatbotsPage2',
    data() {
        return {
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
    },
    components: {
        'nav-bar': NavBar,
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