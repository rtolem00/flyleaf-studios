import App from '@/App.vue';
import router from '@/router';
import AOS from 'aos';
import 'aos/dist/aos.css';
// Prime Icons
import 'primeicons/primeicons.css';
// Imports PrimeVue library
import PrimeVue from 'primevue/config';
// Prime core CSS
import 'primevue/resources/primevue.min.css';
// Prime CSS must be loaded here, cannot be preloaded as SCSS
// Prime theme
import 'primevue/resources/themes/saga-blue/theme.css';
import { createApp } from 'vue';

const app = createApp(App);

// @ts-ignore
app.AOS = new AOS.init();

// @ts-ignore
app.use(router).use(PrimeVue).use(AOS).mount('#app');
