<template>
    <nav-bar/>
    <div class="container-fluid page-container text-center">
        <div class="section-one container mb-5 text-section" :class="{ 'hidden': !showFirstSection}">
            <div class="row h-10 mb-5">
                <div class="col-md-12">
                    <h1 class="mt-5">Copyright and Copywrong</h1>
                </div>
            </div>

            <div class="row h-30">
                <div class="col-md-1"></div>
                <div class="col-md-10 d-flex align-items-center">
                    <figure>
                        <img class="img-a" src="../../../assets//pope.png" alt="an art piece depicting a purple swirl" style="display: inline-block;  margin: 12.5px 5px; border-radius: 5px;"/>
                        <figcaption> <b>AI Image Generation of Pope Francis (Cartter, 2023)</b> </figcaption>
                    </figure>
                </div>
                <div class="col-md-1"></div>
            </div>

            <div class="row h-30">
                <div class="col-md-12 d-flex align-items-center">
                    <div class="d-flex justify-content-center flex-wrap">
                        <p class="text-left section-text">
                            Image generation has exciting potential that comes from the creativity of input prompts used to create them. But alas, there are ethical dilemmas that cannot be ignored. AI art poses a risk to artists and their ability to earn a living. Training AI algorithms on their art without their knowledge or consent can lead to blatant copyright violation and disrespects the effort put into creating those works. Images resembling copyrighted material can be created in an instant — capitalising on this means the vision and skill of artists is ultimately devalued without compensation.
                        </p>

                        <p class="text-left section-text">
                            Current models like DALL-E also allow rendering public figures in offensive or inappropriate contexts. While a careful eye may be able to tell current AI images apart from real ones, it is easy to be tricked by images that look like they show those public figures in events which are not real. These artificial pictures (dubbed “deepfakes”) can damage individuals’ reputation; furthermore, politicians and leaders have reason to fear their implications for national security (Parra & Shroud, 2023). To learn more about deepfakes, visit our module here.
                        </p>
                    </div>
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
        <div ref="secondSection" class="section-two container mb-5 text-section" :class="{ 'hidden': !showSecondSection }">
            <div class="row h-10 mb-5">
                <div class="col-md-12">
                    <h3>What have we learnt?</h3>
                </div>
            </div>

            <div class="row h-30">
                <div class="col-md-1"></div>
                <div class="col-md-10 d-flex align-items-center justify-content-center">
                    <figure>
                        <img class="img-a" src="../../../assets//copyright-copywrong-happykid.png" alt="a happy kid infront of a laptop" style="display: inline-block;  margin: 12.5px 5px; border-radius: 5px;"/>
                    </figure>
                </div>
                <div class="col-md-1"></div>
            </div>

            <div class="row h-30">
                <div class="col-md-12 d-flex align-items-center justify-content-center">          
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4 mb-3">
                            <div class="card">
                                <div class="card-body">
                                <h5 class="card-title">Use AI Thoughtfully</h5>
                                <p class="card-text">AI image generators are powerful, so it's important to understand their strengths (efficiency and replication) and their flaws (plagiarism and accreditation).</p>
                                </div>
                            </div>
                            </div>
                            <div class="col-md-4 mb-3">
                            <div class="card">
                                <div class="card-body">
                                <h5 class="card-title">Respect Copyright</h5>
                                <p class="card-text">If it's not your image and you do not have permission to use it, then don't use it! Alternatively, if you do have permission, then credit the original source.</p>
                                </div>
                            </div>
                            </div>
                            <div class="col-md-4 mb-3">
                            <div class="card">
                                <div class="card-body">
                                <h5 class="card-title">Stay Vigilant</h5>
                                <p class="card-text">This is probably not the first time you've heard this, but to reiterate it, do not trust everything you see on the internet.</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row h-20">
                <div class="col-md-12 d-flex justify-content-end">
                    <router-link to="/dalle" custom v-slot="{navigate}">
                        <purple-btn :text="'Continue'" @click="navigate" role="link"> </purple-btn>
                    </router-link>
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
    name: 'DallePage3',
    data() {
        return {
            value: null,
            showFirstSection: true,
            showSecondSection: false,
        }
    },
    methods: {
        scrollIntoSecondSection() 
        {   
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
        'purple-btn': PurpleBtn,
    }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');

.container-fluid.page-container {
    margin-top: 60px;
}

.img-a {
    width: 50%;
    height: 50%;
}

.section-text {
    width: 75%;
    text-align: left;
}

.form {
    height: 30vh;
}

.slider-container{
    width: 50%;
}

.slider-container :deep(.p-slider-range) {
    background: #454545;
}

.slider-container :deep(.p-slider-handle) {
    background: #696969;
    border: 2px solid #696969;
}

.radio-div .form-check-input:checked {
    background-color: #696969;
    border-color: #696969;
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

.card {
    border: 0;
}

.card-title {
    font-weight: 700;
    color: #6D0CFF;
}

.card-text {
    padding-top: 5%;
}

</style>