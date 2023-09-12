<template>
  <div class="tw-grid tw-place-items-center tw-mx-auto tw-p-16 tw-bg-gray-50 tw-w-full tw-h-full">
    <h1 class="tw-text-center tw-my-5 tw-p-2 tw-text-4xl">Quiz Review</h1>
    <div :style="{ backgroundColor: '#6D0CFF' }" @click="$emit('quiz-started')"
      class="tw-flex tw-justify-center tw-items-center tw-w-80 tw-min-h-[85px] tw-cursor-pointer tw-rounded-xl hover-scale tw-transition-all tw-duration-150">
      <p class="tw-text-2xl tw-text-center tw-top-1/2 tw-text-white">Start</p>
    </div>
  </div>
</template>

<style scoped>
.hover-scale:hover {
  transform: scale(1.05);
}
</style>