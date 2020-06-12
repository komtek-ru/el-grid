import Vue from 'vue';
import App from './App.vue';
import './scss/root.scss';
import './directives';
import './libs';

import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
Vue.use(ElementUI);

import ElGrid from './packages';
Vue.use(ElGrid);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
