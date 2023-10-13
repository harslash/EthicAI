<template>
    <div>
        <nav class="navbar navbar-expand-sm navbar-light bg-light fixed-top" aria-label="Third navbar example">
            <div class="container-fluid">
                <a href="#main" class="skiplink">Skip to main content</a>
                <router-link to="/" class="navbar-brand">
                    <img src="../../assets/logo.png" alt="Company Logo" width="130">
                </router-link>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav me-auto mb-2 mb-sm-0">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/">
                                Home
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/all-modules">
                                Modules
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/resources">
                                Resources
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/about-us">
                                About Us
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'NavBar',
    data() {
        return {
        }
    },
    methods: {
    }
});
</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');

/* Your component-specific styles go here */
.navbar {
    border-bottom: 2px solid #C9C9C9;
}

.navbar-nav a.nav-link {
    font-size: 1rem;
    font-family: "Open Sans", sans-serif;
    color: #4d4d4d;
}

a.nav-link:hover {
    color: white;
    background-color: #6D0CFF;
}

li.nav-item {
    margin-left: 1rem;
}

.btn {
    background-color: #6D0CFF;
    width: 7rem;
    font-weight: 600;
}

.btn:hover {
    background-color: white;
    border: 2px solid #6D0CFF;
    color: #6D0CFF;
}

.skiplink {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
}

.skiplink:focus {
    position: static;
    width: auto;
    height: auto;
}
</style>

