<template>
    <nav-bar />
    <!-- Hero -->
    <div class="hero">
        <div class="body">

            <div class="title" style="padding-top: 1%; padding-bottom: 1%;">
                <h1 style="font-size: 35px;">The best way to learn AI ethics</h1>
            </div>

            <div class="subtitle" style="padding-bottom: 1%;">
                <p style="font-size: x-large; line-height: 1.5;">
                    Explore the latest AI technologies and learn how we can use them responsibly.
                </p>
            </div>

            <div class="bottom">
                <div class="">
                    <router-link to="/all-modules">
                        <button class="get-started-btn">Get Started</button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>

    <!-- Card -->
    <div id="wrapper">
        <div id="first">
            <h2>Variety of AI technology</h2>
            <div id="image-div">
                <img id="image" :src="require('@/assets/undraw_developer_activity_re_39tg 1.png')" style="height: 229px; width: auto;" alt="Person with headphones at desktop computer, stylised Corporate Memphis design">
            </div>

            <div id="text">
                Learn AI ethics through real-world use cases of the latest AI technologies, such as ChatGPT, DALL-E and
                Whisper AI.
            </div>
        </div>

        <div id="second">
            <h2>Interactive learning</h2>
            <div id="image-div">
                <img id="image" :src="require('@/assets/undraw_active_options_re_8rj3 1.png')"
                    style="height: 229px; width: auto;" alt="Person in director's chair looking in direction of spotlights, stylised Corporate Memphis design">
            </div>

            <div id="text">
                Quickly grasp relevant ideas on AI ethics through visual and interactive demos. Save yourself from reading
                long, boring literature and articles.
            </div>
        </div>

        <div id="third">
            <h2>All in one place</h2>
            <div id="image-div">
                <img id="image" :src="require('@/assets/undraw_knowledge_re_5v9l 1.png')"
                    style="height: 229px; width: auto;" alt="Woman looks at whiteboard, stylised Corporate Memphis design">
            </div>

            <div id="text">
                Explore the intricacies of AI ethics through a series of fun and content-filled modules. All modules are
                easily accessible for you to continue learning anytime and anywhere.
            </div>
        </div>
    </div>
    <page-footer />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import NavBar from '../reusable/nav-bar.vue';
import PageFooter from '../reusable/page-footer.vue';

export default defineComponent({
    name: 'LandingPage',
    data() {
        return {
        }
    },
    methods: {

    },
    components: {
        'nav-bar': NavBar,
        'page-footer': PageFooter
    }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');

/* Styles for hero */
h1 {
    font-family: "Open Sans", sans-serif;
    font-weight: 700;
}

p {
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
}

.subtitle {
    width: 50%;
}

.title {
    width: 50%;
}

.hero {
    background: url('@/assets/overlaybg.png');
    background-repeat: no-repeat;
    background: cover;
    background-size: cover;
    min-height: 480px;
    max-height: 600px;
    justify-content: center;
    justify-items: center;
    margin-top: 60px;

}

.body {
    display: flex;
    flex-direction: column;
    padding: 10%;
    padding-left: 7%;
    text-align: left;
    color: white;
}

.bottom {
    flex: 5;
    /* 30% height */
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    /* Align content to the bottom */
    align-items: flex-start;
    /* Align content to the left */
}

.get-started-btn {
    background-color: #6d0cff;
    color: white;
    font-family: "Open Sans", sans-serif;
    font-weight: 500;
    font-size: 24px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

/* Styles for card */
h2 {
    font-family: "Open Sans", sans-serif;
    font-size: 24px;
    font-weight: 700;
}

#wrapper {
    display: flex;
    flex-wrap: wrap;
    /* Wrap elements so they flow below each other */
    overflow: hidden;
    flex-direction: row;
    float: center;
    padding: 1%;
    text-align: center;
}

#first {
    display: flexbox;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    padding: 3%;
    padding-left: 5%;
    padding-right: 5%;
    float: left;
}

#second {
    display: flexbox;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    padding-top: 3%;
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 3%;
    float: left;
}

#third {
    display: flexbox;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    padding: 3%;
    padding-left: 5%;
    padding-right: 5%;
    float: left;
}

#image {
    margin: 10px;
    align-self: center;
    padding-top: 7%;
    padding-bottom: 7%;
}

#image-div {
    display: flexbox;
    padding: 8%;
    float: center;
}

#text {
    float: left;
    clear: both;
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    font-weight: 400;
}


@media (max-width: 576px) {
    .body {
        align-items: center;
    }
    .subtitle, .title {
        width: 90%;
    }
}
</style>
