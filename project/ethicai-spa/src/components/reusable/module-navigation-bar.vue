<template>
  <div class="bar-container container-fluid py-2">
    <div class="d-flex justify-content-center align-items-center">
      <div
        class="prev-icon-container d-flex align-items-center justify-content-center"
        @click="handlePrevIconClick()"
      >
        <i
          class="fas fa-solid fa-chevron-left prev-icon"
          style="color: #8b8b8b; font-size: 28px"
        ></i>
      </div>
      <div class="progress mx-3">
        <div
          class="progress-bar"
          role="progressbar"
          :style="{ width: progressWidth + '%' }"
          aria-valuenow="100"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div
        class="next-icon-container d-flex align-items-center justify-content-center"
        @click="handleNextIconClick()"
      >
        <i
          class="fas fa-solid fa-chevron-right next-icon"
          style="color: #8b8b8b; font-size: 28px"
        ></i>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from "vue";

export default defineComponent({
  name: "ModuleNavigationBar",
  props: {
    moduleName: {
      type: String as PropType<string>,
      required: true,
    },
  },
  data() {
    return {
      dalleModuleRoutes: [
        "the-rise-of-dalle",
        "ai-generated-vs-human-art",
        "the-complexities-of-copyright",
        "dalle-quiz",
        "dalle-complete",
      ],
      chatbotsModulePageRoutes: [
        "the-age-of-chatbots",
        'chatgpt-101',
        "too-good-to-be-true",
        "hallucination",
        "misuses-and-plagiarism",
        "chatbots-quiz",
        "chatbots-complete",
      ],
      deepfakesModulePageRoutes: [
        "the-depth-of-deepfakes",
        "ai-for-evil",
        "real-or-not-real",
        "deepfakes-in-media",
        "judgement-day",
        "deepfakes-quiz",
        "deepfakes-complete",
      ],
      progressWidth: 0,
    };
  },
  methods: {
    updateProgress() {
      const routeName = this.$route.name;
      const currentPageName: string =
        routeName !== null && routeName !== undefined
          ? routeName.toString()
          : "";

      let currentPageIndex = -1;
      let newWidth = 0;

      if (this.moduleName == "dalle") {
        currentPageIndex = this.dalleModuleRoutes.indexOf(currentPageName);
        newWidth =
          currentPageIndex == this.dalleModuleRoutes.length - 1
            ? 100
            : (currentPageIndex / this.dalleModuleRoutes.length) * 100;
      }

      if (this.moduleName == "chatbots") {
        currentPageIndex =
          this.chatbotsModulePageRoutes.indexOf(currentPageName);
        newWidth =
          currentPageIndex == this.chatbotsModulePageRoutes.length - 1
            ? 100
            : (currentPageIndex / this.chatbotsModulePageRoutes.length) * 100;
      }

      if (this.moduleName == "deepfakes") {
        currentPageIndex =
          this.deepfakesModulePageRoutes.indexOf(currentPageName);
        newWidth =
          currentPageIndex == this.deepfakesModulePageRoutes.length - 1
            ? 100
            : (currentPageIndex / this.deepfakesModulePageRoutes.length) * 100;
      }

      this.progressWidth = newWidth;
    },
    handlePrevIconClick() {
      const routeName = this.$route.name;
      const currentPageName: string =
        routeName !== null && routeName !== undefined
          ? routeName.toString()
          : "";

      let currentPageIndex = -1;

      if (this.moduleName == "dalle") {
        currentPageIndex = this.dalleModuleRoutes.indexOf(currentPageName);
        if (
          currentPageIndex > 0 &&
          currentPageIndex < this.dalleModuleRoutes.length
        ) {
          this.$router.push({
            name: this.dalleModuleRoutes[currentPageIndex - 1],
          });
        }
      }

      if (this.moduleName == "chatbots") {
        currentPageIndex = this.chatbotsModulePageRoutes.indexOf(currentPageName);
        if (
          currentPageIndex > 0 &&
          currentPageIndex < this.chatbotsModulePageRoutes.length
        ) {
          this.$router.push({
            name: this.chatbotsModulePageRoutes[currentPageIndex - 1],
          });
        }
      }

      if (this.moduleName == "deepfakes") {
        currentPageIndex = this.deepfakesModulePageRoutes.indexOf(currentPageName);
        if (
          currentPageIndex > 0 &&
          currentPageIndex < this.deepfakesModulePageRoutes.length
        ) {
          this.$router.push({
            name: this.deepfakesModulePageRoutes[currentPageIndex - 1],
          });
        }
      }
    },
    handleNextIconClick() {
      const routeName = this.$route.name;
      const currentPageName: string =
        routeName !== null && routeName !== undefined
          ? routeName.toString()
          : "";

      let currentPageIndex = -1;

      if (this.moduleName == "dalle") {
        currentPageIndex = this.dalleModuleRoutes.indexOf(currentPageName);
        if (
          currentPageIndex >= 0 &&
          currentPageIndex < this.dalleModuleRoutes.length - 1
        ) {
          this.$router.push({
            name: this.dalleModuleRoutes[currentPageIndex + 1],
          });
        }
      }

      if (this.moduleName == "chatbots") {
        currentPageIndex =
          this.chatbotsModulePageRoutes.indexOf(currentPageName);
        if (
          currentPageIndex >= 0 &&
          currentPageIndex < this.chatbotsModulePageRoutes.length - 1
        ) {
          this.$router.push({
            name: this.chatbotsModulePageRoutes[currentPageIndex + 1],
          });
        }
      }

      if (this.moduleName == "deepfakes") {
        currentPageIndex =
          this.deepfakesModulePageRoutes.indexOf(currentPageName);
        if (
          currentPageIndex >= 0 &&
          currentPageIndex < this.deepfakesModulePageRoutes.length - 1
        ) {
          this.$router.push({
            name: this.deepfakesModulePageRoutes[currentPageIndex + 1],
          });
        }
      }
    },
  },
  mounted() {
    this.updateProgress();
  },
});
</script>

<style lang="css" scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap");
/* Your component-specific styles go here */

.progress {
  --bs-progress-bar-bg: #6d0cff;
  width: 50%;
}

.bar-container {
  position: fixed;
  top: 1;
  background-color: #ffffff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  z-index: 800;
}

.prev-icon,
.next-icon {
  /* cursor: pointer; */
}

.prev-icon-container,
.next-icon-container {
  width: 40px;
  height: 40px;
  cursor: pointer;
}

.prev-icon-container:hover,
.next-icon-container:hover {
  background-color: #cccccc;
  border-radius: 8px;
}
</style>
