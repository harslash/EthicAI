<template>
  <div class="container-fluid">
     <div class="row">
      <div class="col-md-8 p-5">
        <img class src="../../assets/logo-bland.png" width="220"/>
      </div>
      <div class="col-md-2 p-5">
        <h4 class="mb-3">Company</h4>
        <ul class="footer-list">
          <li class="mb-2">
            <router-link to="/references">
                <a href="#">References</a>
            </router-link>
          </li>
          <li class="mb-2"><a href="#">Our team</a></li>
        </ul>
      </div>
      <div class="col-md-2 p-5">
         <h4 class="mb-3">Product</h4>
          <ul class="footer-list">
            <li class="mb-2"><a href="#">T&C</a></li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageFooter',
  data() {
    return {
    }
  },
  methods: {
  }
});
</script>

<style lang="css" scoped>
  .container-fluid {
    background-color: #6D0CFF;
    color: #ffffff;
    height: 300px;
  }

  .footer-list {
     list-style-type: none;
     margin-left: 0;
     padding: 0;
  }

  .footer-list a {
    text-decoration: none;
    color: #ffffff;
  }

   .footer-list a:hover {
    text-decoration: none;
    color: #b3b4b5;
  }
</style>