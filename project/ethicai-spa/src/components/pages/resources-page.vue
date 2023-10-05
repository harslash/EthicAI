<template>
    <nav-bar />
    <div class="container-fluid page-container">
        <div class="row h-10 mb-5">
            <div class="col-md-12">
                <h1 class="mt-5 heading">Resources</h1>
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
    name: 'ResourcesPage',
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
}

.heading {
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    text-align: center;
}
</style>