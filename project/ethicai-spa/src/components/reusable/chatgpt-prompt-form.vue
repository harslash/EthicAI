<template>
  <form class="form-container d-flex justify-content-center align-items-center flex-wrap">
      <div class="form-group">
        <textarea 
        class="form-control" 
        id="exampleFormControlTextarea1" 
        rows="3"
        placeholder="Enter your input here"></textarea>
        <div class="d-flex justify-content-end pt-2">
             <send-btn @button-clicked="handleButtonClick"></send-btn>
        </div>
      </div>
      <div class="form-group">
        <textarea 
        class="form-control" 
        id="exampleFormControlTextarea1" 
        rows="3"></textarea>
      </div>
    </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import sendBtn from '../reusable-ui/send-btn.vue';
export default defineComponent({
    name: 'ChatgptPromptForm',
    components: {
        'send-btn': sendBtn
    },
    props: {
    },
    methods: {
        handleButtonClick() {
            console.log('clicked')
        }
    },
});
</script>

<style scoped>
/* Add your CSS styles here, scoped to this component */
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap');
.form-container {
    border: 2px solid #E8E4E4;
    box-shadow: 5px 5px 5px #E8E4E4;
    border-radius: 20px;
}

.form-group {
    width: 60%;
}

.form-control {
    border: 2px solid black;
     border-radius: 10px;
}


</style>
