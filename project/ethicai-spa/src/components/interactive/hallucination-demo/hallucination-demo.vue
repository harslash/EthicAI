<template>
   <div class="container">
        <div class="row pb-5">
            <div class="col-md-12 d-flex justify-content-center flex-wrap">
                <chatgpt-ui-card :question-text="questionText" :answer-text="answerText"></chatgpt-ui-card>
            </div>
        </div>
        <div class="row">
             <div class="col-md-12 d-flex justify-content-around">
                <purple-btn-outline :text="'Hallucination'" @click="handleHallucinationBtnClick()"> </purple-btn-outline>
                <purple-btn-outline :text="'Correct'" @click="handleCorrectBtnClick()"> </purple-btn-outline>
            </div>
        </div>
   </div>
</template>

<script lang="ts">
import { defineComponent, ref} from 'vue';
import ChatGPTUICard from '../../reusable/chatgpt_ui.vue';
import jsonData from './data.json'
import purpleBtnOutline from '../../reusable-ui/purple-btn-outline.vue';

export default defineComponent({
    name: 'HallucinationDemo',
    components: {
        'chatgpt-ui-card': ChatGPTUICard,
        'purple-btn-outline': purpleBtnOutline
    },
    props: {
    },
    setup() {
        const handleHallucinationBtnClick = () => {
            if (questionId.value < 5) {
                if (jsonData.data[questionId.value].isHallucination) {
                    console.log('Well done')
                } else {
                    console.log('Incorrect, the prompt is factually correct')
                }
                questionId.value += 1;
            }
          
            refreshCard();
        }

        const handleCorrectBtnClick = () => {
            if (questionId.value < 5) { 
                if (!jsonData.data[questionId.value].isHallucination) {
                    console.log('Well done')
                } else {
                    console.log('Incorrect, the prompt is a type of hallucination')
                }
                questionId.value += 1;
             }
          
            refreshCard();
        }

        const refreshCard = () => {
            if (questionId.value < 5) {
                questionText.value = jsonData.data[questionId.value].prompt;
                answerText.value = jsonData.data[questionId.value].response;
            }  
        }

        const questionText = ref('');
        const answerText = ref('');
        const questionId = ref(0);

        refreshCard();




        return {
            questions: jsonData.data,
            handleHallucinationBtnClick,
            handleCorrectBtnClick,
            questionText,
            answerText
        }
    },
});
</script>

<style scoped>
/* Add your CSS styles here, scoped to this component */
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap');
</style>
