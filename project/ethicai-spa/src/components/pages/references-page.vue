<template>
    <nav-bar />
    <div class="container-fluid page-container text-center">
        <div class="row h-25">
           <h1><u> References </u> </h1>
        </div>
        <div class="row">
            <!-- Add seven full-width gray rectangles here -->
            <div class="col-md-12">
                <div class="gray-rectangle"></div>
            </div>
            <div class="col-md-12">
                <div class="gray-rectangle"></div>
            </div>
            <div class="col-md-12">
                <div class="gray-rectangle"></div>
            </div>
            <div class="col-md-12">
                <div class="gray-rectangle"></div>
            </div>
            <div class="col-md-12">
                <div class="gray-rectangle"></div>
            </div>
            <div class="col-md-12">
                <div class="gray-rectangle"></div>
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
    padding-top: 20px;
}
.gray-rectangle {
    background-color: #ccc; /* Gray color for the rectangle */
    height: 100px; /* Adjust the height as needed */
    margin: 10px 0; /* Add vertical margin for spacing between rectangles */
}
/* Your component-specific styles go here */
</style>