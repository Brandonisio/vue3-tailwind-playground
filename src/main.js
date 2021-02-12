import { createApp } from 'vue';
import store from './store';
import App from './App.vue';
import './assets/styles/index.css';
import VueViewportManager from './components/vue-viewport-manager/src/index';

const app = createApp(App);
app.use(store);
app.use(VueViewportManager, {store});

app.config.devtools = true;

app.mount('#app');
