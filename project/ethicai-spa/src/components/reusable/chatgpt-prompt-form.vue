<template>
  <form class="form-container d-flex justify-content-center align-items-center flex-wrap">
      <div class="form-group">
        <textarea 
        v-model="inputPromptText"
        class="form-control" 
        id="exampleFormControlTextarea1" 
        rows="3"
        placeholder="Ask AI a question!"
        :disabled="loading"></textarea>
        <div class="d-flex justify-content-end pt-2">
            <div v-if="loading" class="spinner-grow" role="status">
                <span class="sr-only">Loading...</span>
            </div> 
            <button class="btn btn-primary" 
                    type="button" 
                    @click="clearPrompText()"  
                    :disabled="loading || !isReadyForClearingPrompt">Clear</button>
             <send-btn 
                @button-clicked="handleButtonClick"
                :disable-button="loading || !isReadyForNewPrompt"
                ></send-btn>
        </div>
      </div>
      <div class="form-group">
        <textarea 
        v-model="outputPromptText"
        class="form-control" 
        id="exampleFormControlTextarea1" 
        rows="4"
        disabled></textarea>
      </div>
    </form>
</template>

<script lang="ts">
import { defineComponent, ref, watch} from 'vue';
import sendBtn from '../reusable-ui/send-btn.vue';
export default defineComponent({
    name: 'ChatgptPromptForm',
    components: {
        'send-btn': sendBtn
    },
    props: {
    },
    setup() {
        const inputPromptText = ref('');
        const outputPromptText = ref('')
        const loading = ref(false);
        let isReadyForNewPrompt = ref(true);
        let isReadyForClearingPrompt = ref(false);

        const clearPrompText = () => {
            inputPromptText.value = '';
            outputPromptText.value = ''
            isReadyForNewPrompt.value = true;
        }

        const handleButtonClick = () => {
            const requestBody = JSON.stringify({ prompt: inputPromptText.value });

            loading.value = true;
            isReadyForNewPrompt.value = false;

             const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: requestBody,
            };

            fetch('https://t263lt6ekmv4vyo4cn7edexj4a0rejuw.lambda-url.ap-southeast-2.on.aws/', requestOptions)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json(); 
                })
                .then((data) => {
                    outputPromptText.value = data.response;
                    loading.value = false;
                })
                .catch((error) => {
                    console.error('Error:', error);
                    loading.value = false;
                });
        };

        watch(inputPromptText, (newVal: string) => {
            if (newVal.length > 0) {
                isReadyForClearingPrompt.value = true;
            } else {
                isReadyForClearingPrompt.value = false;
            }
        });

        return {
            loading, 
            isReadyForNewPrompt,
            isReadyForClearingPrompt,
            handleButtonClick,
            clearPrompText,
            inputPromptText,
            outputPromptText
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

.spinner-grow {
    background-color: #BF8FFE;
}

.btn {
       background-color: #6D0CFF;
}

.btn:hover {
  background-color: #8638fc;
}


</style>
