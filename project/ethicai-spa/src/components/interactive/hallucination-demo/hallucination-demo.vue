<template>
   <div class="container">
        <div class="row pb-5">
            <div class="col-md-12 d-flex justify-content-center flex-wrap">
                <chatgpt-ui-card :question-text="questionText" :answer-text="answerText"></chatgpt-ui-card>
            </div>
        </div>
        <div class="row" :class="{ 'hidden': !showButtons}">
            <div class="col-md-12 d-flex justify-content-around pb-5">
                <purple-btn-outline v-if="isReadyForAnswer" :text="'Hallucination'" @click="handleHallucinationBtnClick(true)"> </purple-btn-outline>
                <purple-btn-outline v-if="isReadyForAnswer" :text="'Correct'" @click="handleCorrectBtnClick(false)"> </purple-btn-outline>
            </div>
            <div class="col-md-2"></div>
            <div  v-if="isQuizStarted" class="col-md-8 d-flex justify-content-center">
                <div class="explanation-container" :class="isUserCorrect ? 'alert alert-success' : 'alert alert-danger'">
                    <p v-if="isUserCorrect" class="h5">Well done!</p>
                    <p v-else class="h5">Try again!</p>

                    <p v-if="isHallucination" class="h6">ChatGPT produces hallucination here</p>
                    <p v-else class="h6">The response is factually correct</p>

                    <p>{{ explanationText }}</p>

                    <purple-btn-outline v-if="isQuizStarted" :text="'Next'" @click="handleNextBtnClick()"> </purple-btn-outline>
                </div>
            </div>
            <div class="col-md-2"></div>
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
    setup(_, context) {
        const handleHallucinationBtnClick = (value: boolean) => {
            if (!isQuizStarted.value) {
                isQuizStarted.value = true;
            }

            if (!isReadyForAnswer.value) {
                isReadyForAnswer.value = true;
            } else {
                isReadyForAnswer.value = false;
            }

            if (questionId.value < 5) {
                if (value == jsonData.data[questionId.value].isHallucination) {
                    isUserCorrect.value = true;
                    isHallucination.value = true;
                } else {
                    isUserCorrect.value = false
                    isHallucination.value = false;
                }
                questionId.value += 1;
            }
        }

        const handleCorrectBtnClick = (value: boolean) => {
            if (!isQuizStarted.value) {
                isQuizStarted.value = true;
            }

            if (!isReadyForAnswer.value) {
                isReadyForAnswer.value = true;
            } else {
                isReadyForAnswer.value = false;
            }

            if (questionId.value < 5) { 
                if (value == jsonData.data[questionId.value].isHallucination) {
                    isUserCorrect.value = true;
                    isHallucination.value = false;
                } else {
                    isUserCorrect.value = false
                    isHallucination.value = true;
                }
                questionId.value += 1;
             }  
             
        }

        const handleNextBtnClick = () => {
            if (questionId.value == 5) {
                context.emit('end-of-demo-event');
                showButtons.value = false;
            }
            
            isReadyForAnswer.value = true;
            isQuizStarted.value = false;
            refreshCard();
        }

        const refreshCard = () => {
            if (questionId.value < 5) {
                questionText.value = jsonData.data[questionId.value].prompt;
                answerText.value = jsonData.data[questionId.value].response;
                explanationText.value = jsonData.data[questionId.value].explanation;
            }  
        }

        const questionText = ref('');
        const answerText = ref('');
        const explanationText = ref('');
        const isUserCorrect = ref(false);
        const isHallucination = ref(false);
        const isQuizStarted = ref(false);
        const isReadyForAnswer = ref(true)

        const questionId = ref(0);
        const showButtons = ref(true);

        refreshCard();

        return {
            questions: jsonData.data,
            handleHallucinationBtnClick,
            handleCorrectBtnClick,
            handleNextBtnClick,
            questionText,
            explanationText,
            answerText,
            isUserCorrect,
            isHallucination,
            isQuizStarted,
            isReadyForAnswer,
            showButtons
        }
    },
});
</script>

<style scoped>
/* Add your CSS styles here, scoped to this component */
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap');

.hidden {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
}

</style>
