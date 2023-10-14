<template>
  <nav-bar />
  <module-navigation-bar :moduleName="'dalle'"></module-navigation-bar>
  <div id="main" class="container-fluid page-container text-center">
    <div class="section-one container mb-5 text-section" :class="{ hidden: !showFirstSection }">
      <div class="row h-10 mb-5">
        <div class="col-md-12">
          <h1 class="tw-mt-24">AI Generated vs. Human Art</h1>
        </div>
      </div>

      <div class="row h-30">
        <div class="col-md-4 d-flex align-items-center">
          <figure>
            <img class="img-a" src="../../../assets//Robot_Head_by_DALL-E_2.jpg" alt="Escher Robot Head by DALL-E 2"
              style="
                display: inline-block;
                margin: 25px 10px;
                border-radius: 5px;
              " />
            <figcaption><b>Escher Robot Head by DALL-E 2</b></figcaption>
          </figure>
        </div>

        <div class="col-md-8 d-flex align-items-center">
          <div class="d-flex justify-content-center flex-wrap">
            <p class="text-left section-text">
              There is no agreed-upon definition of art. It may be subjective.
              Experts disagree. What we call AI art, differs from human-made art
              because it is driven by commands and instructions, rather than an
              expression of genuine emotion.
            </p>

            <p class="text-left section-text">
              AI generators merge visual features from pre-existing images to
              assemble a requested concept. Some claim 'true' art must be
              unique; others argue that even human-made art might just be a
              recombination based on existing styles — which in some ways is
              similar to generative AI

              <span class="reference-link" @click="handleReferenceClick('generatedVsHuman')">(Nanou, 2022)</span>.
            </p>

            <p class="text-left section-text">
              As different generative AI models are trained on larger datasets
              and approach those styles more faithfully, it becomes increasingly
              challenging to distinguish between AI generated art and human art
              — especially if AI generators draw influences from pre-existing
              images.
            </p>

            <p class="text-left section-text">
              Can you tell art created by a human apart from AI images?
              <b>Let's find out!</b>
            </p>
          </div>
        </div>
      </div>
      <div class="row h-20">
        <div class="col-md-12 d-flex justify-content-end">
          <purple-btn :tag="'button'" v-if="!section1Completed" :text="'Continue'" @click="
            showSecondSection = true;
          scrollIntoSecondSection();
          section1Completed = true;
          " />
        </div>
      </div>
    </div>
    <div ref="secondSection" class="section-two container mb-5 text-section" :class="{ hidden: !showSecondSection }">
      <div class="row h-10 mb-5">
        <div class="col-md-12">
          <h3>Which artwork was created by a <em>human</em>?</h3>
        </div>
      </div>

      <div id="firstTry" class="row h-30">
        <!-- quiz, has its own 'section' for each question -->

        <!-- First question -->
        <div id="firstQuestion" ref="firstQuestion" class="question-one container mb-5 text-section"
          :class="{ hidden: !showFirstQuestion }">
          <div class="col-md-12 d-flex align-self-center justify-content-center">
            <div class="container">
              <div class="row">
                <div class="col-md-6 mb-3">
                  <a href="#" class="card" :class="firstQuestionShowCorrect ? 'purp' : 'non-purp-grey'" @click="
                    onFirstCorrectClick();
                  showSecondQuestion = true;
                  scrollIntoSecondQuestion();
                  " role="link">
                    <div class="card-body">
                      <img class="img-b" :src="require(`@/assets/${realimg1FileName}`)" alt="Image"
                        style="display: inline-block; border-radius: 5px" />
                    </div>
                  </a>

                  <div class="correct" :class="{ hidden: !firstQuestionShowCorrect }">
                    <span style="color: #6d0cff"> Correct! +1 point </span>
                    <br>
                    <p style="color: #6d0cff"> You successfully identified the work of a human. </p>
                    {{ teachableMsg1 }}
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <a href="#" class="card" :class="firstQuestionShowIncorrect ? 'grey' : 'non-purp-grey'
                    " @click="
    onFirstIncorrectClick();
  showSecondQuestion = true;
  scrollIntoSecondQuestion();
  " role="link">
                    <div class="card-body">
                      <img class="img-b" :src="require(`@/assets/${fakeimg1FileName}`)" alt="Image"
                        style="display: inline-block; border-radius: 5px" />
                    </div>
                  </a>

                  <div class="incorrect" :class="{ hidden: !firstQuestionShowIncorrect }">
                      <p style="color: #707070">
                        Oops, this was made by an AI!
                      </p>
                      {{ teachableMsg1 }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Second question -->
      <div ref="secondQuestion" class="question-two container mb-5 text-section" :class="{ hidden: !showSecondQuestion }">
        <div class="col-md-12 d-flex align-self-center justify-content-center">
          <div class="container">
            <div class="row">
              <div class="col-md-6 mb-3">
                <a href="#" class="card" :class="secondQuestionShowCorrect ? 'purp' : 'non-purp-grey'" @click="
                  onSecondCorrectClick();
                showThirdQuestion = true;
                scrollIntoThirdQuestion();
                " role="link">
                  <div class="card-body">
                    <img class="img-b" :src="require(`@/assets/${realimg2FileName}`)" alt="Image"
                      style="display: inline-block; border-radius: 5px" />
                  </div>
                </a>

                <div class="correct" :class="{ hidden: !secondQuestionShowCorrect }">
                  <span style="color: #6d0cff"> Correct! +1 point </span>
                    <br>
                    <p style="color: #6d0cff"> You successfully identified the work of a human. </p>
                    {{ teachableMsg2 }}
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <a href="#" class="card" :class="secondQuestionShowIncorrect ? 'grey' : 'non-purp-grey'
                  " @click="
    onSecondIncorrectClick();
  showThirdQuestion = true;
  scrollIntoThirdQuestion();
  " role="link">
                  <div class="card-body">
                    <img class="img-b" :src="require(`@/assets/${fakeimg2FileName}`)" alt="Image"
                      style="display: inline-block; border-radius: 5px" />
                  </div>
                </a>

                <div class="incorrect" :class="{ hidden: !secondQuestionShowIncorrect }">
                  <p style="color: #707070">
                        Oops, this was made by an AI!
                  </p>
                  {{ teachableMsg2 }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Third question -->
      <div ref="thirdQuestion" class="question-three container mb-5 text-section" :class="{ hidden: !showThirdQuestion }">
        <div class="col-md-12 d-flex align-self-center justify-content-center">
          <div class="container">
            <div class="row">
              <div class="col-md-6 mb-3">
                <a href="#" class="card" :class="thirdQuestionShowIncorrect ? 'grey' : 'non-purp-grey'" @click="
                  onThirdIncorrectClick()
                scrollIntoFourthQuestion();
                showFourthQuestion = true;
                " role="link">
                  <div class="card-body">
                    <img class="img-b" :src="require(`@/assets/${fakeimg3FileName}`)" alt="Image"
                      style="display: inline-block; border-radius: 5px" />
                  </div>
                </a>

                <div class="incorrect" :class="{ hidden: !thirdQuestionShowIncorrect }">
                  <p style="color: #707070">
                        Oops, this was made by an AI!
                      </p>
                  {{ teachableMsg3 }}
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <a href="#" class="card" :class="thirdQuestionShowCorrect ? 'purp' : 'non-purp-grey'" @click="
                  onThirdCorrectClick();
                showFourthQuestion = true;
                scrollIntoFourthQuestion();
                " role="link">
                  <div class="card-body">
                    <img class="img-b" :src="require(`@/assets/${realimg3FileName}`)" alt="Image"
                      style="display: inline-block; border-radius: 5px" />
                  </div>
                </a>

                <div class="correct" :class="{ hidden: !thirdQuestionShowCorrect }">
                  <span style="color: #6d0cff"> Correct! +1 point </span>
                    <br>
                    <p style="color: #6d0cff"> You successfully identified the work of a human. </p>
                    {{ teachableMsg3 }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Fourth question-->
      <div ref="fourthQuestion" class="question-four container mb-5 text-section"
        :class="{ hidden: !showFourthQuestion }">
        <div class="col-md-12 d-flex align-self-center justify-content-center">
          <div class="container">
            <div class="row">
              <div class="col-md-6 mb-3">
                <a href="#" class="card" :class="fourthQuestionShowIncorrect ? 'grey' : 'non-purp-grey'
                  " @click="
    onFourthIncorrectClick();
  scrollIntoFifthQuestion();
  showFifthQuestion = true;
  " role="link">
                  <div class="card-body">
                    <img class="img-b" :src="require(`@/assets/${fakeimg4FileName}`)" alt="Image"
                      style="display: inline-block; border-radius: 5px" />
                  </div>
                </a>

                <div class="incorrect" :class="{ hidden: !fourthQuestionShowIncorrect }">
                  <p style="color: #707070">
                        Oops, this was made by an AI!
                      </p>
                  {{ teachableMsg4 }}
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <a href="#" class="card" :class="fourthQuestionShowCorrect ? 'purp' : 'non-purp-grey'" @click="
                  onFourthCorrectClick();
                showFifthQuestion = true;
                scrollIntoFifthQuestion();
                " role="link">
                  <div class="card-body">
                    <img class="img-b" :src="require(`@/assets/${realimg4FileName}`)" alt="Image"
                      style="display: inline-block; border-radius: 5px" />
                  </div>
                </a>

                <div class="correct" :class="{ hidden: !fourthQuestionShowCorrect }">
                  <span style="color: #6d0cff"> Correct! +1 point </span>
                    <br>
                    <p style="color: #6d0cff"> You successfully identified the work of a human. </p>
                    {{ teachableMsg4 }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row h-30">
        <!-- Fifth question -->
        <div ref="fifthQuestion" class="question-five container mb-5 text-section"
          :class="{ hidden: !showFifthQuestion }">
          <div class="col-md-12 d-flex align-self-center justify-content-center">
            <div class="container">
              <div class="row">
                <div class="col-md-6 mb-3">
                  <a href="#" class="card" :class="fifthQuestionShowCorrect ? 'purp' : 'non-purp-grey'" @click="
                    onFifthCorrectClick();
                  showContinue = true;
                  scrollIntoContinue();
                  " role="link">
                    <div class="card-body">
                      <img class="img-b" :src="require(`@/assets/${realimg5FileName}`)" alt="Image"
                        style="display: inline-block; border-radius: 5px" />
                    </div>
                  </a>

                  <div class="correct" :class="{ hidden: !fifthQuestionShowCorrect }">
                    <span style="color: #6d0cff"> Correct! +1 point </span>
                    <br>
                    <p style="color: #6d0cff"> You successfully identified the work of a human. </p>
                    {{ teachableMsg5 }}
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <a href="#" class="card" :class="fifthQuestionShowIncorrect ? 'grey' : 'non-purp-grey'
                    " @click="
    onFifthIncorrectClick();
  showContinue = true;
  scrollIntoContinue();
  " role="link">
                    <div class="card-body">
                      <img class="img-b" :src="require(`@/assets/${fakeimg5FileName}`)" alt="Image"
                        style="display: inline-block; border-radius: 5px" />
                    </div>
                  </a>

                  <div class="incorrect" :class="{ hidden: !fifthQuestionShowIncorrect }">
                    <p style="color: #707070">
                        Oops, this was made by an AI!
                      </p>
                  {{ teachableMsg5 }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="scoreVisible" class="row h-10">
            <div class="col-md-12 score-container">
              <span class="purple-text">
                <p>
                  <em><u>You scored: {{ score }} / 5 correctly! Great work</u></em>
                </p>
              </span>
            </div>
          </div>
        </div>

        <div class="row h-20">
          <div class="col-md-12 d-flex justify-content-center">
            <purple-btn :tag="'button'" v-if="quizCompleted && !section2Completed && !redoQuiz" :text="'Retry'" @click="
              showFirstQuestion = true;
            redo();
            " />
          </div>
        </div>

        <div class="row h-20 pb-5" ref="continueButton">
          <div class="col-md-12 d-flex justify-content-end">
            <purple-btn :tag="'button'" v-if="quizCompleted && !section2Completed" :text="'Continue'" @click="
              showThirdSection = true;
            scrollIntoThirdSection();
            section2Completed = true;
            " />
          </div>
        </div>

        <div ref="thirdSection" class="row h-30 mb-8 justify-content-center" :class="{ hidden: !showThirdSection }">
        <div class="article-snippet text-center align-items-center mx-auto">
          <div class="article-image">
            <a href="https://www.androidpolice.com/identify-ai-generated-images-how-to" target="_blank">
              <img src="../../../assets//ai_article.png" alt="Image of AI artwork" />
            </a>
          </div>
          <h2 class="article-title">How to identify AI-generated images</h2>
          <p class="article-meta">
            Published on June 22, 2023 by Hagop Kavafian
          </p>
          <p class="article-excerpt">
            AI art generators are sometimes so powerful that it is hard to tell AI-generated images from actual pictures. There are some clues you can look for to identify these and potentially avoid being tricked into thinking you're looking at a real picture.
          </p>
          <a class="article-link" href="https://www.androidpolice.com/identify-ai-generated-images-how-to/" target="_blank">Read More</a>
          <br />
        </div>

        <div class="col-md-6 d-flex align-items-center">
          <div class="d-flex justify-content-center flex-wrap">
            <h3>The Lesson</h3>
            <br><br><br><br>
            <p class="text-left section-text">
              You may have found that some of the images were challenging to differentiate, which is true even for the savviest of quiz-takers. It just goes to show how advanced AI technologies have become and how important it is to educate ourselves.
            </p>
            <br>
            <p class="text-left section-text">
              To find out what more about what clues to look out for, check out this article.
            </p>
            <br>
            <p class="text-left section-text">
              &larr; &larr;
            </p>
            <p class ="text-left section-text">
              Ultimately though, as these technologies advance, these tells may no longer be relevant and even with them in consideration, it can be <b> impossible to tell </b> depending on the type and complexity of the generator. Therefore, it's important to stay savvy and always check your sources.
            </p>
          </div>
        </div>
        <br>
            <div class="row h-20" style="padding-bottom: 20px" v-if="quizCompleted">
              <div class="col-md-12 d-flex justify-content-end">
                <router-link to="/dalle/the-complexities-of-copyright">
                  <purple-btn :text="'Continue'" @click="handlePageCompletionClick()" />
                </router-link>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toHandlers } from "vue";
import NavBar from "../../reusable/nav-bar.vue";
import ModuleNavigationBar from "../../reusable/module-navigation-bar.vue";
import PurpleBtn from "../../reusable-ui/purple-btn.vue";

export default defineComponent({
  name: "DallePage2",
  data() {
    return {
      value: null,
      showFirstSection: true,
      showSecondSection: false,
      showThirdSection: false,

      showFirstQuestion: true,
      showSecondQuestion: false,
      showThirdQuestion: false,
      showFourthQuestion: false,
      showFifthQuestion: false,
      showSixthQuestion: false,
      showContinue: false,
      realimg1FileName: "real_image_1.jpg",
      realimg2FileName: "real_image_2.jpg",
      realimg3FileName: "real_image_3.jpg",
      realimg4FileName: "real_image_4.jpg",
      realimg5FileName: "real_image_5.jpg",
      fakeimg1FileName: "fake_image_1.png",
      fakeimg2FileName: "fake_image_2.png",
      fakeimg3FileName: "fake_image_3.png",
      fakeimg4FileName: "fake_image_4.png",
      fakeimg5FileName: "fake_image_5.png",
      teachableMsg1:
        "The key tell here is the fuzzy almost dreamy aspect of the artwork with the bird near the ground on the right being misshapen.",
      teachableMsg2:
        "The key tell here is the glow around the cactus which doesn't align with natural light. This artwork also has very soft features which is consistent with AI generated work. The human-made image also has text at the top and bottom, which current AI tends to mess up.",
      teachableMsg3:
        "The key tell here is the dreamy aspect to the artwork, with soft edges, which is consistent with AI.",
      teachableMsg4:
        "The key tell here is that AI struggles to create many people with detailed features so the act of silhouetting the fishermen helps to hide this.",
      teachableMsg5:
        "The key tell here is that AI struggles to create hands and fingers as for a majority of art, hands aren’t the main focus.",

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
      section2Completed: false,
      section3Completed: false,
      quizCompleted: false,
      redoQuiz: false,
    };
  },
  methods: {
    scrollIntoSecondSection() {
      this.$nextTick(() => {
        const element = this.$refs.secondSection as HTMLElement;
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "start",
          });
        }
      });
    },
    scrollIntoThirdSection() {
      this.$nextTick(() => {
        const element = this.$refs.thirdSection as HTMLElement;
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "start",
          });
        }
      });
    },
    scrollIntoSecondQuestion() {
      this.$nextTick(() => {
        const element = this.$refs.secondQuestion as HTMLElement;
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "start",
          });
        }
      });
    },
    scrollIntoThirdQuestion() {
      this.$nextTick(() => {
        const element = this.$refs.thirdQuestion as HTMLElement;
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "start",
          });
        }
      });
    },
    scrollIntoFourthQuestion() {
      this.$nextTick(() => {
        const element = this.$refs.fourthQuestion as HTMLElement;
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "start",
          });
        }
      });
    },
    scrollIntoFifthQuestion() {
      this.$nextTick(() => {
        const element = this.$refs.fifthQuestion as HTMLElement;
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "start",
          });
        }
      });
    },
    handlePageCompletionClick(this: any) {
      this.$registerPageAsCompleted("dalle", "ai-generated-vs-human-art");
    },
    redo() {
      (this.showSecondQuestion = false),
        (this.showThirdQuestion = false),
        (this.showFourthQuestion = false),
        (this.showFifthQuestion = false),
        (this.showContinue = false),
        // Reset score
        (this.score = 0),
        (this.correctAnswers = 0);
      this.wrongAnswers = 0;
      this.scoreVisible = false;
      this.showContinue = false;
      this.quizCompleted = false;
      this.redoQuiz = true;

      // Resetting all pointer events
      const firstElement = this.$refs.firstQuestion as HTMLElement;
      firstElement.style.pointerEvents = "auto";
      firstElement.querySelectorAll("*").forEach(child => { (child as HTMLElement).removeAttribute("tabIndex"); });
      const secondElement = this.$refs.secondQuestion as HTMLElement;
      secondElement.style.pointerEvents = "auto";
      secondElement.querySelectorAll("*").forEach(child => { (child as HTMLElement).removeAttribute("tabIndex"); });
      const thirdElement = this.$refs.thirdQuestion as HTMLElement;
      thirdElement.style.pointerEvents = "auto";
      thirdElement.querySelectorAll("*").forEach(child => { (child as HTMLElement).removeAttribute("tabIndex"); });
      const fourthElement = this.$refs.fourthQuestion as HTMLElement;
      fourthElement.style.pointerEvents = "auto";
      fourthElement.querySelectorAll("*").forEach(child => { (child as HTMLElement).removeAttribute("tabIndex"); });
      const fifthElement = this.$refs.fifthQuestion as HTMLElement;
      fifthElement.style.pointerEvents = "auto";
      fifthElement.querySelectorAll("*").forEach(child => { (child as HTMLElement).removeAttribute("tabIndex"); });

      // Resetting questions
      (this.firstQuestionShowCorrect = false),
        (this.firstQuestionShowIncorrect = false),
        (this.secondQuestionShowCorrect = false),
        (this.secondQuestionShowIncorrect = false),
        (this.thirdQuestionShowCorrect = false),
        (this.thirdQuestionShowIncorrect = false),
        (this.fourthQuestionShowCorrect = false),
        (this.fourthQuestionShowIncorrect = false),
        (this.fifthQuestionShowCorrect = false),
        (this.fifthQuestionShowIncorrect = false),
        // Changing images
        (this.realimg1FileName = "real_image_6.jpg");
      this.realimg2FileName = "real_image_7.jpeg";
      this.realimg3FileName = "real_image_8.jpg";
      this.realimg4FileName = "real_image_9.jpg";
      this.realimg5FileName = "real_image_10.jpg";
      this.fakeimg1FileName = "fake_image_6.png";
      this.fakeimg2FileName = "fake_image_7.png";
      this.fakeimg3FileName = "fake_image_8.png";
      this.fakeimg4FileName = "fake_image_9.png";
      this.fakeimg5FileName = "fake_image_10.png";

      // Changing teachable message
      this.teachableMsg1 =
        "The key tell here is the misdrawn face, which, if you see closely, has some noticeable asymmetrical and enlarged features – such as the right side of the face, where the eye appears bigger.";
      this.teachableMsg2 =
        "The key tell here is the dreamy aspect to the artwork, with soft edges, which is consistent with AI.";
      this.teachableMsg3 =
        "The key tell here is the dreamy aspect to the artwork, with soft edges – the background is also blurry and indistinct, which is consistent with AI.";
      this.teachableMsg4 =
        "The key tell here is that AI struggles to create hands and fingers as for a majority of art, hands aren’t the main focus.";
      this.teachableMsg5 =
        "The key tell here is the blurred aspect to the artwork, with soft edges, which is consistent with AI.";

      this.$nextTick(() => {
        const element = this.$refs.firstQuestion as HTMLElement;
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "start",
          });
        }
      });
      // this.$nextTick(() => {
      //     const element = this.$refs.firstQuestion as HTMLElement;
      //     if (element) {
      //         element.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
      //     }
      // });
    },
    scrollIntoContinue() {
      this.$nextTick(() => {
        const element = this.$refs.continueButton as HTMLElement;
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "start",
          });
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
    onFirstCorrectClick() {
      this.firstQuestionShowCorrect = true;
      const element = this.$refs.firstQuestion as HTMLElement;
      element.style.pointerEvents = "none";
      element.querySelectorAll("*").forEach(child_element => { const child = child_element as HTMLElement; child.tabIndex = -1; child.blur(); })
      this.onCorrectClick();
    },
    onFirstIncorrectClick() {
      this.firstQuestionShowIncorrect = true;
      const element = this.$refs.firstQuestion as HTMLElement;
      element.style.pointerEvents = "none";
      element.querySelectorAll("*").forEach(child_element => { const child = child_element as HTMLElement; child.tabIndex = -1; child.blur(); })
      this.onIncorrectClick();
    },
    onSecondCorrectClick() {
      this.secondQuestionShowCorrect = true;
      const element = this.$refs.secondQuestion as HTMLElement;
      element.style.pointerEvents = "none";
      element.querySelectorAll("*").forEach(child_element => { const child = child_element as HTMLElement; child.tabIndex = -1; child.blur(); })
      this.onCorrectClick();
    },
    onSecondIncorrectClick() {
      this.secondQuestionShowIncorrect = true;
      const element = this.$refs.secondQuestion as HTMLElement;
      element.style.pointerEvents = "none";
      element.querySelectorAll("*").forEach(child_element => { const child = child_element as HTMLElement; child.tabIndex = -1; child.blur(); })
      this.onIncorrectClick();
    },
    onThirdCorrectClick() {
      this.thirdQuestionShowCorrect = true;
      const element = this.$refs.thirdQuestion as HTMLElement;
      element.style.pointerEvents = "none";
      element.querySelectorAll("*").forEach(child_element => { const child = child_element as HTMLElement; child.tabIndex = -1; child.blur(); })
      this.onCorrectClick();
    },
    onThirdIncorrectClick() {
      this.thirdQuestionShowIncorrect = true;
      const element = this.$refs.thirdQuestion as HTMLElement;
      element.style.pointerEvents = "none";
      element.querySelectorAll("*").forEach(child_element => { const child = child_element as HTMLElement; child.tabIndex = -1; child.blur(); })
      this.onIncorrectClick();
    },
    onFourthCorrectClick() {
      this.fourthQuestionShowCorrect = true;
      const element = this.$refs.fourthQuestion as HTMLElement;
      element.style.pointerEvents = "none";
      element.querySelectorAll("*").forEach(child_element => { const child = child_element as HTMLElement; child.tabIndex = -1; child.blur(); })
      this.onCorrectClick();
    },
    onFourthIncorrectClick() {
      this.fourthQuestionShowIncorrect = true;
      const element = this.$refs.fourthQuestion as HTMLElement;
      element.style.pointerEvents = "none";
      element.querySelectorAll("*").forEach(child_element => { const child = child_element as HTMLElement; child.tabIndex = -1; child.blur(); })
      this.onIncorrectClick();
    },
    onFifthCorrectClick() {
      this.fifthQuestionShowCorrect = true;
      const element = this.$refs.fifthQuestion as HTMLElement;
      element.style.pointerEvents = "none";
      element.querySelectorAll("*").forEach(child_element => { const child = child_element as HTMLElement; child.tabIndex = -1; child.blur(); })
      this.onCorrectClick();
    },
    onFifthIncorrectClick() {
      this.fifthQuestionShowIncorrect = true;
      const element = this.$refs.fifthQuestion as HTMLElement;
      element.style.pointerEvents = "none";
      element.querySelectorAll("*").forEach(child_element => { const child = child_element as HTMLElement; child.tabIndex = -1; child.blur(); })
      this.onIncorrectClick();
    },
    handleReferenceClick(referenceSectionId: string) {
      const hash = `#${referenceSectionId}`;
      this.$router.push({ name: "references", hash });
    },
  },

  components: {
    "nav-bar": NavBar,
    "module-navigation-bar": ModuleNavigationBar,
    "purple-btn": PurpleBtn,
  },
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap");

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

.slider-container {
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
  display: none;
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
  background-color: #e5d1ff;
}

.grey {
  background-color: #d8d8d8;
}

.non-purp-grey {
  background-color: white;
}

.correct,
.incorrect {
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
  color: #6d0cff;
  /* Purple color code */
  font-weight: bold;
  /* You can add other styles as needed */
}

.article-snippet {
  background-color: #f7f7f7;
  border: 1px solid #ddd;
  padding: 20px;
  margin-top: 20px;
  /* Decreased margin-top to create space */
  max-width: 1000px;
  /* Decreased max-width to make it narrower */
}

.article-title {
  font-size: 18px;
  /* Decreased font size for the title */
  margin-bottom: 10px;
}

.article-meta {
  font-size: 14px;
  color: #888;
}

.article-excerpt {
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 10px;
}

.article-link {
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
  display: inline-block;
  margin-top: 10px;
}

.article-link:hover {
  text-decoration: underline;
}

.article-image {
  text-align: center;
  /* Center align the image */
  margin-bottom: 20px;
  /* Add some spacing between the image and the snippet */
}

.article-image img {
  max-width: 100%;
  /* Ensure the image fits within its container */
}

/* CSS for the article snippet (previously provided) */
.article-snippet {
  background-color: #f7f7f7;
  border: 1px solid #ddd;
  padding: 20px;
  margin-top: 20px;
  max-width: 500px;
}
</style>
