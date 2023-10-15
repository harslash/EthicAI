<template>
  <nav-bar />
  <module-navigation-bar :moduleName="'deepfakes'"></module-navigation-bar>
  <div id="main" class="container-fluid page-container text-center">
    <div class="container mb-5 text-section" :class="{ 'hidden': !showFirstSection }">
      <div class="row h-10 mb-5">
        <div class="col-md-12">
          <h1 class="tw-mt-24">AI For Evil</h1>
          <p><em>This case study may be distressing for some readers. Content warnings: threats of violence and sexual
              assault; emotional manipulation. <router-link :to="'/deepfakes/real-or-not-real'">Click here to skip.</router-link></em></p>
        </div>
      </div>
      <div class="col-md-12 d-flex justify-content-end">
        <purple-btn :tag="'button'" v-if="!section1Completed" :text="'Continue'"
          @click="showSecondSection = true; scrollIntoSection('secondSection'); section1Completed = true;" />
      </div>
    </div>
    <div ref="secondSection" class="container row m-auto mb-5" :class="{ 'hidden': !showSecondSection }">
      <div class="d-flex col-md-7 align-items-center">
        <div class="d-flex justify-content-center flex-wrap tw-mb-10">
          <p class="section-text">
            On the 20th of January 2023, at around five o'clock, Jennifer DeStefano received a call she believed to be
            from her 15-year old daughter, who was away on a ski trip.
          </p>
        </div>
      </div>
      <div class="d-flex col-md-7 align-items-center ms-auto tw-mb-10">
        <div class="d-flex justify-content-center flex-wrap m-auto">
          <p class="emphasise">“Mum, I messed up!”</p>
        </div>
      </div>
      <div class="d-flex col-md-7 align-items-center tw-mb-10">
        <div class="d-flex justify-content-center flex-wrap">
          <p class="section-text">
            DeStefano asked her daughter what happened, assuming she'd been injured on the slopes. An unfamiliar voice
            told her daughter to “lay down, put your head up”.
          </p>
        </div>
      </div>
      <div class="d-flex col-md-7 align-items-center ms-auto tw-mb-10">
        <div class="d-flex justify-content-center flex-wrap m-auto">
          <p class="emphasise">“Mum, these bad men have me.<br> Help me, help me, help me!”</p>
        </div>
      </div>
      <div class="col-md-12 d-flex justify-content-end">
        <purple-btn :tag="'button'" v-if="!section2Completed" :text="'Continue'"
          @click="showThirdSection = true; scrollIntoSection('thirdSection'); section2Completed = true;" />
      </div>
    </div>
    <div ref="thirdSection" class="container row m-auto mb-5" :class="{ 'hidden': !showThirdSection }">
      <div class="col-md-12 tw-mb-10">
        <h2>The Threat</h2>
      </div>
      <div class="col-md-7 d-flex align-items-center">
        <div class="d-flex justify-content-center flex-wrap">
          <p class="section-text">
            DeStefano said the voice sounded just like her daughter, down to the inflection, and that the sobbing
            matched how her daughter, an “internal, try-to-contain, try-to-manage person”, would cry.
          </p>
          <p class="section-text">
            The stranger's voice returned, threatening “if you call anybody or the police, I'm going to pop her so full
            of drugs, I'm going to have my way with her, I'm going to drop her in Mexico and you'll never see her
            again.”
          </p>
          <p class="section-text">
            Hearing this over the phone, DeStefano screamed out for help. She was at her other child’s dance rehearsal
            with other parents, who rang emergency services.
          </p>
        </div>
      </div>
      <div class="d-flex col-md-5 align-items-center justify-content-md-start">
        <div>
          <img width="440" alt="Jennifer DeStefano sits before a microphone in a courtroom" src="../../../assets//deepfakes_page_2_a.png" class="img-a">
          <p>Jennifer DeStefano shares her story at a U.S. Senate Hearing (Image from C-SPAN)</p>
        </div>
      </div>
      <div class="col-md-12 d-flex justify-content-end">
        <purple-btn :tag="'button'" v-if="!section3Completed" :text="'Continue'"
          @click="showFourthSection = true; scrollIntoSection('fourthSection'); section3Completed = true;" />
      </div>
    </div>
    <div ref="fourthSection" class="container row m-auto mb-5" :class="{ 'hidden': !showFourthSection }">
      <div class="col-md-12 tw-mb-10">
        <h2>The Reveal</h2>
      </div>
      <div class="d-flex col-md-6 text-end align-items-center justify-content-md-center mb-3">
        <div class="d-flex justify-content-center">
          <img width="440" alt="Person skiing down a slope" src="../../../assets//deepfakes_page_2_b.png" class="img-a">
        </div>
      </div>
      <div class="col-md-6 d-flex text-end align-items-center justify-content-md-end">
        <div class="d-flex justify-content-center flex-wrap">
          <p class="section-text-2">
            The kidnapper demanded 1,000,000 USD from DeStefano. When she said she couldn't pay, the kidnapper lowered
            the ransom to 500,000. Meanwhile, the emergency services dispatcher realised the call was a scam intended to
            fool DeStefano using an AI-generated deepfake of her daughter's voice.
          </p>
          <p class="section-text-2">
            The other parents got hold of DeStefano's daughter. She was safe and sound, but DeStefano asked her daughter
            over and over again if she was <em>sure</em> she was safe, while she processed how she had been tricked.
          </p>
          <p class="section-text-2">
            It was difficult to believe that the voice on the phone, which had sounded so real, was fake.
          </p>
        </div>
      </div>
      <div class="row h-20 mt-5">
        <div class="col-md-12 d-flex justify-content-end">
          <router-link to="/deepfakes/real-or-not-real">
            <purple-btn :text="'Continue'" @click="handlePageCompletionClick()"></purple-btn>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '../../reusable/nav-bar.vue';
import ModuleNavigationBar from "../../reusable/module-navigation-bar.vue";
import PurpleBtn from '../../reusable-ui/purple-btn.vue';

export default defineComponent({
  name: 'DeepfakesPage2',
  data() {
    return {
      value: null,
      showFirstSection: true,
      showSecondSection: false,
      showThirdSection: false,
      showFourthSection: false,
      section1Completed: false,
      section2Completed: false,
      section3Completed: false,
      section4Completed: false,
    };
  },
  methods: {
    scrollIntoSection(sectionName: string) {
      this.$nextTick(() => {
        const element = this.$refs[sectionName] as HTMLElement;
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
        }
      });
    },
    handlePageCompletionClick(this: any) {
      this.$registerPageAsCompleted('deepfakes', 'ai-for-evil');
    },
  },
  components: {
    'nav-bar': NavBar,
    "module-navigation-bar": ModuleNavigationBar,
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

.section-text-2 {
  width: 75%;
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

.emphasise {
  font-size: 1.5rem;
  font-weight: bold;
}

@media (max-width: 767.98px) {
  .section-text {
    width: 90%;
  }

  .img-a {
    width: 90%;
  }
}
</style>
