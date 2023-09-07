<template>
  <form class="form-container d-flex justify-content-center align-items-center flex-wrap">
      <div class="form-group">
        <div v-if="loading" class="spinner-grow text-primary" role="status">
            <span class="sr-only">Loading...</span>
        </div> 
        <textarea 
        class="form-control" 
        id="exampleFormControlTextarea1" 
        rows="3"
        placeholder="Enter your input here"
        :disabled="loading"></textarea>
        <div class="d-flex justify-content-end pt-2">
             <send-btn 
                @button-clicked="handleButtonClick"
                :disable-button="loading"></send-btn>
        </div>
      </div>
      <div class="form-group">
        <textarea 
        class="form-control" 
        id="exampleFormControlTextarea1" 
        rows="3"
        :disabled="loading"></textarea>
      </div>
    </form>
</template>

<script lang="ts">
import { defineComponent, ref} from 'vue';
import sendBtn from '../reusable-ui/send-btn.vue';
export default defineComponent({
    name: 'ChatgptPromptForm',
    components: {
        'send-btn': sendBtn
    },
    props: {
    },
    setup() {
        const loading = ref(false);

        const handleButtonClick = () => {
            loading.value = true;
            setTimeout(() => {
                console.log('GET request completed');
                // Set loading to false at the end
                loading.value = false;
            }, 2000);
        };

        return {
            loading, 
            handleButtonClick
        }
    }
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
