


window.Vue = require('vue') // подключаем Vue 

import store from './store/index.js' // подключаем файл с натсройками хранилища Vuex

import regeneratorRuntime from "regenerator-runtime"; // Для работы с асинхронными  функциями


Vue.component('main-page', require('./components/mainPage/mainPage.vue').default)





// создаем экземпляр vue где подключаем самое главное переадрасицию, визуализацию элемнетов и хранилище
new Vue({
  store,
  el: "#app" 
})