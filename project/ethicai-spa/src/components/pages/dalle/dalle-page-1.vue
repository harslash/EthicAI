<template>
  <div>
    <nav-bar />
    <module-navigation-bar :moduleName="'dalle'"></module-navigation-bar>
    <div id="main" class="container-fluid page-container text-center mb-5">
      <div class="row h-10 mb-5">
        <div class="col-md-12">
          <h1 class="tw-mt-24">The Rise of DALL·E</h1>
        </div>
      </div>
      <div ref="firstSection" class="row h-30 mb-5" :class="{ hidden: !showFirstSection }">
        <div class="col-md-8 d-flex align-items-center">
          <div class="d-flex justify-content-center flex-wrap">
            <p class="text-left section-text">
              DALL·E is a cutting-edge generative art model developed by OpenAI.
              It blends the names of artist Salvador Dalí and robot WALL·E. It
              utilizes the GPT architecture to create images from textual
              descriptions
              <span class="reference-link" @click="handleReferenceClick('dalle')">(OpenAI, 2022)</span>. You provide a
              text prompt, and DALL·E generates a corresponding
              image.
            </p>

            <p class="section-text">
              This model has a remarkable capacity to bridge text and images,
              exemplifying AI's ability to produce imaginative content
              <span class="reference-link" @click="handleReferenceClick('dalle')">(TechTarget, 2023)</span>.
            </p>
          </div>
        </div>
        <div class="col-md-4 d-flex align-items-center justify-content-center justify-content-md-start ">
          <img class="img-a" src="../../../assets//dalle_page1_img.png" alt="an art piece depicting a purple swirl" />
        </div>
      </div>
      <div class="row h-30 mb-10 justify-content-center">
        <div class="col-md-6 d-flex justify-content-center">
          <important-terms-card :terms-and-definitions="termsAndDefinitions" :cardHeight="240"></important-terms-card>
        </div>
        <div class="col-md-6 d-flex align-items-center">
          <p class="text-right section-text">
            <br />
            However, it also raises some significant ethical questions about the
            potential misuse of AI-generated images. This includes deepfakes
            (which are covered in further detail in our deepfakes module),
            authenticity, and plagiarism.
          </p>
        </div>

        <div class="row h-20">
          <div class="col-md-12 d-flex justify-content-end" >
            <purple-btn :tag="'button'" v-if="!section1Completed" :text="'Continue'"
              @click="showSecondSection = true; scrollIntoSecondSection(); section1Completed = true;" style="margin-right: 35px;" />
          </div>
        </div>
      </div>
      <div ref="secondSection" class="row h-30 mb-5 justify-content-center" :class="{ hidden: !showSecondSection }">
        <div class="col-md-12">
          <br />
          <h1 class="mt-5" style="font-size: 28px">Imagine ...</h1>
          <br />
        </div>
        <div class="col-md-4 d-flex align-items-center justify-content-center">
          <img class="img-a-small" src="../../../assets//artist.png" alt="a female artist holding a paintbrush" />
        </div>
        <div class="col-md-4 d-flex align-items-center">
          <div class="d-flex justify-content-center flex-wrap">
            <p class="text-left section-text">You are an artist.</p>
            <p class="section-text">
              More than just your source of income, your work is your passion.
              You are proud to share your art with the world on Instagram.
            </p>
          </div>
        </div>
        <div class="row h-20">
          <div class="col-md-12 d-flex justify-content-end">
            <purple-btn :tag="'button'" v-if="section1Completed && !section2Completed" :text="'Continue'" @click="
              showThirdSection = true;
            scrollIntoThirdSection();
            section2Completed = true;
            " style="margin-right: 35px;" />
          </div>
        </div>
      </div>
      <div ref="thirdSection" class="row h-30 mb-5 justify-content-center" :class="{ hidden: !showThirdSection }">
        <div class="col-md-4 d-flex align-items-center">
          <div class="d-flex justify-content-center flex-wrap">
            <p class="text-left section-text">
              Overnight, you start to lose your followers.
            </p>
            <p class="section-text">
              In your comment section, people complain that your work is the
              same as everyone else.
            </p>
          </div>
        </div>
        <div class="col-md-4 d-flex align-items-center justify-content-center">
          <img class="img-a-large" src="../../../assets//haters.png" alt="mean Instagram comments section" />
        </div>
        <div class="row h-20">
          <div class="col-md-12 d-flex justify-content-end">
            <purple-btn :tag="'button'" v-if="section2Completed && !section3Completed" :text="'Continue'" @click="
              showFourthSection = true;
            scrollIntoFourthSection();
            section3Completed = true;
            " style="margin-right: 35px;"/>
          </div>
        </div>
      </div>
      <div ref="fourthSection" class="row h-30 mb-5 justify-content-center" :class="{ hidden: !showFourthSection }">
        <div class="col-md-4 d-flex align-items-center justify-content-center">
          <img class="img-a-medium" src="../../../assets//identical_art.jpeg" alt="two art pieces that look identical" />
        </div>
        <div class="col-md-4 d-flex align-items-center">
          <div class="d-flex justify-content-center flex-wrap">
            <p class="text-left section-text">
              You discover other Instagram accounts replicating your unique art
              style flawlessly.
            </p>
            <p class="section-text">What is going on?</p>
            <p class="section-text">
              After digging through the sources of these images, you begin to
              realize: a generative AI has taken your work as part of its
              training set, and is now producing work that happens to be almost
              identical to yours.
            </p>
          </div>
        </div>
        <div class="row h-20">
          <div class="col-md-12 d-flex justify-content-end">
            <purple-btn :tag="'button'" v-if="section3Completed && !section4Completed" :text="'Continue'" @click="
              showFifthSection = true;
            scrollIntoFifthSection();
            section4Completed = true;
            " style="margin-right: 35px;"/>
          </div>
        </div>
      </div>
      <div ref="fifthSection" class="row h-30 mb-5 justify-content-center" :class="{ hidden: !showFifthSection }">
        <div class="col-md-4 d-flex align-items-center">
          <div class="d-flex justify-content-center flex-wrap">
            <p class="text-left section-text">
              Your income from commissions is dwindling. Why would your
              followers value what you do, when an AI can generate something in
              the same style at a fraction of the time and cost.
            </p>
            <p class="section-text">
              Denied a stable income, you are forced to make a career change.
            </p>
            <p class="section-text">
              <b>So ends the tale of an artist, undone by artwork they had
                created.</b>
            </p>
          </div>
        </div>
        <div class="col-md-4 d-flex align-items-center justify-content-center">
          <img class="img-a-medium" src="../../../assets//sad_piggy.jpeg" alt="mean Instagram comments section" />
        </div>
        <div class="row h-20">
          <div class="col-md-12 d-flex justify-content-end">
            <purple-btn :tag="'button'" v-if="section4Completed && !section5Completed" :text="'Continue'" @click="
              showSixthSection = true;
            scrollIntoSixthSection();
            section5Completed = true;
            " style="margin-right: 35px;"/>
          </div>
        </div>
      </div>

      <div ref="sixthSection" class="row h-30 mb-8 justify-content-center" :class="{ hidden: !showSixthSection }">
        <div class="col-md-8 text-center!important">
          <br />
          <h1 class="mt-5" style="font-size: 28px">So... is this realistic?</h1>
          <br />
          <p class="text-center justify-content-center">
            <b>Actually yes. </b> Many artists are actually speaking out about
            their experiences of being victims of AI using their work as part of
            their training sets. The article below &darr; &darr; refers to a
            2023 lawsuit.
          </p>
        </div>

        <div class="mb-12"></div>

        <div class="article-snippet">
          <div class="article-image">
            <a href="https://www.theverge.com/2023/1/16/23557098/generative-ai-art-copyright-legal-lawsuit-stable-diffusion-midjourney-deviantart"
              target="_blank">
              <img src="../../../assets//artist_article.webp" alt="Artist at Work" />
            </a>
          </div>
          <h2 class="article-title">
            AI art tools Stable Diffusion and Midjourney targeted with copyright
            lawsuit
          </h2>
          <p class="article-meta">
            Published on January 17, 2023 by James Vincent
          </p>
          <p class="article-excerpt">
            Learn more about the artists Sarah Andersen, Kelly McKernan, and
            Karla Ortiz who began a lawsuit in January against Stable Diffusion
            and Midjourney, who are prominent AI generation tools.
          </p>
          <a class="article-link"
            href="https://www.theverge.com/2023/1/16/23557098/generative-ai-art-copyright-legal-lawsuit-stable-diffusion-midjourney-deviantart"
            target="_blank">Read More</a>
        </div>

        <div class="mb-8"><br /><br /></div>

        <div class="row h-20">
          <div class="col-md-12 d-flex justify-content-end align-items-center">
            <div class="mr-10">
              <p style="margin-right: 20px; margin-bottom: 0px;"><b>How does this happen?</b></p>
            </div>
            <router-link to="/dalle/ai-generated-vs-human-art" class="my-button" style="margin-right: 35px;">
              <purple-btn :text="'Continue'" @click="handlePageCompletionClick()" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "../../reusable/nav-bar.vue";
import ModuleNavigationBar from "../../reusable/module-navigation-bar.vue";
import PurpleBtn from "../../reusable-ui/purple-btn.vue";
import ImportantTermsCard from "../../reusable/important-terms-card.vue";

export default defineComponent({
  name: "DallePage1",
  data() {
    return {
      termsAndDefinitions: [
        {
          term: "GPT",
          definition:
            "Stands for Generative Pre-trained Transformer. It is a family of neural network models that use the transformer architecture. It powers recent generative AI applications such as ChatGPT (AWS, 2023).",
        },
        {
          term: "AI",
          definition:
            "AI (or Artificial Intelligence) is the development of computer systems that can perform tasks typically requiring human intelligence (OpenAI, 2023).",
        },
        {
          term: "Deepfake",
          definition:
            "A deepfake is a computer-made imitation video, image, or audio, mimicking reality and often impersonating individuals (Seon, n.d.).",
        },
        {
          term: "Copyright",
          definition:
            "Copyright is a form of intellectual property right. It gives the person who creates an original work exclusive rights to copy, publish, publicly perform, transmit and adapt their material (Copyright Licensing NZ, 2023)",
        },
      ],
      showFirstSection: true,
      showSecondSection: false,
      showThirdSection: false,
      showFourthSection: false,
      showFifthSection: false,
      showSixthSection: false,
      section1Completed: false,
      section2Completed: false,
      section3Completed: false,
      section4Completed: false,
      section5Completed: false,
    };
  },
  methods: {
    scrollIntoSecondSection() {
      this.$nextTick(() => {
        const element = this.$refs.secondSection as HTMLElement;
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
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
            block: "start",
            inline: "start",
          });
        }
      });
    },
    scrollIntoFourthSection() {
      this.$nextTick(() => {
        const element = this.$refs.fourthSection as HTMLElement;
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "start",
          });
        }
      });
    },
    scrollIntoFifthSection() {
      this.$nextTick(() => {
        const element = this.$refs.fifthSection as HTMLElement;
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "start",
          });
        }
      });
    },
    scrollIntoSixthSection() {
      this.$nextTick(() => {
        const element = this.$refs.sixthSection as HTMLElement;
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "start",
          });
        }
      });
    },
    handleReferenceClick(referenceSectionId: string) {
      const hash = `#${referenceSectionId}`;
      this.$router.push({ name: "references", hash });
    },
    handlePageCompletionClick(this: any) {
      this.$registerPageAsCompleted("dalle", "the-rise-of-dalle");
    },
  },
  components: {
    "nav-bar": NavBar,
    "module-navigation-bar": ModuleNavigationBar,
    "purple-btn": PurpleBtn,
    "important-terms-card": ImportantTermsCard,
  },
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap");

.container-fluid.page-container {
  height: flex;
  margin-top: 60px;
  margin-bottom: 20px;
}

.img-a {
  width: 75%;
}

.section-text {
  width: 65%;
}

.img-a-large {
  width: 100%;
  max-width: 500px;
}

.img-a-medium {
  width: 100%;
  max-width: 350px;
}

.img-a-small {
  width: 100%;
  max-width: 250px;
}

.hidden {
  display: none;
  opacity: 0;
  max-height: 0;
  overflow: hidden;
}

.container-fluid.page-container {
  height: auto;
  margin-top: 60px;
  margin-bottom: 20px;
}

.article-snippet {
  background-color: #f7f7f7;
  border: 1px solid #ddd;
  padding: 20px;
  margin-top: 20px;
  max-width: 1000px;
}

.article-title {
  font-size: 18px;
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
  margin-bottom: 20px;
}

.article-image img {
  max-width: 100%;
}

.article-snippet {
  background-color: #f7f7f7;
  border: 1px solid #ddd;
  padding: 20px;
  margin-top: 20px;
  max-width: 500px;
}


@media (max-width: 767.98px) {
  .section-text {
    width: 90%;
  }

  .img-a, .img-a-medium, .img-a-small{
    width: 60%;
  }

  .img-a-large {
    width: 80%;
  }

}
</style>
