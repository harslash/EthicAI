<script setup>
import { shuffleArray } from "../../../../utils"
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

let currentResult;

watch(() => props.question.question, {
  immediate: true
})

async function solve(answer) {
  if (resultVisible.value) {
    return;
  }

  resultVisible.value = true

  if (answer.isCorrect) {
    currentResult = 'correct'
  } else {
    currentResult = 'wrong'
  }
}

async function nextQuestion() {
  emit('result', currentResult)
}

function parsedExplanation(explanation) {
  if (explanation) {
    // Replace \n with <br> only if \n exists in the text
    return explanation.includes("\n")
      ? explanation.replace(/\n/g, '<br>')
      : explanation;
  }
  return '';
}
</script>

<template>
  <div class="relative pb-40">
    <h1 :class="{ 'tw-text-gray-400': resultVisible }"
      class="tw-text-3xl tw-transition-colors tw-duration-150 tw-select-none" v-html="props.question.question" />
    <div class="tw-mt-10 tw-flex tw-justify-between tw-items-center md:tw-block">
      <button v-for="answer in answers" :key="answer.value" :style="{ backgroundColor: color }" @click="solve(answer)"
        :class="{ 'hover-scale tw-cursor-pointer': !resultVisible }"
        class="tw-rounded-xl tw-min-h-[150px] tw-w-full tw-mx-3 tw-p-3 tw-transition-all tw-duration-150 tw-border-none tw-text-white tw-flex tw-justify-around tw-items-center md:tw-min-h-[100px] md:tw-my-2 md:tw-p-2 md:tw-mx-0">
        <p class="tw-text-md md:tw-text-sm" v-html="answer.value" />
        <img v-if="resultVisible" :src="`/quiz/${answer.isCorrect ? 'correct1' : 'wrong1'}.svg`"
          :class="'tw-w-[35px] tw-h-[35px]'" :alt="`${answer.isCorrect ? 'correct' : 'wrong'} answer`"
          :title="`${answer.isCorrect ? 'Correct' : 'Wrong'} answer`" />
      </button>
    </div>
    <div v-if="resultVisible" class="tw-text-lg tw-text-center tw-p-5 tw-mt-5 tw-rounded-lg explanation-bg md:tw-text-sm">
      <p class="explanation-text" v-html="parsedExplanation(props.question.explanation)"></p>
    </div>
    <div v-if="resultVisible" class="tw-text-center">
      <button @click="resultVisible = false; nextQuestion();" :style="{ backgroundColor: '#6D0CFF' }"
        class="tw-m-auto tw-py-2 tw-px-5 tw-mt-5 tw-h-12 tw-p-2 tw-cursor-pointer tw-rounded-xl tw-border-none">
        <p class="tw-text-xl tw-text-center tw-text-white">Next Question</p>
      </button>
    </div>
  </div>
</template>

<style scoped>
.hover-scale:hover {
  transform: scale(1.05);
}

.explanation-bg {
  background-color: rgb(209, 231, 221);
}

.explanation-text {
  color: rgb(10, 54, 34);
  margin: 0;
}
</style>
