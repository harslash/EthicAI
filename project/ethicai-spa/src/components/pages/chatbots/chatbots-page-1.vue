<template>
  <nav-bar />
  <module-navigation-bar :moduleName="'chatbots'"/>
  <div id="main" class="container-fluid page-container text-center">
    <div class="section-one container mb-5 text-section" :class="{ 'hidden': !showFirstSection }">
      <div class="row h-10 mb-5">
        <div class="col-md-12">
          <h1 class="tw-mt-24">The Age of Chatbots</h1>
        </div>
      </div>
      <div class="row h-30 mb-5">
        <div class="col-md-7 d-flex align-items-center">
          <div class="d-flex justify-content-center flex-wrap">
            <p class="text-left section-text">
              Let's delve into the past when chatbots were in their infancy. These early computer programs had a modest
              ambition: to simulate human intelligence by offering pre-scripted responses to questions. In the year 1966,
              a notable chatbot named ELIZA was born. ELIZA's unique approach involved reusing the user's input in a set
              of predefined phrases. Surprisingly, this basic system often left users believing they were engaged in a
              genuine human conversation.
            </p>

            <p class="section-text">
              Fast forward to 2011, and Apple introduced Siri, a voice assistant that pushed the boundaries of chatbot
              capabilities. Siri's advanced features marked a significant turning point. Since then, chatbots have gained
              widespread popularity due to their user-friendly interface, simplifying interactions with computers
              (<router-link :to="{ name: 'references' }">Ina, 2023</router-link>). Today, chatbots find utility across a
              spectrum of tasks, from customer service to assisting with everyday activities and language practice, among
              other applications.
            </p>
          </div>
        </div>

        <div class="col-md-5 d-flex align-items-center justify-content-md-start justify-content-center ">
          <a title="File:ELIZA conversation.jpg, Public domain, via Wikimedia Commons"
            href="https://commons.wikimedia.org/wiki/File:ELIZA_conversation.png">
            <img width="400" alt="ELIZA conversation, terminal interface"
              src="https://upload.wikimedia.org/wikipedia/commons/7/79/ELIZA_conversation.png"></a>
        </div>
      </div>
      <div class="row h-30 mb-3">
        <div class="col-md-5 d-flex justify-content-center justify-content-md-end pb-5">
          <important-terms-card :terms-and-definitions="termsAndDefinitions" :cardHeight="300"></important-terms-card>
        </div>
        <div class="col-md-7 d-flex align-items-center">
          <div class="d-flex justify-content-center flex-wrap">
            <p class="section-text">
              The world of chatbots has witnessed a remarkable evolution with the advent of Large Language Models (LLMs).
              These sophisticated systems have become a game-changer, as they can handle a wide range of text-based tasks.
              Imagine tasks like summarizing, translating, and generating content with the help of information gathered
              from vast datasets of online text. One LLM-based chatbot that might ring a bell is ChatGPT. It's a chatbot
              that can chat with you in a way that feels remarkably human.
            </p>
            <p class="section-text">
              Since the rise of LLMs, chatbots like ChatGPT and Google Bard have truly captured the spotlight. These
              chatbots appear to have an uncanny knowledge of the world and, best of all, they're readily available to
              anyone with an internet connection. Thanks to this accessibility, ChatGPT has become a go-to tool for
              answering questions, lending a hand with writing tasks, creating content, and much more.
            </p>
          </div>
        </div>
      </div>
      <div class="row h-20">
        <div class="col-md-12 d-flex justify-content-end">
          <purple-btn :tag="'button'" v-if="!section1Completed" :text="'Continue'"
            @click="showSecondSection = true; scrollIntoSection('secondSection'); section1Completed = true;" />
        </div>
      </div>
    </div>
    <div ref="secondSection" class="section-two
      container mb-5
      text-section" :class="{ 'hidden': !showSecondSection }">
      <div class="row">
        <div class="col-md-12">
          <div class="d-flex justify-content-center">
            <p class="section-text">
              Here's a glimpse into ChatGPT's inner workings. ChatGPT undergoes comprehensive training by drawing data
              from diverse sources on the internet, including Wikipedia, books, news articles, and scientific journals.
              After this immersive learning process, ChatGPT is primed for interaction. As showcased in our flowchart, you
              initiate interaction by sending ChatGPT a prompt or question. ChatGPT, armed with the knowledge it has
              acquired during training, then crafts a tailored response, promptly delivering it back to you, the user.
            </p>
          </div>
        </div>
        <div class="col-md-12 d-flex flex-column align-items-center">
          <img src="../../../assets//chatbots_page_1_a.png" class="img-a"
            alt="flowchat diagram, training data trains ChatGPT, which responds to User, which prompts ChatGPT in return" />
             <p class="section-text">
            In the training process of LLMs like ChatGPT, human trainers instruct the model in tasks such as completing sentences with the most fitting words. As the LLM becomes adept at this, it develops a nuanced understanding of the statistical relationships between words in a language, comprehending which words are likely to appear together. When you send a prompt to ChatGPT, it leverages this acquired knowledge and interprets your specific context to produce responses. Unlike a static database lookup, ChatGPT dynamically generates responses, ensuring they are not only contextually accurate but also coherent and relevant to your input.
            </p>
        </div>
      </div>
      <div class="row h-20">
        <div class="col-md-12 d-flex justify-content-end">
          <purple-btn :tag="'button'" v-if="section1Completed && !section2Completed" :text="'Continue'"
            @click="showThirdSection = true; scrollIntoSection('thirdSection'); section2Completed = true;" />
        </div>
      </div>
    </div>
    <div ref="thirdSection" class="section-three container text-section pb-5" :class="{ 'hidden': !showThirdSection }">
      <div class="row h-40">
        <div class="col-md-12 pb-2">
          <div class="d-flex align-items-center flex-column">
            <h5>Engage with LLM</h5>
            <p class="section-text">Welcome to our LLM interaction feature. You can interact in two ways:</p>
            <p class="section-text px-3">1. <b>Your Questions:</b> Enter your questions or prompts in the text box and
              receive responses from an LLM.</p>
            <p class="section-text px-3">2. <b>Pre-Generated Prompts:</b> Choose from pre-made prompts to start a
              conversation.</p>

            <p class="section-text">Feel free to explore and experiment. Your curiosity is the key to discovering
              the capability of LLMs. Enjoy the interaction!</p>
            <span class="gpt-prompt-note">Note: This demo is powered by <a href="https://github.com/Soulter/hugging-chat-api" target="_blank">hugging-chat-api</a>.
              You can also experiment with more powerful models, such as <a href="https://chat.openai.com/" target="_blank">ChatGPT</a>.</span>
          </div>

        </div>
      </div>
      <div class="row pb-5">
        <div class="col-md-2"></div>
        <div class="col-md-8">
          <chatgpt-prompt-form class="form"></chatgpt-prompt-form>
        </div>
        <div class="col-md-2"></div>
      </div>
      <div class="row h-20">
        <div class="col-md-12 d-flex justify-content-end">
          <router-link to="/chatbots/chatgpt-101">
            <purple-btn :text="'Next Page'" @click="handlePageCompletionClick()" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '../../reusable/nav-bar.vue';
import ModuleNavigationBar from '../../reusable/module-navigation-bar.vue';
import ImportantTermsCard from '../../reusable/important-terms-card.vue';
import PurpleBtn from '../../reusable-ui/purple-btn.vue';
import ChatgptPromptForm from '../../reusable/chatgpt-prompt-form.vue';

export default defineComponent({
  name: 'ChatbotsPage1',
  data() {
    return {
      termsAndDefinitions: [
        {
          term: 'GPT',
          definition: 'Stands for Generative Pre-trained Transformer. It is a family of neural network models that uses the transformer architecture. It powers recent generative AI applications such as ChatGPT (AWS, 2023).',
        },
        {
          term: 'LLM',
          definition: 'Stands for Large Language Model. LLMs are deep learning algorithms trained on a very large dataset that can recognize, summarize, translate, predict, and generate text (NVIDIA, 2023).',
        },
        {
          term: 'Chatbot',
          definition: 'A computer program that simulates human conversation, allowing humans to interact with digital devices as if they were communicating with a real person (Oracle, 2023).',
        },
        {
          term: 'Markov Chain',
          definition: 'A mathematical system that experiences transitions from one state to another according to certain probabilistic rules. (Brilliant, n.d.).',
        },
        {
          term: 'Prompts',
          definition: 'ChatGPT prompts are the textual inputs (e.g., questions, instructions) a user enters into ChatGPT to get responses (Scribbr, 2023).',
        },
      ],
      value: null,
      showFirstSection: true,
      showSecondSection: false,
      showThirdSection: false,
      showThanksMessage: false, // Added a missing comma here
      section1Completed: false,
      section2Completed: false,
      section3Completed: false,
    };
  },
  watch: {
    value(newValue) {
      if (newValue !== null && newValue >= 0) {
        setTimeout(() => {
          this.showThanksMessage = true;
        }, 1000);
      }
    },
  },
  methods: {
    scrollIntoSection(sectionName: string) {
      this.$nextTick(() => {
        const element = this.$refs[sectionName] as HTMLElement;
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
        }
      });
    },
    // eslint-disable-next-line 
    handlePageCompletionClick(this: any) {
      this.$registerPageAsCompleted('chatbots', 'the-age-of-chatbots');
    },
  },
  components: {
    'nav-bar': NavBar,
    'module-navigation-bar': ModuleNavigationBar,
    'important-terms-card': ImportantTermsCard,
    'purple-btn': PurpleBtn,
    'chatgpt-prompt-form': ChatgptPromptForm,
  },
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');

.container-fluid.page-container {
  margin-top: 60px;
}

.section-text {
  width: 60%;
  text-align: left;
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
  max-height: 2000px;
  transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
}

.hidden {
  display: none;
  opacity: 0;
  max-height: 0;
  overflow: hidden;
}

.gpt-prompt-note {
  font-size: 0.8rem;
}

.purple-text {
  color: #6D0CFF;
  transition: color 2s ease-in-out;
}

.img-a {
  width: 25%;
}

@media (max-width: 767.98px) {
  .section-text {
    width: 90%;
  }

  .img-a {
    width: 60%;
  }
}
</style>
