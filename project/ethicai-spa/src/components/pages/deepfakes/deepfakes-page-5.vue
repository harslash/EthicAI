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
                frameborder="0" class="md:tw-w-full md:tw-h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
            </div>
          </div>
          <div class="d-flex justify-content-center flex-wrap">
            <div class="d-flex tw-mt-4">
              <div class="tw-m-auto py-2 real-button">
                <div class="tw-w-full">
                  <purple-btn-outline :class="{ hidden: videoAnswered }" :tag="'button'" :text="'Real Video'"
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
                <p class="tw-text-center" style="margin-top: 10px;"
                  :class="videoCorrect ? 'tw-text-green-500' : 'tw-text-red-500'">
                  {{ videoExplanation }}
                </p>
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
              or not is no easy feat. Deepfake video technology is rapidly advancing, and distinguishing between reality
              and fiction will be an increasingly challenging task.
            </p>
            <p class="section-text">
              It's important to acknowledge that you won't always be able to tell, making it imperative to remain
              vigilant, exercise critical thinking, and don't believe everything you see (or hear!).
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-12 d-flex justify-content-end mb-12">
        <purple-btn :tag="'button'" v-if="!section3Completed" :text="'Continue'"
          @click="showFourthSection = true; scrollIntoSection('fourthSection'); section3Completed = true;" />
      </div>
    </div>

    <div ref="fourthSection" class="container text-section" :class="{ 'hidden': !showFourthSection }">
      <div class="row h-30 mb-5">
        <div class="col-md-12">
          <div class="d-flex justify-content-center flex-wrap">
            <div class="col-md-12">
              <h3> What have we learnt?</h3>
              <br>
            </div>
            <p class="section-text">
              <span style="color: #6D0CFF;"><b> No Deception </b></span><br />
              Deepfake technologies should not be used to deceive people. Instead, they should be used to inform people or
              to express oneself. For example, people with acquired speech disabilities can use voice generators trained
              on their speech, allowing them to continue expressing their identity when they lose their old voice.
            </p>
            <p class="section-text">
              <span style="color: #6D0CFF;"><b> Consent </b></span><br />
              You should also only create deepfakes based on training data if you have consent from the people in that
              data to use it. A person’s likeness is a valuable part of their identity, and only they have the right to
              it. So if you’re creating a deepfake of yourself that’s all hunky-dory, but you shouldn’t use it to mimic
              someone else without their permission.
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
import { defineComponent } from 'vue';
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
      showFourthSection: false,
      section1Completed: false,
      section2Completed: false,
      section3Completed: false,
      section4Completed: false,
      videoExplanation: "",
      videoAnswered: false,
      videoCorrect: false,
      videoDemoComplete: false,
      videoURLs: [
        "https://www.youtube-nocookie.com/embed/8zHURhs0DbM?si=A62_ibqNWU-oENEt",
        "https://www.youtube-nocookie.com/embed/cQ54GDm1eL0?si=eRXzfPdCJo3ULYum",
        "https://www.youtube-nocookie.com/embed/qcJ4buwMPTE?si=joYpmagltPfOZREp",
        "https://www.youtube-nocookie.com/embed/L-xm_9zjNwI?si=pwIjnstVYGUp6XOy",
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
    // eslint-disable-next-line 
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
