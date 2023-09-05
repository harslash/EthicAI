<template>
  
  <div id="wrapper">
    <div id="first">
      <h2>Variety of AI technology</h2>
        <div id="image-div">
          <img id="image" :src="require('@/assets/undraw_developer_activity_re_39tg 1.png')">
        </div>
      
      <div id="text">
        Learn AI ethics through real-world use cases of the latest AI technologies, such as ChatGPT, DALL-E and Whisper AI. 
      </div>
    </div>
    
    <div id="second">
      <h2>Interactive learning</h2>
        <div id="image-div">
          <img id="image" :src="require('@/assets/undraw_active_options_re_8rj3 1.png')"  style="height: 225px; width: 189px;">
        </div>
      
      <div id="text">  
        Quickly grasp relevant ideas on AI ethics through visual and interactive demos. Save yourself from reading long, boring literature and articles.
      </div> 
    </div>
    
    <div id="third">
      <h2>All in one place</h2>
        <div id="image-div">
          <img id="image" :src="require('@/assets/undraw_knowledge_re_5v9l 1.png')" style="height: 229px; width: 247px;">
        </div>
      
      <div id="text"> 
        Explore the intricacies of AI ethics through a series of fun and content-filled modules. All modules are easily accessible for you to continue learning anytime and anywhere. 
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'LandingCard',
    data() {
        return {
        }
    },
    methods: {
    }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');

h2 {
  font-family: "Open Sans", sans-serif;
  font-size: 24px;
  font-weight: 700; 
}

#wrapper {
  display: flex;
  flex-wrap: wrap; /* Wrap elements so they flow below each other */
  overflow: hidden;
  flex-direction: row;
  float: center;
  padding: 1%;
  text-align: center;
}
#first {
    display:flexbox;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    padding: 3%;
    padding-left: 5%;
    padding-right: 5%;
    float: left;
}
#second {
    display:flexbox;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    padding-top: 3%;
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 3%;
    float: left;
}
#third {
    display:flexbox;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    padding: 3%;
    padding-left: 5%;
    padding-right: 5%;
    float: left;
}
#image {
  margin: 10px;
  align-self: center;
  padding-top: 7%;
  padding-bottom: 7%;
}
#image-div {
  display:flexbox;
  padding: 8%;
  float: center;
}
#text {
  float: left; 
  clear: both;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  font-weight: 400; 
}
</style>