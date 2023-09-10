<template>
  <div class="mx-auto p-16 bg-gray-50 lg:max-w-[60%]">
    <h1 class="text-center my-10 p-2 text-3xl">Quiz Review</h1>
    <div :style="{ backgroundColor: '#6D0CFF' }" @click="$emit('quiz-started')"
      class="flex justify-center items-center min-h-[85px] cursor-pointer rounded-xl hover:scale-105 transition-all duration-150">
      <p class="text-2xl text-center top-1/2 text-white">Start</p>
    </div>
  </div>
</template>