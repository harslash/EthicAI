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

</script>

<template>
  <div class="container tw-h-full tw-w-full tw-justify-center tw-items-center tw-content-center">
    <div class="tw-mx-auto tw-p-16 tw-w-full tw-h-full tw-justify-center">
      <p class="tw-text-3xl tw-text-center" :style="{ color: '#6D0CFF' }">Congratulations 🎉,<br />
        You answered
        <b>{{ props.result.score }}/{{ props.result.numQuestions }}</b>
        questions correctly!
      </p>
      <div class="tw-flex tw-justify-center tw-items-center tw-mt-20">
        <router-link class="tw-no-underline" :to="`/${category}/module-complete`">
          <div :style="{ backgroundColor: '#6D0CFF' }"
            class="tw-w-40 tw-h-12 tw-p-2 tw-cursor-pointer tw-rounded-xl tw-transition-all tw-duration-150">
            <p class="tw-text-xl tw-text-center tw-text-white">Continue</p>
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
