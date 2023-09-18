<script setup>
import { shuffleArray, asyncTimeout } from "../../../../utils"
import { defineProps, computed, ref, watch } from "vue"

const emit = defineEmits(['result'])
const props = defineProps({
  question: {
    type: Object,
    required: true
  }
})

const resultVisible = ref(false)
const color = "#6D0CFF"

const answers = computed(() => {
  let list = [
    {
      value: props.question['correct_answer'],
      isCorrect: true
    },
    ...(props.question['incorrect_answers'].map(value => ({
      value,
      isCorrect: false
    })))
  ]
  return shuffleArray(list)
})

watch(() => props.question.question, {
  immediate: true
})

async function solve(answer) {
  if (resultVisible.value) {
    return;
  }

  resultVisible.value = true
  await asyncTimeout(3000)
  resultVisible.value = false

  if (answer.isCorrect) {
    emit('result', 'correct')
  } else {
    emit('result', 'wrong')
  }
}
</script>

<template>
  <div class="relative pb-40">
    <h1 :class="{ 'tw-text-gray-400': resultVisible }" class="tw-text-3xl tw-transition-colors tw-duration-150 tw-select-none"
      v-html="props.question.question" />
    <div class="tw-mt-10 tw-flex tw-justify-between tw-items-center">
      <div v-for="answer in answers" :key="answer.value" :style="{ backgroundColor: color }" @click="solve(answer)"
        :class="{ 'hover-scale tw-cursor-pointer': !resultVisible }"
        class="tw-rounded-xl tw-min-h-[150px] tw-w-full tw-mx-3 tw-p-3 tw-transition-all tw-duration-150 tw-text-white tw-flex tw-justify-around tw-items-center">
        <p :class="answer.value.length > 16 ? 'tw-text-md' : 'tw-text-3xl tw-text-center'" v-html="answer.value" />
        <img v-if="resultVisible" :src="`/quiz/${answer.isCorrect ? 'correct' : 'wrong'}.png`"
          :class="answer.isCorrect ? 'tw-w-[48px] tw-h-[48px]' : 'tw-w-[35px] tw-h-[35px]'"
          :alt="`${answer.isCorrect ? 'correct' : 'wrong'} answer`" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.hover-scale:hover {
  transform: scale(1.05);
}
</style>
