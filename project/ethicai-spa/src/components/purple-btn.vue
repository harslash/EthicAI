<template>
    <div class="hello">
        <div class="justify-center flex bg-yellow-300 items-center h-screen">
            <div class="text-4xl">
            Hello 👋🏼
            </div>
        </div>
        <prime-button label="Submit" />
     
    </div>

    <div class="card">
        <h1>Hello PrimeVue</h1>
        <prime-dialog header="My Awesome Dialog" v-model:visible="dialogVisible" :style="{ width: '50vw' }">
          <p>"In some ways, programming is like painting. You start with a blank canvas and certain basic raw materials. You use a combination of science, art, and craft to determine what to do with them." <br> <strong> - Andrew Hunt</strong></p>
        </prime-dialog>
        <prime-button
          label="My Awesome Button"
          icon="pi pi-angle-right"
          class="p-button-success"
          @click="showDialog"
        />
      </div>
</template>
<script lang="ts">
  export default {
    name: "App",
    data() {
        return {
            dialogVisible: false
        }
    },
    components: {},
    methods: {
        showDialog() {
            this.dialogVisible = true;
        }
    }
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

</style>>