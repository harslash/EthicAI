<template>
    <nav-bar />
    <div id="main" class="container-fluid page-container">
        <div class="row h-100">
            <div class="col-md-12 d-flex align-items-center">
                <module-overview :module-title="moduleTitle" :module-description="moduleDescription"
                    :module-img-filename="moduleImgFilename" :module-img-alt-text ="moduleImgAltText" :module-page-names="modulePageNames"
                    :module-page-routes="modulePageRoutes" :module-name="moduleName"
                    :page-name="pageName"></module-overview>
            </div>
        </div>
    </div>
    <page-footer />
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import NavBar from '../../reusable/nav-bar.vue'
import PageFooter from '../../reusable/page-footer.vue';
import ModuleOverview from '../../reusable/module_overview.vue';


export default defineComponent({
    name: 'DeepfakesOverviewPage',
    data() {
        return {
            moduleTitle: 'The Depth of Deepfakes',
            moduleDescription: 'In this module, you will learn about deepfakes and the nature of synthetic media, together with the implications this modification of media has on the real world.',
            modulePageNames: ['The Depth of Deepfakes', 'AI For Evil', 'Real or Not Real?', 'Deepfakes in Media', 'Judgement Day', 'Module Quiz'],
            modulePageRoutes: ['the-depth-of-deepfakes', 'ai-for-evil', 'real-or-not-real', 'deepfakes-in-media', 'judgement-day', 'deepfakes-quiz'],
            moduleName: 'deepfakes',
            pageName: 'the-depth-of-deepfakes',
            moduleImgFilename: 'deepfakes_module.png',
            moduleImgAltText: 'Illustration of face, one half human, one half robotic'
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
