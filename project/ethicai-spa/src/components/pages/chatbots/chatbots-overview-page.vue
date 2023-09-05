<template>
    <nav-bar/>
    <div class="container-fluid page-container">
        <div class="row h-100">
            <div class="col-md-12">
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
    name: 'ChatbotsOverviewPage',
    data() {
        return {
            moduleTitle: 'The Age of Chatbots',
            moduleDescription: 'In this module, you’ll learn about what chatbots are, the limitations of ChatGPT, and guidelines surrounding using ChatGPT.',
            moduleImgSrc: '../../../assets/chatbots_module.png',
            modulePageNames: ['The Age of Chatbots', 'Too Good to be True?', 'Misuse and Plagarism', 'Module Quiz'],
            moduleName: 'chatbots',
            pageName: 'the-age-of-chatbots',
            moduleImgFilename: 'chatbots_module.png'
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
    height: 105vh;
    margin-top: 60px;
}
</style>