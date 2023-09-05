<template>
    <nav-bar/>
    <div class="container-fluid page-container">
        <div class="row h-100">
            <div class="col-md-12">
                <module-overview></module-overview>
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