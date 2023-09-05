<template>
    <nav-bar/>
    <div class="container-fluid page-container text-center">
        <div class="row h-100">
            <h1>The Age of Chatbots</h1>
        </div>
    </div>
    <page-footer/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '../../reusable/nav-bar.vue';
import PageFooter from '../../reusable/page-footer.vue';


export default defineComponent({
    name: 'ChatbotsPage1',
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
    height: 105vh;
    margin-top: 60px;
}
</style>