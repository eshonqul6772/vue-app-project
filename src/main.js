import  { createApp } from 'vue';

import App from './App.vue';

import store from '@/store';
import {router} from '@/router';

import uiComponents from  '@/components';

import './assets/normalize.css';

const app = createApp(App);

uiComponents.map(component => app.component(component.name, component));

app.use(store);
app.use(router);
app.mount('#app');
