import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import store from './store';

const app = createApp(App);
app.config.productionTip = false;
app.use(store);
app.mount('#app');
