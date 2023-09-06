<template>
   <div class="card" style="width: 18rem;">
      <div class="card-header">
        <h5>Important terms</h5>
        <p>Click to learn more</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="py-2" v-for="item in terms" :key="item">{{ item }}</li>
      </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'GeneralTermsCard',
    props: {
        'terms': Array as () => string[],
    },
    methods: {

    },
});
</script>

<style scoped>
/* Add your CSS styles here, scoped to this component */
</style>
