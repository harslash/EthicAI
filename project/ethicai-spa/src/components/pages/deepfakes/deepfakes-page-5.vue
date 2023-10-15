<template>
  <nav-bar />
  <module-navigation-bar :moduleName="'deepfakes'"></module-navigation-bar>
  <div id="main" class="container-fluid page-container text-center">
    <div class="container text-section" :class="{ 'hidden': !showFirstSection }">
      <div class="row h-10 mb-5">
        <div class="col-md-12">
          <h1 class="tw-mt-24">Judgement Day</h1>
        </div>
      </div>
      <div class="row h-30 mb-5">
        <div class="col-md-12">
          <div class="d-flex justify-content-center flex-wrap">
            <p class="section-text">
              Remember those guidelines from the last page? Given a series of videos, you are going to have to judge
              whether they are a deepfake or a real video. We recommend you watch at least a minute of the video before
              making your judgment.
            </p>
            <p class="section-text">
              Do you think you could tell the difference between a real and a deepfake video? <b>Let's find out!</b>
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
        <div class="col-md-12 pb-1">
          <div class="d-flex justify-content-center flex-wrap">
            <p class="section-text text-center tw-font-bold">{{ videoTitles[currentVideoIndex] }}</p>
            <div class="video-wrapper">
              <iframe width="560" height="315" :src="videoURLs[currentVideoIndex]" title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
            </div>
          </div>
          <br>
          <div class="d-flex justify-content-center flex-wrap">
            <div class="d-flex flex-column flex-md-row">
              <div class="tw-m-auto py-2 real-button">
                <div class="tw-w-full">
                  <purple-btn :class="{ hidden: videoAnswered }" :tag="'button'" :text="'Real Video'"
                    @click="onAnswer(true);" />
                </div>
              </div>
              <div class="tw-m-auto py-2 deepfake-button">
                <div class="tw-w-full">
                  <purple-btn-outline :class="{ hidden: videoAnswered }" :tag="'button'" :text="'Deepfake'"
                    @click="onAnswer(false);" />
                </div>
              </div>
              <div :class="{ hidden: !videoAnswered }">
                <p class="tw-text-center" :class="videoCorrect ? 'tw-text-green-500' : 'tw-text-red-500'">
                  {{ videoExplanation }}</p>
              </div>
            </div>
          </div>
          <div v-if="videoAnswered && !videoDemoComplete" class="col-md-9 d-flex justify-content-end">
            <purple-btn :tag="'button'" :text="'Next Video'" @click="showNextVideo()" />
          </div>
        </div>
      </div>
      <div class="col-md-12 d-flex justify-content-end">
        <purple-btn :tag="'button'" v-if="videoDemoComplete && !section2Completed" :text="'Continue'"
          @click="showThirdSection = true; scrollIntoSection('thirdSection'); section2Completed = true;" />
      </div>
    </div>

    <div ref="thirdSection" class="container text-section" :class="{ 'hidden': !showThirdSection }">
      <div class="row h-30 mb-5">
        <div class="col-md-12">
          <div class="d-flex justify-content-center flex-wrap">
            <p class="section-text">
              Was that challenging?
            </p>
            <p class="section-text">
              Ultimately, even when considering the previous page's guidelines, determining whether a video is a deepfake
              or not is no easy feat. Deepfake video technology is very advanced and as it advances further, it will
              continue to become harder and harder to distinguish the difference between reality and fiction.
            </p>
          </div>
        </div>
        <div class="col-md-12 d-flex justify-content-end mb-12">
          <router-link to="/deepfakes/quiz">
            <purple-btn :text="'Next Page'" @click="handlePageCompletionClick()"></purple-btn>
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
import PurpleBtn from '../../reusable-ui/purple-btn.vue';
import PurpleBtnOutline from '../../reusable-ui/purple-btn-outline.vue';

export default defineComponent({
  name: 'DeepfakesPage3',
  data() {
    return {
      showFirstSection: true,
      showSecondSection: false,
      showThirdSection: false,
      section1Completed: false,
      section2Completed: false,
      section3Completed: false,
      videoExplanation: "",
      videoAnswered: false,
      videoCorrect: false,
      videoDemoComplete: false,
      videoURLs: [
        "https://www.youtube.com/embed/8zHURhs0DbM",
        "https://www.youtube.com/embed/cQ54GDm1eL0",
        "https://www.youtube.com/embed/qcJ4buwMPTE",
        "https://www.youtube.com/embed/L-xm_9zjNwI",
      ],
      videoTitles: [
        "Boris Johnson Discusses Peppa Pig World",
        "Barack Obama Warns About the Dangers of Deepfakes",
        "Tom Cruise Singing",
        "Fury as Donald Trump Says Immigrants Poison Blood of US"
      ],
      correctAnswers: [
        true,
        false,
        false,
        true,
      ],
      currentVideoIndex: 0,
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
      this.$registerPageAsCompleted('deepfakes', 'judgement-day');
    },
    showNextVideo() {
      this.currentVideoIndex++;
      this.videoAnswered = false;
    },
    onAnswer(isReal: boolean) {
      this.videoAnswered = true;
      this.videoCorrect = this.correctAnswers[this.currentVideoIndex] === isReal;
      if (isReal) {
        this.videoExplanation = this.videoCorrect ? "Correct! The video is real." : "Incorrect! The video is a deepfake.";
      } else {
        this.videoExplanation = this.videoCorrect ? "Correct! The video is a deepfake." : "Incorrect! The video is real.";
      }
      this.videoDemoComplete = this.currentVideoIndex === this.videoURLs.length - 1;
    },
  },
  components: {
    'nav-bar': NavBar,
    "module-navigation-bar": ModuleNavigationBar,
    'purple-btn': PurpleBtn,
    'purple-btn-outline': PurpleBtnOutline
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

.real-button {
  padding-right: 30px;
  /* Adjust the value as needed for spacing */
}

.deepfake-button {
  padding-left: 30px;
  /* Adjust the value as needed for spacing */
}
</style>
