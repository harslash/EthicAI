import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import App from './App.vue';
import router from './router'

//styling
import 'bootstrap/dist/css/bootstrap.css';
import 'primevue/resources/themes/saga-blue/theme.css'; // Choose a theme
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';


const app = createApp(App).use(router);

app.use(PrimeVue);
app.use(router)

import Button from "primevue/button"
import Slider from 'primevue/slider';
import Dialog from 'primevue/dialog';
import MenuBar from "primevue/menubar"



app.component('prime-button', Button);
app.component('prime-slider', Slider);
app.component('prime-dialog', Dialog);
app.component('MenuBar', MenuBar);


app.mount('#app');