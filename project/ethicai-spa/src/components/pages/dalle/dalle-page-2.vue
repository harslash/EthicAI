<template>
    <nav-bar/>
    <div class="container-fluid page-container text-center">
        <div class="section-one container mb-5 text-section" :class="{ 'hidden': !showFirstSection}">
            <div class="row h-10 mb-5">
                <div class="col-md-12">
                    <h1 class="mt-5">AI Generated vs. Human Art</h1>
                </div>
            </div>

            <div class="row h-30">
                <div class="col-md-4 d-flex align-items-center">
                    <figure>
                        <img class="img-a" src="../../../assets//Robot_Head_by_DALL-E_2.jpg" alt="Escher Robot Head by DALL-E 2" style="display: inline-block;  margin: 25px 10px; border-radius: 5px;"/>
                        <figcaption> <b>Escher Robot Head by DALL-E 2</b> </figcaption>
                    </figure>
                </div>

                <div class="col-md-8 d-flex align-items-center">
                    <div class="d-flex justify-content-center flex-wrap">
                        <p class="text-left section-text">
                            There is no agreed-upon definition of art. It may be subjective. Experts disagree. What we call AI art, differs from human-made art because it is driven by commands and instructions, rather than an expression of genuine emotion.                        
                        </p>

                        <p class="text-left section-text">
                            AI generators merge visual features from pre-existing images to assemble a requested concept. Some claim 'true' art must be unique; others argue that even human-made art might just be a recombination based on existing styles — which in some ways is similar to generative AI (Nanou, 2022).
                        </p>

                        <p class="text-left section-text">
                            As different generative AI models are trained on larger datasets and approach those styles more faithfully, it becomes increasingly challenging to distinguish between AI generated art and human art — especially if AI generators draw influences from pre-existing images.
                        </p>

                        <p class="text-left section-text">
                            Can you tell art created by a human apart from AI images? <b>Let's find out!</b>
                        </p>
                    </div>
                </div>
            </div>
            <div class="row h-20">
                <div class="col-md-12 d-flex justify-content-end">
                    <purple-btn
                        v-if="!section1Completed"
                        :text="'Continue'"
                        @click="showSecondSection = true; scrollIntoSecondSection(); section1Completed = true;"
                        />
                </div>
            </div>
        </div>
        <div ref="secondSection" class="section-two container mb-5 text-section" :class="{ 'hidden': !showSecondSection }">
            <div class="row h-10 mb-5">
                <div class="col-md-12">
                    <h3>Which artwork was created by a <em>human</em>?</h3>
                </div>
            </div>

            <div class="row h-30">
                <!-- quiz, has its own 'section' for each question --> 

                <!-- First question -->
                <div id="firstQuestion" ref="firstQuestion" class="question-one container mb-5 text-section" :class="{ 'hidden': !showFirstQuestion}">
                    <div class="col-md-12 d-flex align-self-center justify-content-center" >          
                        <div class="container">
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <div class="card" :class="firstQuestionShowCorrect? 'purp': 'non-purp-grey'" @click="onFirstCorrectClick(); showSecondQuestion = true; scrollIntoSecondQuestion()" role="link">
                                        <div class="card-body">
                                            <img class="img-b" src="../../../assets//real_image_1.jpg" alt="Dog with birds" style="display: inline-block; border-radius: 5px;"/>
                                        </div>
                                    </div>

                                    <div class="correct" :class="{ 'hidden': !firstQuestionShowCorrect}">
                                        <p style="display: block;"> <span style="color: #6D0CFF"> Correct! +1 point </span> <br> You successfully identified the work of a human.</p>
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <div class="card" :class="firstQuestionShowIncorrect? 'grey': 'non-purp-grey'" @click="onFirstIncorrectClick(); showSecondQuestion = true; scrollIntoSecondQuestion()" role="link">
                                        <div class="card-body">
                                            <img class="img-b" src="../../../assets//fake_image_1.png" alt="Dog with birds" style="display: inline-block;  border-radius: 5px;"/>
                                        </div>
                                    </div>

                                    <div class="incorrect" :class="{ 'hidden': !firstQuestionShowIncorrect}">
                                        <p style="display: block;"> <span style="color: #707070;"> Incorrect! </span> <br> This was created by a machine, not a person.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            <!-- Second question -->
            <div ref="secondQuestion" class="question-two container mb-5 text-section" :class="{ 'hidden': !showSecondQuestion}">
                <div class="col-md-12 d-flex align-self-center justify-content-center" >          
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <div class="card" :class="secondQuestionShowCorrect? 'purp': 'non-purp-grey'" @click="onSecondCorrectClick(); showThirdQuestion = true; scrollIntoThirdQuestion()" role="link">
                                    <div class="card-body">
                                        <img class="img-b" src="../../../assets//real_image_2.jpg" alt="Lithographic image" style="display: inline-block; border-radius: 5px;"/>
                                    </div>
                                </div>

                                <div class="correct" :class="{ 'hidden': !secondQuestionShowCorrect}">
                                    <p style="display: block;"> <span style="color: #6D0CFF"> Correct! +1 point </span> <br> You successfully identified the work of a human.</p>
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <div class="card" :class="secondQuestionShowIncorrect? 'grey': 'non-purp-grey'" @click="onSecondIncorrectClick(); showThirdQuestion = true; scrollIntoThirdQuestion()" role="link">
                                    <div class="card-body">
                                        <img class="img-b" src="../../../assets//fake_image_2.png" alt="Lithographic image" style="display: inline-block; border-radius: 5px;"/>
                                    </div>
                                </div>

                                <div class="incorrect" :class="{ 'hidden': !secondQuestionShowIncorrect}">
                                    <p style="display: block;"> <span style="color: #707070;"> Incorrect! </span> <br> This was created by a machine, not a person.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Third question -->
            <div ref="thirdQuestion" class="question-three container mb-5 text-section" :class="{ 'hidden': !showThirdQuestion}">
                <div class="col-md-12 d-flex align-self-center justify-content-center" >          
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <div class="card" :class="thirdQuestionShowIncorrect? 'grey': 'non-purp-grey'" @click="onThirdIncorrectClick(); showFourthQuestion = true; scrollIntoFourthQuestion()" role="link">
                                    <div class="card-body">
                                        <img class="img-b" src="../../../assets//fake_image_3.png" alt="Nature image" style="display: inline-block; border-radius: 5px;"/>
                                    </div>
                                </div>

                                <div class="incorrect" :class="{ 'hidden': !thirdQuestionShowIncorrect}">
                                    <p style="display: block;"> <span style="color: #707070;"> Incorrect! </span> <br> This was created by a machine, not a person.</p>
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <div class="card" :class="thirdQuestionShowCorrect? 'purp': 'non-purp-grey'" @click="onThirdCorrectClick(); showFourthQuestion = true; scrollIntoFourthQuestion()" role="link">
                                    <div class="card-body">
                                        <img class="img-b" src="../../../assets//real_image_3.jpg" alt="Nature image" style="display: inline-block; border-radius: 5px;"/>
                                    </div>
                                </div>

                                <div class="correct" :class="{ 'hidden': !thirdQuestionShowCorrect}">
                                    <p style="display: block;"> <span style="color: #6D0CFF"> Correct! +1 point </span> <br> You successfully identified the work of a human.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Fourth question-->
            <div ref="fourthQuestion" class="question-four container mb-5 text-section" :class="{ 'hidden': !showFourthQuestion}">
                <div class="col-md-12 d-flex align-self-center justify-content-center" >          
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <div class="card" :class="fourthQuestionShowIncorrect? 'grey': 'non-purp-grey'" @click="onFourthIncorrectClick(); showFifthQuestion = true; scrollIntoFifthQuestion()" role="link">
                                    <div class="card-body">
                                        <img class="img-b" src="../../../assets//fake_image_4.png" alt="Print of people" style="display: inline-block; border-radius: 5px;"/>
                                    </div>
                                </div>

                                <div class="incorrect" :class="{ 'hidden': !fourthQuestionShowIncorrect}">
                                    <p style="display: block;"> <span style="color: #707070;"> Incorrect! </span> <br> This was created by a machine, not a person.</p>
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <div class="card" :class="fourthQuestionShowCorrect? 'purp': 'non-purp-grey'" @click="onFourthCorrectClick(); showFifthQuestion = true; scrollIntoFifthQuestion()" role="link">
                                    <div class="card-body">
                                        <img class="img-b" src="../../../assets//real_image_4.jpg" alt="Dog with birds" style="display: inline-block; border-radius: 5px;"/>
                                    </div>
                                </div>

                                <div class="correct" :class="{ 'hidden': !fourthQuestionShowCorrect}">
                                    <p style="display: block;"> <span style="color: #6D0CFF"> Correct! +1 point </span> <br> You successfully identified the work of a human.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>                        

            <div class="row h-30">
            <!-- Fifth question -->
            <div ref="fifthQuestion" class="question-five container mb-5 text-section" :class="{ 'hidden': !showFifthQuestion}">
                <div class="col-md-12 d-flex align-self-center justify-content-center" >          
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <div class="card" :class="fifthQuestionShowCorrect? 'purp': 'non-purp-grey'" @click="onFifthCorrectClick(); showContinue = true; scrollIntoContinue()" role="link">
                                    <div class="card-body">
                                        <img class="img-b" src="../../../assets//real_image_5.jpg" alt="Surrealist image" style="display: inline-block; border-radius: 5px;"/>
                                    </div>
                                </div>

                                <div class="correct" :class="{ 'hidden': !fifthQuestionShowCorrect}">
                                    <p style="display: block;"> <span style="color: #6D0CFF"> Correct! +1 point </span> <br> You successfully identified the work of a human.</p>
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <div class="card" :class="fifthQuestionShowIncorrect? 'grey': 'non-purp-grey'" @click="onFifthIncorrectClick(); showContinue = true; scrollIntoContinue()" role="link">
                                    <div class="card-body">
                                        <img class="img-b" src="../../../assets//fake_image_5.png" alt="Surrealist image" style="display: inline-block; border-radius: 5px;"/>
                                    </div>
                                </div>

                                <div class="incorrect" :class="{ 'hidden': !fifthQuestionShowIncorrect}">
                                    <p style="display: block;"> <span style="color: #707070;"> Incorrect! </span> <br> This was created by a machine, not a person.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="scoreVisible" class="row h-10">
                <div class="col-md-12 score-container">
                    <span class="purple-text"><p><em><u>You scored: {{ score }} / 5 correctly! Great work</u></em></p></span>
                </div>
            </div>

            <div class="row h-20" style="padding-bottom: 20px;" v-if="quizCompleted">
                <div class="col-md-12 d-flex justify-content-between">
                    <router-link to="/dalle">
                    <purple-btn-outline :text="'Back'"></purple-btn-outline>
                    </router-link>
                    <router-link to="/dalle/the-complexities-of-copyright">
                    <purple-btn :text="'Continue'"></purple-btn>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '../../reusable/nav-bar.vue';
import PurpleBtn from '../../reusable-ui/purple-btn.vue';
import PurpleBtnOutline from '../../reusable-ui/purple-btn-outline.vue'


export default defineComponent({
  name: 'DallePage2',
  data() {
    return {
      value: null,
      showFirstSection: true,
      showSecondSection: false,

      showFirstQuestion: true,
      showSecondQuestion: false,
      showThirdQuestion: false,
      showFourthQuestion: false,
      showFifthQuestion: false,
      showContinue: false,

      firstQuestionShowCorrect: false,
      firstQuestionShowIncorrect: false,

      secondQuestionShowCorrect: false,
      secondQuestionShowIncorrect: false,

      thirdQuestionShowCorrect: false,
      thirdQuestionShowIncorrect: false,

      fourthQuestionShowCorrect: false,
      fourthQuestionShowIncorrect: false,

      fifthQuestionShowCorrect: false,
      fifthQuestionShowIncorrect: false,

      score: 0, // Initialize the score
      totalQuestions: 5, // Total number of questions
      correctAnswers: 0, // Initialize correct answers counter
      wrongAnswers: 0,
      scoreVisible: false, // Initialize wrong answers counter

      section1Completed: false,
      quizCompleted: false,
    };
  },
    methods: {
        scrollIntoSecondSection() 
        {   
            this.$nextTick(() => {
                const element = this.$refs.secondSection as HTMLElement;
                if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "center", inline: "start" });
                }
            }); 
        },
        scrollIntoSecondQuestion()
        {
            this.$nextTick(() => {
                const element = this.$refs.secondQuestion as HTMLElement;
                if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
                }
            }); 
        },
        scrollIntoThirdQuestion()
        {
            this.$nextTick(() => {
                const element = this.$refs.thirdQuestion as HTMLElement;
                if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
                }
            }); 
        },
        scrollIntoFourthQuestion()
        {
            this.$nextTick(() => {
                const element = this.$refs.fourthQuestion as HTMLElement;
                if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
                }
            }); 
        },
        scrollIntoFifthQuestion()
        {
            this.$nextTick(() => {
                const element = this.$refs.fifthQuestion as HTMLElement;
                if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
                }
            }); 
        },
        scrollIntoContinue()
        {
            this.$nextTick(() => {
                const element = this.$refs.continueButton as HTMLElement;
                if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
                }
            }); 
        },
        // Update the score and answer counters when a question is answered correctly
        onCorrectClick() {
        this.score += 1; // Increment the score
        this.correctAnswers += 1; // Increment correct answers counter
        this.checkCompletion(); // Check if all questions are answered
        },

        // Update the score and answer counters when a question is answered incorrectly
        onIncorrectClick() {
        this.wrongAnswers += 1; // Increment wrong answers counter
        this.checkCompletion(); // Check if all questions are answered
        },

        // Check if all questions are answered and show the Continue button if necessary
        checkCompletion() {
        if (this.correctAnswers + this.wrongAnswers === this.totalQuestions) {
            // All questions are answered
            this.scoreVisible = true;
            this.showContinue = true;
            this.quizCompleted = true; 
        }
        },
        onFirstCorrectClick() 
        {
            this.firstQuestionShowCorrect = true;
            const element = this.$refs.firstQuestion as HTMLElement;
            element.style.pointerEvents="none"
            this.onCorrectClick();
        },
        onFirstIncorrectClick()
        {
            this.firstQuestionShowIncorrect = true;
            const element = this.$refs.firstQuestion as HTMLElement;
            element.style.pointerEvents="none"
            this.onIncorrectClick();
        },
        onSecondCorrectClick() 
        {
            this.secondQuestionShowCorrect = true;
            const element = this.$refs.secondQuestion as HTMLElement;
            element.style.pointerEvents="none"
            this.onCorrectClick();  

        },
        onSecondIncorrectClick()
        {
            this.secondQuestionShowIncorrect = true;
            const element = this.$refs.secondQuestion as HTMLElement;
            element.style.pointerEvents="none"
            this.onIncorrectClick();
        },
        onThirdCorrectClick() 
        {
            this.thirdQuestionShowCorrect = true;
            const element = this.$refs.thirdQuestion as HTMLElement;
            element.style.pointerEvents="none"
            this.onCorrectClick();
    
        },
        onThirdIncorrectClick()
        {
            this.thirdQuestionShowIncorrect = true;
            const element = this.$refs.thirdQuestion as HTMLElement;
            element.style.pointerEvents="none"
            this.onIncorrectClick();
        },
        onFourthCorrectClick() 
        {
            this.fourthQuestionShowCorrect = true;
            const element = this.$refs.fourthQuestion as HTMLElement;
            element.style.pointerEvents="none"
            this.onCorrectClick();

        },
        onFourthIncorrectClick()
        {
            this.fourthQuestionShowIncorrect = true;
            const element = this.$refs.fourthQuestion as HTMLElement;
            element.style.pointerEvents="none"
            this.onIncorrectClick();
        },
        onFifthCorrectClick() 
        {
            this.fifthQuestionShowCorrect = true;
            const element = this.$refs.fifthQuestion as HTMLElement;
            element.style.pointerEvents="none"
            this.onCorrectClick();

        },
        onFifthIncorrectClick()
        {
            this.fifthQuestionShowIncorrect = true;
            const element = this.$refs.fifthQuestion as HTMLElement;
            element.style.pointerEvents="none"
            this.onIncorrectClick();
        },
    },
    
    components: {
        'nav-bar': NavBar,
        'purple-btn': PurpleBtn,
        'purple-btn-outline': PurpleBtnOutline,
    }
});


</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');

.container-fluid.page-container {
    margin-top: 60px;
}

.img-a {
    width: 75%;
    height: 75%;
}

.section-text {
    width: 75%;
    text-align: left;
}

.form {
    height: 30vh;
}

.slider-container{
    width: 50%;
}

.slider-container :deep(.p-slider-range) {
    background: #454545;
}

.slider-container :deep(.p-slider-handle) {
    background: #696969;
    border: 2px solid #696969;
}

.radio-div .form-check-input:checked {
    background-color: #696969;
    border-color: #696969;
}

.text-section {
  opacity: 1;
  max-height: 1000px;
  transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
}

.hidden {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
}

.card {
    border: 0;
    min-height: 400px;
    cursor: pointer;
}

.purp {
    background-color: #E5D1FF;
}

.grey {
    background-color: #D8D8D8;
}

.non-purp-grey {
    background-color: white;
}

.correct, .incorrect {
    padding-top: 1%;
}

.img-b {
    width: 490px;
    height: 380px;
    object-fit: cover;
}

.score-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.purple-text {
  color: #6D0CFF; /* Purple color code */
  font-weight: bold; /* You can add other styles as needed */
}

</style>