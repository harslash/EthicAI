<script setup>
import { defineProps } from "vue"

const props = defineProps({
  category: {
    type: Object,
    required: true
  },
  result: {
    type: Object,
    required: true
  },
})

let grade = Math.round((props.result.score / props.result.numQuestions) * 100);
let pass = grade >= 50;

</script>

<template>
  <div class="container tw-h-full tw-w-full tw-justify-center tw-items-center tw-content-center">
    <div class="tw-mx-auto tw-p-16 tw-w-full tw-h-full tw-justify-center">
      <p class="tw-text-4xl tw-text-center tw-font-bold tw-mb-8" style="color:#6D0CFF">Quiz Results</p>
      <div class="tw-m-auto tw-w-fit">
        <img :src="`/quiz/${pass ? 'correct1' : 'wrong1'}.svg`" :class="'tw-w-[100px] tw-h-[100px]'"
          :alt="`${pass ? 'passed' : 'failed'} quiz`" />
      </div>
      <p class="tw-text-2xl tw-text-center tw-my-10">
        {{ pass ? 'Nice job, you passed!' : 'Sorry, you didn\'t pass :(' }}
      </p>
      <div class="tw-flex tw-w-3/6 tw-m-auto">
        <div class="tw-w-60 tw-h-38 tw-m-auto" style="background-color: #f2f2f2;">
          <p class="tw-uppercase tw-text-center tw-font-bold tw-mt-2" style="color:#6D0CFF">Grade</p>
          <p class="tw-text-center tw-text-4xl">{{ grade }}%</p>
          <hr class="tw-w-5/6 tw-m-auto">
          <p class="tw-uppercase tw-text-center tw-mt-2 tw-text-sm">Passing Score: 50%</p>
        </div>
        <div class="tw-w-60 tw-h-38 tw-m-auto" style="background-color: #f2f2f2;">
          <p class="tw-uppercase tw-text-center tw-font-bold tw-mt-2" style="color:#6D0CFF">Score</p>
          <p class="tw-text-center tw-text-4xl">{{ props.result.score }}/{{ props.result.numQuestions }}</p>
          <hr class="tw-w-5/6 tw-m-auto">
          <p class="tw-uppercase tw-text-center tw-mt-2 tw-text-sm">
            Passing Points: {{ Math.round(props.result.numQuestions / 2) }}
          </p>
        </div>
      </div>
      <div class="tw-flex tw-justify-center tw-items-center tw-mt-20">
        <button v-if="!pass" onclick="location.reload()" :style="{ backgroundColor: '#6D0CFF' }"
          class="tw-w-40 tw-h-12 tw-p-2 tw-cursor-pointer tw-rounded-xl tw-transition-all tw-duration-150 tw-border-none">
          <p class="tw-text-xl tw-text-center tw-text-white">Retry Quiz</p>
        </button>
        <router-link class="tw-no-underline tw-ml-5" :to="`/${category}/module-complete`">
          <div :style="{ backgroundColor: '#6D0CFF' }"
            class="tw-w-40 tw-h-12 tw-p-2 tw-cursor-pointer tw-rounded-xl tw-transition-all tw-duration-150">
            <p class="tw-text-xl tw-text-center tw-text-white">Next Page</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>


<style scoped>
.hover-scale:hover {
  transform: scale(1.05);
}
</style>
