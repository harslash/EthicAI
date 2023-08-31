import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import App from './App.vue';
import './index.css';


const app = createApp(App);

app.use(PrimeVue);

import Button from "primevue/button"
import Slider from 'primevue/slider';
import Dialog from 'primevue/dialog';


app.component('prime-button', Button);
app.component('prime-slider', Slider);
app.component('prime-dialog', Dialog);


app.mount('#app');