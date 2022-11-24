import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
// import Vue from 'vue';
// import VueChatScroll from 'vue-chat-scroll';

createApp(App)
.use(router)
.use(createPinia())
.mount('#app')


// Vue.use(VueChatScroll);
