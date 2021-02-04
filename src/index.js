

// service worker

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(
      registration => {
        console.log(`Service Worker registered! Scope: ${registration.scope}`);
      },
      error => {
        console.error(`Service Worker registration failed: ${error}`);
      },
    );
  });
}

// end service worker

window.Vue = require('vue') // подключаем Vue 

import store from './store/index.js' // подключаем файл с натсройками хранилища Vuex

import regeneratorRuntime from "regenerator-runtime"; // Для работы с асинхронными  функциями


Vue.component('main-page', require('./components/mainPage/mainPage.vue').default)  // главная страница

Vue.component('modal', require('./components/modal/modal.vue').default)  // модальное окно




// создаем экземпляр vue где подключаем самое главное переадрасицию, визуализацию элемнетов и хранилище
new Vue({
  store,
  el: "#app" 
})