<template> 
    <div class="w-full hero bg-cover bg-center flex">
        <div class="body">

            <div class="title" style="width: 50%;">
              <h1 class="text-center text-5xl text-white font-bold" style="font-size: 35px;">The best way to learn AI ethics</h1>
            </div>
            
            <div class="subtitle" style="width: 50%;">
              <p class="text-white text-5xl text-left" style="font-size: x-large; line-height: 1.5;">
                      Explore the latest AI technologies and learn how we can use them responsibly.
              </p>
            </div>
            
            <div class="bottom"> 
              <div class="md:flex">
                <button class="get-started-btn" @click="getStartedClicked">Get Started</button>
              </div>
            </div>  

        </div>
    </div>
</template>

<script lang="ts">
  export default {
    methods: {
      getStartedClicked() {
        // Handle the "Get Started" button click event
        alert("Get Started button clicked!");
      },
    },
  };
</script>

<style scoped>
.hero {
    background: url('@/assets/overlayed_bg.png');
    background-repeat: no-repeat;
    background: cover;
    background-size: cover;
    min-height: 500px;
    justify-content: center;
    justify-items: center;
 
}
.body {
  display: flex;
  flex-direction: column;
  padding: 10%; 
  padding-left: 7%; 
  text-align: left; 
  color: white;
}
.bottom {
  flex: 5; /* 30% height */
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* Align content to the bottom */
  align-items: flex-start; /* Align content to the left */
}

.get-started-btn {
  background-color: #6d0cff;
  color: white;
  font-weight: bold;
  font-size: large;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>