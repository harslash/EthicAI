<template>
    <nav-bar/>
    <div class="container-fluid page-container">
        <div class="row h-100">
            <div class="col-md-12 d-flex align-items-center">
                <module-overview
                    :module-title="moduleTitle"
                    :module-description="moduleDescription"
                    :module-img-filename ="moduleImgFilename"
                    :module-page-names="modulePageNames"
                    :module-name="moduleName"
                    :page-name="pageName"
                    ></module-overview>
            </div>
        </div>
    </div>
    <page-footer/>
</template>

<script lang="ts">

import { defineComponent} from 'vue';
import NavBar from '../../reusable/nav-bar.vue'
import PageFooter from '../../reusable/page-footer.vue';
import ModuleOverview from '../../reusable/module_overview.vue';


export default defineComponent({
    name: 'DalleOverviewPage',
    data() {
        return {
            moduleTitle: 'The Rise of DALL·E',
            moduleDescription: 'In this module, you will discover the world of AI generated art. The highs and lows, including the impact these generators have on artists and creative integrity.',
            moduleImgSrc: '../../../assets/purple_robot.jpeg',
            modulePageNames: ['The Rise of DALL-E', 'AI Generated vs. Human Art', 'The Complexities of Copyright'],
            moduleName: 'dalle',
            pageName: 'the-rise-of-dalle',
            moduleImgFilename: 'purple_robot.jpeg'
        }
    },
    methods: {

    },
    components: {
        'nav-bar': NavBar,
        'page-footer': PageFooter,
        'module-overview': ModuleOverview
    }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');

.container-fluid.page-container {
    height: 100vh;
    margin-top: 60px;
}

@media (min-width: 767.98px) {
    .module-overview-container {
        height: 75%;
    }
}

@media (max-width: 767.98px) {
   .container-fluid.page-container {
        height: 120vh       
    }
}
</style>
