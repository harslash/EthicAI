<script setup>
import QuestionBox from "@/components/interactive/quiz/QuestionBox.vue"
import { reactive, onMounted, defineProps, computed } from "vue"

const emit = defineEmits(['finished'])

const props = defineProps({
  category: {
    type: String,
    required: true
  }
})

const state = reactive({
  step: 0,
  score: 0,
  questions: [],
  isLoading: true
})

const currentQuestion = computed(() => (state.questions[state.step]))

onMounted(async () => {
  state.isLoading = true
  await fetchQuestions()
  state.isLoading = false
})

async function fetchQuestions() {
  try {
    const response = await fetch(`/quiz/${props.category}.json`);
    const results = await response.json();
    state.questions = results.results;
    console.log
    state.step = 0;
  } catch (e) {
    console.error(e);
  }
}

function nextQuestion(result) {
  if (result === 'correct') {
    state.score++
  }

  if (++state.step === state.questions.length) {
    emit('finished', {
      score: state.score,
      numQuestions: state.questions.length
    })
  }
}


</script>

<template>
  <div class="tw-mx-auto tw-p-16 tw-bg-gray-50 tw-h-full">
    <p v-if="state.isLoading">Loading, please wait...</p>
    <div v-else>
      <h2 class="tw-pl-2 tw-text-2xl tw-mb-16">Question {{ state.step + 1 }}.</h2>
      <QuestionBox @result="nextQuestion" :question="currentQuestion" />
    </div>
  </div>
</template>