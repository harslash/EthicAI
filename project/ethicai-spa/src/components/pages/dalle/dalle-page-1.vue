<template>
  <nav-bar />
  <div class="container-fluid page-container text-center">
    <!-- Element 1 -->
    <div class="row h-25">
      <div class="col-md-12">
        <h1 class="mt-5" style="font-size: 28px;" ><u>The Rise of DALL·E</u></h1>
        <br>
      </div>
    </div>
    <div class="row h-30 mb-5 justify-content-center">
      <div class="col-md-8">
        <div class="d-flex justify-content-center flex-wrap">
          <p class="text-left section-text">
            DALL·E is a cutting-edge generative art model developed by OpenAI. It blends the names of artist Salvador Dalí and robot WALL·E. It utilizes the GPT architecture to create images from textual descriptions (OpenAI, 2022). You provide a text prompt, and DALL·E generates a corresponding image.
          </p>

          <p class="section-text">
            This model has a remarkable capacity to bridge text and images, exemplifying AI's ability to produce imaginative content (TechTarget, 2023).
          </p>
        </div>
      </div>
      <div class="col-md-4 d-flex">
        <img class="img-a" src="../../../assets//dalle_page1_img.png" alt="an art piece depicting a purple swirl" />
      </div>
    </div>

    <!-- Element 2 -->
    <div class="row h-25 justify-content-center">
      <div class="col-md-6 d-flex justify-content-center">
        <important-terms-card :terms-and-definitions="termsAndDefinitions" />
      </div>
      <div class="col-md-6">
        <p class="text-right section-text">
        <br>
          However, it also raises some significant ethical questions about the potential misuse of AI-generated images. This includes deepfakes (which are covered in further detail in our deepfakes module), authenticity, and plagiarism.
        </p>
      </div>
    </div>

    <!-- Element 3 -->
    <div class="row h-25 justify-content-center">
      <div class="col-md-12">
        <h1 class="mt-5" style="font-size: 28px;" >Imagine ... </h1>
        <br>
      </div>
    </div>

    <!-- Element 4 -->
    <div class="row h-25 justify-content-center">
    <div class="col-md-4 d-flex align-items-center"> <!-- Add align-items-center class here -->
        <img class="img-a" src="../../../assets//dalle_page1_img.png" alt="an art piece depicting a purple swirl" />
    </div>
    <div class="col-md-6">
        <p class="text-right section-text">
        <br>
        You are an artist.
        </p>
        <p class="text-right section-text">
        <br>
        More than just your source of income, your work is your passion. You are proud to share your art with the world on Instagram. 
        </p>
    </div>
    </div>
    
  </div>
  <page-footer />
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
      termsAndDefinitions: [
        {
          term: 'GPT',
          definition: 'Stands for Generative Pre-trained Transformer. It is a family of neural network models that use the transformer architecture. It powers recent generative AI applications such as ChatGPT (AWS, 2023).',
        },
        {
          term: 'AI',
          definition: 'AI (or Artificial Intelligence) is the development of computer systems that can perform tasks typically requiring human intelligence (OpenAI, 2023).',
        },
        {
          term: 'Deepfake',
          definition: 'A deepfake is a computer-made imitation video, image, or audio, mimicking reality and often impersonating individuals (Seon, n.d.).',
        },
      ],
    };
  },
  methods: {},
  components: {
    'nav-bar': NavBar,
    'page-footer': PageFooter,
    'important-terms-card': ImportantTermsCard,
  },
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');

.container-fluid.page-container {
  height: flex;
  margin-top: 60px;
  margin-bottom: 60px;
}

.img-a {
  width: 75%;
}

.section-text {
  width: 65%;
}

</style>