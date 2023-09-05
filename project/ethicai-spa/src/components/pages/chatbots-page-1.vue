<template>
    <nav-bar />
    <div class="container-fluid page-container">
        <div class="row h-100">

        </div>
    </div>
    <page-footer />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import NavBar from '../reusable/nav-bar.vue';
import PageFooter from '../reusable/page-footer.vue';


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