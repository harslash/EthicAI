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
  <div class="mx-auto p-16 bg-gray-50 lg:max-w-[60%]">
    <div>
      <p class="text-xl text-cyan-500">Congratulations 🎉,<br />
        You answered
        <b>{{ props.result.score }}/{{ props.result.numQuestions }}</b>
        questions correctly!
      </p>
    </div>
  </div>
</template>

<style scoped></style>
