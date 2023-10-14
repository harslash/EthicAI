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
              Given a series of videos, you are going to have to judge whether they are a deepfake or not. We recommend you watch at least a minute of the video before making your judgement. Good luck!
            </p>
          </div>
        </div>
      </div>

      <div class="col-md-12 d-flex justify-content-end">
        <purple-btn :tag="'button'" v-if="!section1Completed" :text="'Start Now'"
          @click="showSecondSection = true; scrollIntoSection('secondSection'); section1Completed = true;" />
      </div>
    </div>

    <div ref="secondSection" class="container row m-auto" :class="{ 'hidden': !showSecondSection }">
      <div class="row h-30">
        <div class="col-md-12 pb-1">
          <div class="d-flex justify-content-center flex-wrap">
            <p class="section-text text-center">
              Boris Johnson discusses Peppa Pig world.
            </p>
            <div>
              <iframe width="560" height="315" class="mb-5"
                src="https://www.youtube.com/embed/8zHURhs0DbM" title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12 d-flex justify-content-end">
        <purple-btn :tag="'button'" v-if="!section2Completed" :text="'Continue'"
          @click="showThirdSection = true; scrollIntoSection('thirdSection'); section2Completed = true;" />
      </div>
    </div>


    <div class="col-md-12 d-flex justify-content-end mb-12">
      <router-link to="/deepfakes/quiz">
        <purple-btn :text="'Continue'" @click="handlePageCompletionClick()"></purple-btn>
      </router-link>
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