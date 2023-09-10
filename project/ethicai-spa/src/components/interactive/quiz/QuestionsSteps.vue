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
  <div class="mx-auto p-16 bg-gray-50 lg:max-w-[60%]">
    <p v-if="state.isLoading">Loading, please wait...</p>
    <div v-else>
      <h2 class="pl-2 text-2xl mb-16">Question {{ state.step + 1 }}.</h2>
      <QuestionBox @result="nextQuestion" :question="currentQuestion" />
    </div>
  </div>
</template>