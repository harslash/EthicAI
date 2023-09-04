<template>
    <div>
        <!-- Your HTML template goes here -->
        <h1>{{ message }}</h1>
        <button @click="changeMessage">Change Message</button>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

const message = ref('Hello, Vue!');

const changeMessage = () => {
    message.value = "This is a new message"
;}




export default defineComponent({
    name: 'LandingPage',
    data() {
        return {
            message,
        }
    }, 
    methods: {
        changeMessage
    }
});
</script>

<style scoped>
/* Your component-specific styles go here */
</style>