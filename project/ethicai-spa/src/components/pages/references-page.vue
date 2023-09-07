<template>
    <nav-bar />
    <div class="container-fluid page-container text-center">
        <div class="row h-25">
            <h1 class="main-heading"><u> References </u> </h1>
        </div>
        <div class="row">
            <div class="col-md-12">
                <h2 class="section-heading">The Age of Chatbots Module</h2> <!-- Second Header -->
            </div>
        </div>
        <div class="row">
            <!-- Add empty headers labeled "text" above each rectangle -->
            <div class="col-md-12">
                <h3 class="sub-heading">The Age of Chatbots</h3>
            </div>
            <div class="col-md-12">
                <div class="gray-rectangle"></div>
            </div>
            <div class="col-md-12">
                <h3 class="sub-heading">Too Good to be True?</h3>
            </div>
            <div class="col-md-12">
                <div class="gray-rectangle"></div>
            </div>
            <div class="col-md-12">
                <h3 class="sub-heading">Hallucination</h3>
            </div>
            <div class="col-md-12">
                <div class="gray-rectangle"></div>
            </div>
            <div class="col-md-12">
                <h3 class="sub-heading">Misuses and Plagiarism</h3>
            </div>
            <div class="col-md-12">
                <div class="gray-rectangle"></div>
            </div>
            
            <div class="col-md-12">
                <h2 class="section-heading">Rise of Dalle Module</h2> <!-- Second Header -->
            </div>
            <div class="col-md-12">
                <h3 class="sub-heading">The Rise of DALL·E</h3>
            </div>
            <div class="col-md-12">
                <div class="gray-rectangle"></div>
            </div>
            <div class="col-md-12">
                <h3 class="sub-heading">AI Generated vs Human Art</h3>
            </div>
            <div class="col-md-12">
                <div class="gray-rectangle"></div>
            </div>
            <div class="col-md-12">
                <h3 class="sub-heading">Copyright and Copywrong</h3>
            </div>
            <div class="col-md-12">
                <div class="gray-rectangle"></div>
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
    name: 'ReferencesPage',
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
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');
.container-fluid.page-container {
    min-height: calc(100vh - 60px); /* Set the minimum height to avoid going into the footer */
    margin-top: 60px;
    padding-bottom: 20px; /* Add some padding at the bottom for spacing */
    padding-top: 40px;
}

.main-heading {
    font-size: 36px;
    font-weight: bold;
}

.section-heading {
    text-align: left;
    text-decoration: underline;
    color: #6D0CFF;
    font-size: 24px;
}

.sub-heading {
    text-align: left;
    font-size: 24px;
}

.gray-rectangle {
    background-color: #ccc; /* Gray color for the rectangle */
    height: 100px; /* Adjust the height as needed */
    margin: 10px 0; /* Add vertical margin for spacing between rectangles */
}
</style>