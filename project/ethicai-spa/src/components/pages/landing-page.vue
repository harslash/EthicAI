<template>
    <div class="container-fluid text-center">
      <div class="row h-100">
        <div class="col-md-6 image-col">
          <!-- <img src="../../assets/landing.png"/> -->
        </div>
        <div class="col-md-6">
        <div class="d-flex justify-content-center align-items-center">
            <form class="c">
                <h3 class="mb-4 form-title">Welcome back!</h3>
                <div class="form-text mb-5">Enter your details to begin learning</div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                </div>
                <div class="mb-5">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1">
                </div>
                <div class="mb-3">
                    <button type="submit" class="btn btn-primary btn-login">Login</button>
                </div>
                <div>
                    <button type="submit" class="btn btn-outline-primary btn-signup">Sign up</button>
                </div>
            </form>
        </div>
     
        </div>
      </div>
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
            
        }
    }, 
    methods: {
        
    }
});
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');

/* Your component-specific styles go here */
.image-col {
    background-image: url("../../assets/landing.png")
}

.container-fluid {
    height: 100vh
}

.btn-login {
    background-color: #6D0CFF;
    width: 20rem;
}

.btn-signup {
    width: 20rem;
}

.form-title {
    color: #6D0CFF;
    font-family: "Open Sans", sans-serif;
}
</style>