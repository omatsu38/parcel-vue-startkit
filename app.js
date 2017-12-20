import Vue from 'vue/dist/vue.esm.js';
import Hello from './vue/hello.vue'

const app = new Vue(Hello);
app.$mount('#app');