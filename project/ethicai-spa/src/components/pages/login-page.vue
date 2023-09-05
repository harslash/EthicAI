<template>
    <div class="container-fluid text-center">
      <div class="row h-100">
        <div class="col-md-6 image-col">
          <!-- <img src="../../assets/landing.png"/> -->
        </div>
        <div class="d-flex col-md-6 align-items-center justify-content-center">
        <div class="d-flex justify-content-center">
            <form class="form">
                <h3 class="mb-4 form-title">Welcome back!</h3>
                <div class="form-text mb-5">Enter your details to begin learning</div>
                <div class="d-flex mb-2">
                    <label>Email address</label>
                </div>
                <div class="mb-3">
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                </div>
                 <div class="d-flex mb-2">
                    <label>Password</label>
                    </div>
                <div class="mb-5">
                    <input type="password" class="form-control" id="exampleInputPassword1">
                </div>
                <div class="mb-3">
                    <button type="submit" class="btn btn-primary btn-login" disabled>Login</button>
                </div>
                <div>
                    <button type="submit" class="btn btn-outline-primary btn-signup" disabled>Sign up</button>
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
    height: 105vh
}

.btn-login {
    background-color: #6D0CFF;
    width: 20rem;
}

.btn-login:hover {
    background-color: #C324FF;
}

.btn-signup {
    width: 20rem;
    color: #6D0CFF;

}

.btn-signup:hover {
   background-color: #C324FF;
}

.form-title {
    color: #6D0CFF;
    font-family: "Open Sans", sans-serif;
    text-align: left;
}

.form-text {
    text-align: left;
}

.form {
    padding-top: auto;
}
</style>