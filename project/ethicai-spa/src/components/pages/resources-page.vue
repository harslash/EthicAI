<template>
    <nav-bar />
    <div class="container-fluid page-container">
        <div class="row h-10 mb-5">
            <div class="col-md-12">
                <h1 class="mt-5 heading">Resources</h1>
            </div>
        </div>

        <div class="row mb-5">
            <div class="col-md-12 d-flex justify-content-md-center align-items-center align-items-md-start flex-md-row flex-column">
                <div class="card mx-md-5 my-5 my-md-0" style="width: 18rem;">
                    <div class="img-container">
                        <img class="card-img-top" src="http://moralmachine.mit.edu/images/teaser.jpg" alt="Card image cap">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Moral Machine</h5>
                        <p class="card-text">A platform that allows you to gain perspective into the ethical dilemmas behind the moral decisions made by machine intelligence, such as self-driving cars.</p>
                        <a href="https://www.moralmachine.net/"  target="_blank" class="btn btn-primary">Navigate</a>
                    </div>
                </div>
                <div class="card mx-md-5 my-5 my-md-0" style="width: 18rem;">
                    <img class="card-img-top"  alt="Card image cap" src="https://dam-prod2.media.mit.edu/thumb/2023/06/23/IMG_1353-jonathan-williams-edited.jpg.1400x1400.jpg">
                    <div class="card-body">
                        <h5 class="card-title">Detect Fakes</h5>
                        <p class="card-text">A platform that allows you to practise trying to detect DeepFakes.</p>
                        <a href="https://detectfakes.media.mit.edu/"  target="_blank" class="btn btn-primary">Navigate</a>
                    </div>
                </div>
                <div class="card mx-md-5 my-5 my-md-0" style="width: 18rem;">
                    <div class="img-container">
                        <img class="card-img-top" src="https://dl.acm.org/cms/asset/2d78c0fc-794b-4611-bd35-188ebc503257/3313831.cover.jpg" alt="Card image cap">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">AI Literacy</h5>
                        <p class="card-text">This publication addresses the necessity of understanding user competencies for AI interaction and offers insights into designing AI technologies that promote AI literacy, providing a definitive AI literacy definition.</p>
                        <a href="https://dl.acm.org/doi/10.1145/3313831.3376727" target="_blank" class="btn btn-primary">Navigate</a>
                    </div>
                </div>
            </div>
           
        </div>

        <page-footer />
    </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '../reusable/nav-bar.vue';
import PageFooter from '../reusable/page-footer.vue';

export default defineComponent({
    name: 'ResourcesPage',
    data() {
        return {};
    },
    methods: {},
    components: {
        'nav-bar': NavBar,
        'page-footer': PageFooter,
    },
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap');

.container-fluid.page-container {
    margin-top: 60px;
    height: 120vh;
}

.heading {
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    text-align: center;
}

.btn {
    background-color: #6D0CFF;
}

.img-container{
    height: 200px;
    overflow: hidden;

}

.card-text {
    height: 170px;
}


.card{
    transition: all 0.2s ease;
    cursor: pointer;
  }
    
.card:hover{
    box-shadow: 5px 6px 6px 2px #e9ecef;
    transform: scale(1.1);
}
</style>