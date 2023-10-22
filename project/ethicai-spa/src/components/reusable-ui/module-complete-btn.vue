<template>
  <button type="button" class="module-complete-button">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'ModuleCompleteButton',
  props: {
    text: String
  }
};
</script>

<style scoped>
.module-complete-button {
  background-color: #6D0CFF;
  color: white;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 18px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 3px;
}

.module-complete-button:hover {
  background-color: #8638fc;
}
</style>