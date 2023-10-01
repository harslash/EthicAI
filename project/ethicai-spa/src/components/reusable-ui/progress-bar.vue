<template>
    <div class="progress-container">
      <button @click="decrementProgress" class="nav-button left-arrow">&lt;</button>
      <div class="progress-wrapper">
        <div class="progress-bar" :style="{ width: progress + '%' }"></div>
        <div class="center-bubble"></div>
      </div>
      <button @click="incrementProgress" class="nav-button right-arrow">&gt;</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        progress: 0,
      };
    },
    methods: {
      incrementProgress() {
        if (this.progress < 100) {
          this.progress += 10; // You can adjust the increment value
        }
      },
      decrementProgress() {
        if (this.progress > 0) {
          this.progress -= 10; // You can adjust the decrement value
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Define the styles for the progress container, progress bar, and navigation buttons (scoped to this component) */
  .progress-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #f0f0f0;
    height: 40px;
    border-bottom: 1px solid #ccc; /* Grey outline */
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 999; /* Ensure it's always on top */
  }
  
  .progress-wrapper {
    flex-grow: 1;
    height: 100%;
    background-color: white;
    border-radius: 20px; /* Rounded rectangle */
    overflow: hidden;
  }
  
  .progress-bar {
    height: 100%;
    background-color: purple;
    border-radius: 20px; /* Rounded rectangle */
    transition: width 0.3s ease-in-out;
  }
  
  .nav-buttons {
    margin-right: 10px;
  }
  
  button {
    padding: 5px 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>