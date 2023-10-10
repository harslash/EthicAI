<template>
  <form class="form-container d-flex justify-content-around align-items-center flex-column">

    <div class="form-group d-flex">
        <div v-if="!loading" class="pre-generated-prompt" @click="handlePromptClick()">
            {{preGeneratedPrompt}}
        </div>
    </div>

    <div class="form-group">
        <textarea 
        v-model="inputPromptText"
        class="form-control" 
        id="exampleFormControlTextarea1" 
        rows="3"
        placeholder="Ask AI a question!"
        :disabled="loading"></textarea>
        <div class="d-flex justify-content-end py-2">
            <div v-if="loading" class="spinner-grow" role="status">
                <span class="sr-only">Loading...</span>
            </div> 
            <button class="btn btn-primary" 
                    type="button" 
                    @click="clearPrompText()"  
                    :disabled="loading || !isReadyForClearingPrompt">      
                <font-awesome-icon :icon="faTrash" style="color: #ffffff;"></font-awesome-icon>
            </button>
             <send-btn 
                @button-clicked="handleButtonClick"
                :disable-button="loading || !isReadyForNewPrompt"
                ></send-btn>
        </div>
      </div>
      <div class="form-group">
        <textarea 
        v-model="outputPromptText"
        class="form-control output-box" 
        id="exampleFormControlTextarea1" 
        rows="7"
        disabled></textarea>
      </div>
    </form>
</template>

<script lang="ts">
import { defineComponent, ref, watch} from 'vue';
import sendBtn from '../reusable-ui/send-btn.vue';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default defineComponent({
    name: 'ChatgptPromptForm',
    components: {
        'send-btn': sendBtn
    },
    props: {
    },
    setup() {  
        const preGeneratedPrompts = [
            'What is the capital of New Zealand?',
            'Tell me a joke',
            'Describe a rainy day',
            'Describe a perfect weekend',
            'What does a panda look like?',
            'How do you say water in French?',
            "What is the green, orange and white flag?"
        ];

        const getRandomPrompt = (preGeneratedPrompts: string[]) => {
            const randomIndex = Math.floor(Math.random() * preGeneratedPrompts.length);
            return preGeneratedPrompts[randomIndex];
        }

        const preGeneratedPrompt = ref(getRandomPrompt(preGeneratedPrompts));

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

        const handlePromptClick = () => {
            const requestBody = JSON.stringify({ prompt: preGeneratedPrompt.value });
            inputPromptText.value = preGeneratedPrompt.value;

            loading.value = true;

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

            preGeneratedPrompt.value = getRandomPrompt(preGeneratedPrompts);
        }

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
            preGeneratedPrompt,
            handleButtonClick,
            handlePromptClick,
            clearPrompText,
            inputPromptText,
            outputPromptText,
            faTrash
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
    height: 420px;
}

.form-group {
    width: 70%;
}

.form-control {
    border: 2px solid black;
    border-radius: 10px;
    resize: none;
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

.pre-generated-prompt {
    border: 1px solid #A6A6A6;
    border-radius: 6px;
    color: #A6A6A6;
    cursor: pointer;
    text-align: left;
    width: 50%;
    padding: 6px 6px;
}

.pre-generated-prompt:hover {
    background-color:  #e3e3e3;
}


@media (max-width: 767.98px) {
   .form-group {
        width: 80%;
    }

    .pre-generated-prompt {
        width: 80%;
    }
}
</style>
