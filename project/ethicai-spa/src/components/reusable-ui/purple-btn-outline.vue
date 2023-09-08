<template>
    <button type="button" class="btn btn-outline-primary">{{ text }}</button>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'PurpleButtonOutline',
    props: {
        'text': String
    },
    methods: {
    }
});

</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap');

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

.btn {
    border: 2px solid  #6D0CFF;
    color: #6D0CFF;
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
}

.btn:hover {
    background-color: #6D0CFF;
    color: white;
}
</style>>