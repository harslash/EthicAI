<template>
    <nav-bar/>
    <div class="container-fluid page-container text-center">
        <div class="section-one container mb-5 text-section" :class="{ 'hidden': !showFirstSection}">
            <div class="row h-10 mb-5">
                <div class="col-md-12">
                    <h1 class="mt-5">AI Generated vs. Human Art</h1>
                </div>
            </div>

            <div class="row h-30">
                <div class="col-md-4 d-flex align-items-center">
                    <figure>
                        <img class="img-a" src="../../../assets//Robot_Head_by_DALL-E_2.jpg" alt="Escher Robot Head by DALL-E 2" style="display: inline-block;  margin: 25px 10px; border-radius: 5px;"/>
                        <figcaption> <b>Escher Robot Head by DALL-E 2</b> </figcaption>
                    </figure>
                </div>

                <div class="col-md-8 d-flex align-items-center">
                    <div class="d-flex justify-content-center flex-wrap">
                        <p class="text-left section-text">
                            There is no agreed-upon definition of art. It may be subjective. Experts disagree. What we call AI art, differs from human-made art because it is driven by commands and instructions, rather than an expression of genuine emotion.                        
                        </p>

                        <p class="text-left section-text">
                            AI generators merge visual features from pre-existing images to assemble a requested concept. Some claim 'true' art must be unique; others argue that even human-made art might just be a recombination based on existing styles — which in some ways is similar to generative AI (Nanou, 2022).
                        </p>

                        <p class="text-left section-text">
                            As different generative AI models are trained on larger datasets and approach those styles more faithfully, it becomes increasingly challenging to distinguish between AI generated art and human art — especially if AI generators draw influences from pre-existing images.
                        </p>

                        <p class="text-left section-text">
                            Can you tell art created by a human apart from AI images? <b>Let's find out!</b>
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
                    <h3>Which painting was created by a <em>human</em>?</h3>
                </div>
            </div>

            <div class="row h-30">
                <div class="col-md-1"></div>
                <div class="col-md-10 d-flex align-items-center justify-content-center">          
                    <!-- quiz -->  
                    <p>Quiz to be implemented</p>
                </div>
                <div class="col-md-1"></div>
            </div>

            <div class="row h-20">
                <div class="col-md-12 d-flex justify-content-end">
                    <router-link to="/dalle/copyright-and-copywrong" custom v-slot="{navigate}">
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
    name: 'DallePage2',
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
    width: 75%;
    height: 75%;
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

</style>