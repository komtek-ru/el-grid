import Vue from 'vue';
import App from './App.vue';
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import ElGrid from './packages';
import './scss/root.scss';

Vue.use(ElementUI);
Vue.use(ElGrid);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
