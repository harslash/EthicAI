<template>
    <nav-bar />
        <div class="container-fluid page-container text-center ">

            <!-- LLM cards -->
            <div id="wrapper">
                
                <router-link to="/chatbots" custom v-slot="{navigate}">
                    <div class="card" @click="navigate" role="link">
                        <img :src="require('@/assets/chatbots_Thumbnail.png')" alt="Chatbots" style="width:100%;">
                        <div class="container">
                            <h4>The Rise of Chatbots</h4>
                            <p>Chatbots are now everywhere. Find out how privacy battles bias, and learn how to protect yourself from misinformation!</p>
                        </div>
                    </div>
                </router-link>

                <div class="card">
                    <img :src="require('@/assets/copilot_Thumbnail.png')" alt="Chatbots" style="width:100%">
                    <div class="container">
                        <h4>Understanding Copilot</h4>
                        <p>Placeholder text</p>
                    </div>
                </div>

                <div class="card">
                    <img :src="require('@/assets/placeholder_Thumbnail.png')" alt="Chatbots" style="width:100%">
                    <div class="container">
                        <h4>Placeholder</h4>
                        <p>Placeholder text</p>
                    </div>
                </div>

            </div>
        </div>
    <page-footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '../reusable/nav-bar.vue';
import PageFooter from '../reusable/page-footer.vue';

export default defineComponent({
    name: 'AllModulesPage',
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

#wrapper {
    display: flex;
    flex-wrap: wrap; /* Wrap elements so they flow below each other */
    overflow: hidden;
    flex-direction: row;
    float: center;
    padding: 1%;
    padding-top: 5%;
    margin-left: 4%;
    margin-right: 4%;
}

.card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px; /* 5px rounded corners */

    display:flexbox;
    flex: 1;
    flex-direction: column;
    justify-content: top;
    text-align: center;
    padding: 2%;
    float: left;
    margin: 3%;

}

.card:hover {
    background-color: #E5D1FF;
}

h4 {
    font-family: "Open Sans", sans-serif;
    font-weight: 700;
    font-size: 20px;
    padding-top: 1%;
    padding-bottom: 1%;
}

p {
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    font-size: 16px;
}

/* Add rounded corners to the top left and the top right corner of the image */
img {
    border-radius: 5px 5px 0 0;
    padding-bottom: 5%;
}
[role="link"]:hover {
  cursor: pointer;
}
</style>