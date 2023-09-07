<template>
    <nav-bar/>
    <div class="container-fluid page-container text-center">
        <div class="row h-25">
            <div class="col-md-12">
                <h1 class="mt-5">The Rise of DALL·E</h1>
            </div>
        </div>
            <div class="row h-30 mb-5">
                <div class="col-md-8">
                    <div class="d-flex justify-content-center flex-wrap">
                         <p class="text-left section-text">
                            DALL·E is a cutting-edge generative art model developed by OpenAI. It blends the names of artist Salvador Dalí and robot WALL·E. It utilises the GPT architecture to create images from textual descriptions (OpenAI, 2022). You provide a text prompt, and DALL·E generates a corresponding image.
                        </p>

                        <p class="section-text">
                            This model has a remarkable capacity to bridge text and images, exemplifying AI's ability to produce imaginative content (TechTarget, 2023).
                        </p>
                    </div>
                   
                  
                </div>
                <div class="col-md-4 d-flex">
                    <img class="img-a" src="../../../assets//dalle_page1_img.png" alt="an art piece depicting a purple swirl"/>
                </div>
            </div>
         <div class="row h-25">
            <div class="col-md-4 d-flex justify-content-center">
                <important-terms-card :terms-and-definitions="termsAndDefinitions"></important-terms-card>
            </div>
            <div class="col-md-8"></div>
        </div>
    </div>
    <page-footer/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '../../reusable/nav-bar.vue';
import PageFooter from '../../reusable/page-footer.vue';
import ImportantTermsCard from '../../reusable/important-terms-card.vue';

export default defineComponent({
    name: 'DallePage1',
    data() {
        return {
            termsAndDefinitions: 
            [
                {
                    term: 'GPT',
                    definition: 'Stands for Generative Pre-trained Transformer. It is a family of neural network models that uses the transformer architecture. It powers recent generative AI applications such as ChatGPT (AWS, 2023).'

                },
                {
                    term: 'AI',
                    definition: 'AI (or Artificial Intelligence) is the development of computer systems that can perform tasks typically requiring human intelligence (OpenAI, 2023).'

                },
                {
                    term: 'Deepfake',
                    definition: 'A deepfake is a computer-made imitation video, image, or audio, mimicking reality and often impersonating individuals (Seon, n.d.).'

                }
            ]
        }
    },
    methods: {

    },
    components: {
        'nav-bar': NavBar,
        'page-footer': PageFooter,
        'important-terms-card': ImportantTermsCard
    }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');

.container-fluid.page-container {
    height: 105vh;
    margin-top: 60px;
}

.img-a {
    width: 75%;
}

.section-text {
    width: 65%;
}
</style>