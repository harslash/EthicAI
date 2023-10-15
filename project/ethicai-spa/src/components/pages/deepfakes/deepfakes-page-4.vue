<template>
  <nav-bar />
  <module-navigation-bar :moduleName="'deepfakes'"></module-navigation-bar>
  <div id="main" class="container-fluid page-container text-center">
    <div class="container text-section" :class="{ 'hidden': !showFirstSection }">
      <div class="row h-10 mb-5">
        <div class="col-md-12">
          <h1 class="tw-mt-24">Deepfakes in the Media</h1>
        </div>
      </div>
      <div class="row h-30 mb-5">
        <div class="col-md-12">
          <div class="d-flex justify-content-center flex-wrap">
            <p class="section-text">
              Deepfake technology has become an increasingly concerning problem as they become more and more
              realistic. It can create fake media quickly, like photographs or voice recordings, that are
              difficult to distinguish from the real thing. There is a risk that deepfakes will be used to
              create incriminating photos or recordings of political figures or celebrities to discredit them.
              Even if some of the photos and recordings are discovered to be fake, it is easy for malicious
              campaigners to create more fakes.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-12 d-flex justify-content-end">
        <purple-btn :tag="'button'" v-if="!section1Completed" :text="'Continue'"
          @click="showSecondSection = true; scrollIntoSection('secondSection'); section1Completed = true;" />
      </div>
    </div>
    <div ref="secondSection" class="container row m-auto" :class="{ 'hidden': !showSecondSection }">
      <div class="row h-30">
        <div class="col-md-12 pb-5">
          <div class="d-flex justify-content-center flex-wrap">
            <p class="section-text text-center">
              Take a look at this video of Morgan Freeman:
            </p>
            <div>
              <iframe width="560" height="315" class="mb-3" src="https://www.youtube-nocookie.com/embed/oxXpB9pSETo"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
            </div>
            <p class="section-text">
              Believe it or not, this video is actually a deepfake! Pretty convincing, right? As the technology continues
              to improve, these deepfakes will become more and more difficult to discern from real media.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-12 d-flex justify-content-end">
        <purple-btn :tag="'button'" v-if="!section2Completed" :text="'Continue'"
          @click="showThirdSection = true; scrollIntoSection('thirdSection'); section2Completed = true;" />
      </div>
    </div>
    <div ref="thirdSection" class="container row m-auto" :class="{ 'hidden': !showThirdSection }">
      <div class="row h-30 mb-5">
        <div class="col-md-12 pb-5">
          <div class="d-flex justify-content-center flex-wrap">
            <p class="section-text">
              The deepfake of Morgan Freeman above is a pretty advanced deepfake, created to be very convincing with a lot
              more effort and processing power.
            </p>
            <p class="section-text">
              More commonly on the internet, you will find deepfakes that look something like this video of Volodymyr
              Zelenskyy:
            </p>
            <div>
              <iframe width="560" height="315" class="mb-3"
                src="https://www.youtube-nocookie.com/embed/X17yrEV5sl4?si=lNWGRhDQvixDBqvy" title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
            </div>
            <p class="section-text">
              While they are a lot less convincing, you may not notice if you are not paying close attention to the
              details.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-12 d-flex justify-content-end">
        <purple-btn :tag="'button'" v-if="!section3Completed" :text="'Continue'"
          @click="showFourthSection = true; scrollIntoSection('fourthSection'); section3Completed = true;" />
      </div>
    </div>
    <div ref="fourthSection" class="container row m-auto" :class="{ 'hidden': !showFourthSection }">
      <div class="row h-30 mb-5">
        <div class="col-md-12 pb-5">
          <div class="d-flex justify-content-center flex-wrap">
            <p class="section-text">
              So, how can you tell the difference between real media and AI-generated deepfakes? There are several
              deepfake artifacts you can be on the lookout for. Pay close attention to the face - high-end deepfake
              manipulations are almost always facial transformations. (<router-link :to="{ name: 'references' }">MIT
                MediaLab, n.d.</router-link>):
            </p>
            <p class="section-text">
              <span style="color: #6D0CFF;"><b>1. Cheeks and Forehead:</b></span><br />
              Does the skin appear too smooth or wrinkly?
              Is the age of the skin similar to that of the hair and eyes?
            </p>
            <p class="section-text">
              <span style="color: #6D0CFF;"><b>2. Eyes and Eyebrows:</b></span><br />
              Do shadows appear in places you would expect?
              If they have glasses, is there any glare? Too much glare?
              Deepfakes may fail to accurately represent the natural physics of a scene.
            </p>
            <p class="section-text">
              <span style="color: #6D0CFF;"><b>3. Facial Hair or Lack Thereof:</b></span><br />
              Does facial hair look real?
              Deepfakes may add or remove facial hair, but fail to make them look fully natural.
            </p>
            <p class="section-text">
              <span style="color: #6D0CFF;"><b>4. Facial Moles:</b></span><br />
              Does the mole look real?
            </p>
            <p class="section-text">
              <span style="color: #6D0CFF;"><b>5. Blinking:</b></span><br />
              Does the person blink enough or too much?
            </p>
            <p class="section-text mb-5">
              <span style="color: #6D0CFF;"><b>5. Lip Movements:</b></span><br />
              Some deepfakes are based on lip syncing.
              Do the lip movements look natural?
            </p>
            <p class="section-text text-center">
              Using the guidelines above, continue to the next page and test your ability to spot deepfakes!
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-12 d-flex justify-content-end mb-2">
        <router-link to="/deepfakes/judgement-day">
          <purple-btn :text="'Next Page'" @click="handlePageCompletionClick()"></purple-btn>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import NavBar from '../../reusable/nav-bar.vue';
import ModuleNavigationBar from "../../reusable/module-navigation-bar.vue";
import PurpleBtn from '../../reusable-ui/purple-btn.vue';

export default defineComponent({
  name: 'DeepfakesPage3',
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
      this.$registerPageAsCompleted('deepfakes', 'deepfakes-in-media');
    }
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

@media (max-width: 767.98px) {
  .section-text {
    width: 90%;
  }
}
</style>
