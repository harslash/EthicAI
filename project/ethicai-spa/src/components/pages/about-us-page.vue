<template>
    <nav-bar />
    <div class="container-fluid page-container">
        <div class="row h-10 mb-5">
            <div class="col-md-12">
                <h1 class="mt-5 heading">About Us</h1>
                <div class="tw-w-3/5 tw-m-auto tw-mt-10">
                    <p>
                        The EthicAI team is a quintet of passionate, competent computer science students in our final year
                        of study at the University of Auckland. We want to see artificial intelligence used responsibly, so
                        we created the EthicAI website to make engaging educational material accessible for all university
                        students to learn about AI.<br><br>Our site was made in 2023 for the Computer Science 399 Capstone
                        Course
                        with the support of Danielle Lottridge and Thomas Lacombe, who provided valuable feedback and
                        guidance.
                    </p>
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
    name: 'AboutUsPage',
    data() {
        return {};
    },
    methods: {},
    components: {
        'nav-bar': NavBar,
        'page-footer': PageFooter,
    },
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap');

.container-fluid.page-container {
    margin-top: 60px;
    height: 90vh;
}

.heading {
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    text-align: center;
}
</style>
