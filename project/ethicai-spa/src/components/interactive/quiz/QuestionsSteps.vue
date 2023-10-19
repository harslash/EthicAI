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
  <div class="container tw-h-full tw-w-full tw-justify-center tw-items-center">
    <div class="tw-mx-auto tw-p-16 tw-h-full md:tw-p-1">
      <p v-if="state.isLoading">Loading, please wait...</p>
      <div v-else>
        <p class="tw-pl-2 tw-text-lg tw-mb-16">QUESTION {{ state.step + 1 }}.</p>
        <QuestionBox @result="nextQuestion" :question="currentQuestion" />
      </div>
    </div>
  </div>
</template>