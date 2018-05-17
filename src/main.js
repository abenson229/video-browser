import Vue from 'vue';
import App from './App';

new Vue({
  render: h => h(App) // 'h' is 'createElement'
}).$mount("#app");  // could also add an el: "#app" above