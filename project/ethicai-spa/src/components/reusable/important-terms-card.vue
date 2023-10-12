<template>
   <div class="card terms-card" :style="{width: '18rem', height: `${cardHeight}px`}">
      <div class="card-header terms-card-header">
        <p class="terms-card-header-title mb-0">Important terms</p>
        <span class="terms-card-header-subtitle">Hover to learn more</span>
      </div>
      <ul class="list-group list-group-flush">
        <li 
          class="py-2 card-body terms-card-body" 
          v-for="item in termsAndDefinitions" 
          :key="item.term"
          v-tooltip.right="{ value: getTooltipContent(item), escape: true, class: 'custom-error' }">{{ item.term }}
        </li>
      </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface TermObject {
  term: string;
  definition: string;
}

export default defineComponent({
    name: 'ImportantTermsCard',
    props: {
        'termsAndDefinitions': Array as () => TermObject[],
        'cardHeight': {
          type: [String, Number],
          default: 200
        }
    },
    methods: {
        getTooltipContent(item: TermObject) {
          return `<p class='text-black'>${item.definition}</p>`;
        },
    },
});
</script>

<style>
/* Add your CSS styles here, scoped to this component */
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap');
.terms-card {
  border: 2px solid #000000;
}
.terms-card-header{
  background-color: #6D0CFF;
  color: #ffffff;
}

.terms-card-header-title {
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
}

.terms-card-header-subtitle {
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 0.7rem;
}

.terms-card-body {
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    list-style-type: none;
}

.terms-card-body:hover {
    color: #6D0CFF;
    font-weight: 800;
}

.custom-error .p-tooltip-text {
    background-color: #E5D1FF;
    color: rgb(255, 255, 255);
    font-weight: 400;
    font-family: "Open Sans", sans-serif;
}
.custom-error.p-tooltip-right .p-tooltip-arrow {
    border-right-color: #E5D1FF;
}
</style>
