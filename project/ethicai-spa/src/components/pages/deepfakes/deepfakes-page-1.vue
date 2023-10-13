<template>
  <nav-bar />
  <module-navigation-bar :moduleName="'deepfakes'"></module-navigation-bar>
  <div id="main" class="container-fluid page-container text-center">
    <div class="container mb-5 text-section">
      <div class="row h-10 mb-5">
        <div class="col-md-12">
          <h1 class="tw-mt-24">The Depths of Deepfakes</h1>
        </div>
      </div>
      <div class="row h-30 mb-5">
        <div class="col-md-7 d-flex align-items-center">
          <div class="d-flex justify-content-center flex-wrap">
            <p class="text-left section-text">
              A deepfake is generated image, video, or audio that imitates a person's appearance and/or voice
              (<router-link :to="{ name: 'references' }">"Deepfakes," 2023</router-link>). This content is often
              created using two algorithms that compete with one another. Oneis called a generator, and the other is
              called a discriminator.
            <ul>
              <li>The generator creates artificial content like images, videos, or audio.</li>
              <li>The discriminator's role is to distinguish between real and artificial content.</li>
            </ul>
            </p>

            <p class="section-text">
              This dynamic forms a competitive relationship that allows both to improve over time: as the generator
              creates artificial content, the discriminator assesses its authenticity (<router-link
                :to="{ name: 'references' }">Great Learning Team, 2022</router-link>). At the start of the training
              process, neither algorithm is very accurate, but iteration by iteration, both the generator and
              discriminator improve their abilities.
            </p>
          </div>
        </div>

        <div class="col-md-5 d-flex align-items-center justify-content-md-start justify-content-center ">
          <img width="400" alt="illustration of a generator and discriminator fighting"
            src="../../../assets//deepfakes_page_1.png">
        </div>
      </div>
      <div class="row h-30 mb-3">
        <div class="col-md-5 d-flex justify-content-center justify-content-md-end pb-5">
          <important-terms-card :terms-and-definitions="termsAndDefinitions" />
        </div>
        <div class="col-md-7 d-flex align-items-center">
          <div class="d-flex justify-content-center flex-wrap">
            <p class="section-text">
              The name for the two algorithms put together is a generative adversarial network or GAN. It uses algorithms
              to train itself to recognize patterns, which helps it learn the real characteristics needed to produce fake
              media. Over time, this iterative process leads to the generator producing content that is increasingly
              difficult to distinguish from real content.
            </p>
            <p class="section-text">
              In recent years, deepfake technology has gained significant attention for its potential to create
              hyper-realistic videos, audios, and images that can be used for various purposes, including entertainment
              and art. However, deepfake technology can be misused in ways that raise serious ethical concerns.
            </p>
          </div>
        </div>
      </div>
      <div class="row h-20">
        <div class="col-md-12 d-flex justify-content-end">
          <router-link to="/deepfakes/ai-for-evil">
            <purple-btn :text="'Continue'" @click="handlePageCompletionClick()"></purple-btn>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import NavBar from '../../reusable/nav-bar.vue';
import ModuleNavigationBar from "../../reusable/module-navigation-bar.vue";
import ImportantTermsCard from '../../reusable/important-terms-card.vue';
import PurpleBtn from '../../reusable-ui/purple-btn.vue';

export default defineComponent({
  name: 'DeepfakesPage1',
  data() {
    return {
      termsAndDefinitions: [
        {
          term: 'Deepfake',
          definition: 'A deepfake is a computer-made imitation video, image, or audio, mimicking reality and often impersonating individuals ("Deepfakes," 2023).',
        },
        {
          term: 'Generative AI',
          definition: 'Generative AI is a type of artificial intelligence technology that broadly describes machine learning systems capable of generating text, images, code or other types of content, often in response to a prompt entered by a user. (Hughes, 2023).',
        },
        {
          term: 'Machine Learning',
          definition: 'Machine Learning is a branch of artificial intelligence (AI) and computer science which focuses on the use of data and algorithms to imitate the way humans learn, gradually improving its accuracy (IBM, n.d.).',
        }
      ]
    };
  },
  methods: {
    handlePageCompletionClick(this: any) {
      this.$registerPageAsCompleted('deepfakes', 'the-depth-of-deepfakes');
    }
  },
  components: {
    'nav-bar': NavBar,
    "module-navigation-bar": ModuleNavigationBar,
    'important-terms-card': ImportantTermsCard,
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

.text-section {
  opacity: 1;
  max-height: 2000px;
  transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
}

.hidden {
  display: none;
  opacity: 0;
  max-height: 0;
  overflow: hidden;
}

.gpt-prompt-note {
  font-size: 0.8rem;
}

.purple-text {
  color: #6D0CFF;
  transition: color 2s ease-in-out;
}

.img-a {
  width: 25%;
}

@media (max-width: 767.98px) {
  .section-text {
    width: 90%;
  }

  .img-a {
    width: 60%;
  }
}
</style>
