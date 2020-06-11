import Vue from 'vue';
import App from './App.vue';
import './scss/root.scss';
import './directives';
import './libs';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
