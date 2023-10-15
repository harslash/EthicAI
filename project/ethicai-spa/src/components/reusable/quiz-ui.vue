<template>
  <div class="quiz-ui-card">
    <!-- Icon in the upper left corner -->
    <i v-if="isHappy" class="fas fa-smile" style="font-size: 1.5em;" :style="{color: isNormal? '#6D0CFF': '#55E86D'}" title="Recommended"></i>

    <i v-if="!isHappy" class="fas fa-frown" style="font-size: 1.5em;" :style="{ color: isNormal ? '#6D0CFF' : '#FF0000'}" title="Not recommended"></i>

    <!-- Text input via props -->
    <div class="content">
      {{ cardText }}
    </div>

    <!-- Icon and circle in the bottom right corner -->
    <div class="icon-container">
      <span class="icon-stack">
        <i class="fas fa-circle fa-stack-2x" style="color: #6d0cff; font-size: 1.5em;"></i>
        <i class="fas fa-paper-plane fa-stack-1x" style="color: #ffffff; font-size: 0.75em;"></i>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'QuizUICard',
  props: {
    cardText: String,
    isHappy: {
      type: Boolean,
      default: true
    },
    isNormal: {
      type: Boolean,
      default: true
    }
    // Prop for the card text
  },
});
</script>

<style scoped>
.quiz-ui-card {
  width: 400px;
  height: 100px;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  margin: 10px;
}

.content {
  flex: 1;
}

.icon-container {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 10px;
}

.icon-stack {
  position: relative;
  display: inline-block;
  width: 1.5em; /* Adjusted width to match the smiley icon size */
  height: 1.5em; /* Adjusted height to match the smiley icon size */
  line-height: 1.5em; /* Adjusted line-height to match the smiley icon size */
  vertical-align: middle;
}

.icon-stack-1x,
.icon-stack-2x {
  position: absolute;
  left: 0;
  width: 100%;
  text-align: center;
}

.icon-stack-1x {
  line-height: inherit;
}

.icon-stack-2x {
  font-size: 1.5em;
}

@media (max-width: 767.98px) {
   .quiz-ui-card{
        width: 320px;
    }
}
</style>
