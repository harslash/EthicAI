<template>
   <div class="card" style="width: 18rem;">
      <div class="card-header">
        <p class="card-header-title mb-0">Important terms</p>
        <span class="card-header-subtitle">Click to learn more</span>
      </div>
      <ul class="list-group list-group-flush">
        <li class="py-2 card-body" v-for="item in terms" :key="item">{{ item }}</li>
      </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'ImportantTermsCard',
    props: {
        'terms': Array as () => string[],
    },
    methods: {

    },
});
</script>

<style scoped>
/* Add your CSS styles here, scoped to this component */
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@600;700;800&display=swap');

.card {
  border: 2px solid #000000;
}
.card-header{
  background-color: #6D0CFF;
  color: #ffffff;
}

.card-header-title {
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
}

.card-header-subtitle {
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 0.7rem;
}

.card-body {
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    list-style-type: none;
}

.card-body:hover {
    color: #6D0CFF;
    font-weight: 800;
}



</style>
