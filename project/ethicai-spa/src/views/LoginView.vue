<template>
    <div class="login">
      <login-page></login-page>
    </div>
</template>

<script lang="ts">
import LoginPage from '../components/pages/login-page.vue'
export default {
    name: 'LoginView',
    components: {
        'login-page': LoginPage
    }
}
</script>
