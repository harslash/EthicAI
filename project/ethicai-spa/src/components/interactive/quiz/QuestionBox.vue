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
    <h1 :class="{ 'text-gray-400': resultVisible }" class="text-3xl transition-colors duration-150 select-none"
      v-html="props.question.question" />
    <div class="mt-10 flex justify-between items-center">
      <div v-for="answer in answers" :key="answer.value" :style="{ backgroundColor: color }" @click="solve(answer)"
        :class="{ 'hover:scale-105 cursor-pointer': !resultVisible }"
        class="rounded-xl min-h-[150px] w-full mx-3 p-3 transition-all duration-150 text-white flex justify-around items-center">
        <p :class="answer.value.length > 16 ? 'text-md' : 'text-3xl text-center'" v-html="answer.value" />
        <img v-if="resultVisible" :src="`/quiz/${answer.isCorrect ? 'correct' : 'wrong'}.png`"
          :class="answer.isCorrect ? 'w-[48px] h-[48px]' : 'w-[35px] h-[35px]'"
          :alt="`${answer.isCorrect ? 'correct' : 'wrong'} answer`" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
