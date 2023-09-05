<template>
  <div class="container">
    <div class="left-container">
      <div class="image">
        <img src="../../assets//purple_robot.jpeg" alt="Image">
      </div>
      <div>
        <p class="module-name">The Rise of DALL·E</p>
        <p class="module-desc">In this module, you will discover the world of AI generated art. The highs and lows;
          including the impact these generators have on artists and creative integrity.</p>
      </div>
    </div>
    <div class="right-container">
      <div class="top-child">
        <!-- Content for the top child container (70% height) -->
        <div class="module-structure"><u>Module Structure</u></div>
        <ul class="contents">
          <li>The Rise of DALL·E</li>
          <li>AI Generated vs Human Art</li>
          <li>Copyright and Copywrong</li>
        </ul>
      </div>
      <div class="bottom-child">
        <!-- Content for the bottom child container (30% height) -->
        <div class="continue-button">
          <button @click="continueClicked">Continue</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent} from 'vue';
export default defineComponent ({
  name: 'ModuleOverview',
  methods: {
    continueClicked() {
      // Handle the "Continue" button click event here
      alert("Continue button clicked!");
    },
  },
});
</script>

<style scoped>
/* Add your CSS styles here, scoped to this component */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  font-size: 20px;
}

p {
  font-weight: lighter;
}

.container {
  width: 80%;
  margin: 20px auto;
  border: 1px solid #000;
  padding: 20px;
  overflow: hidden;
  border-radius: 10px;
  display: flex;
  align-items: stretch; /* Stretch containers to equal height */
}

.left-container,
.right-container {
  flex: 1; /* Equal width for both containers */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Push content to top and bottom */
  text-align: center;
}

.top-child {
  flex: 95; /* 70% height */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center vertically */
  align-items: center; /* Center horizontally */
}

.bottom-child {
  flex: 5; /* 30% height */
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* Align content to the bottom */
  align-items: flex-end; /* Align content to the right */
  padding: 10px;
}

.module-name {
  font-weight: bold;
  font-size: 30px;
  color: #6d0cff;
}

.module-structure {
  font-weight: bold;
  text-align: center;
  color: #c324ff;
  margin-bottom: 10px;
  margin-top: 20px;
}

.contents {
  margin: 20px;
  padding: 0;
  text-align: left;
  font-size: 15px;
}

.image img {
  width: 300px;
  height: 296px;
}

.module-desc {
  margin: 30px;
}

.contents li {
  list-style-type: circle;
  margin-bottom: 20px;
  margin-top: 20px;
}

.continue-button button {
  background-color: #6d0cff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
