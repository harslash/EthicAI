<script>
export default {
  props: ['module_name']
}
</script>

<template>
  <div class="container tw-h-full tw-w-full tw-justify-center tw-items-center tw-flex quiz-start-container">
    <div class="row">
      <div class="col-sm px-md-5">
        <p class="tw-text-lg">QUIZ</p>
        <h2 class="tw-text-4xl tw-leading-relaxed tw-font-bold">You have completed "{{ module_name }}". Take this quick
          quiz to check your understanding.</h2>
        <div :style="{ backgroundColor: '#6D0CFF' }" @click="$emit('quiz-started')"
          class="tw-justify-center tw-mt-8 tw-w-40 tw-h-12 tw-p-2 tw-cursor-pointer tw-rounded-xl tw-transition-all tw-duration-150">
          <p class="tw-text-xl tw-text-center tw-text-white">Start Quiz</p>
        </div>
      </div>
      <div class="col-sm px-md-5">
        <div class="image tw-float-right">
          <img class="tw-rounded-xl" :src="require(`@/assets/module_quiz.png`)" alt="image">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .image img {
    width: auto;
    height: 475px;
  }

  @media (max-width: 767.98px) {
    .image img {
      height: 300px;
    }
  }
</style>