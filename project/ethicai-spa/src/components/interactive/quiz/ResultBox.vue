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
  }
})

</script>

<template>
  <div class="tw-mx-auto tw-p-16 tw-bg-gray-50 tw-w-full tw-h-full">
    <div>
      <p class="tw-text-xl" :style="{ color: '#6D0CFF' }">Congratulations 🎉,<br />
        You answered
        <b>{{ props.result.score }}/{{ props.result.numQuestions }}</b>
        questions correctly!
      </p>
    </div>
  </div>
</template>

<style scoped></style>
