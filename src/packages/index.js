import '../scss/style.scss';
import '../directives';

import ButtonAction from './ButtonAction/ButtonAction';
import ButtonDelete from './ButtonDelete/ButtonDelete';
import ElGrid from './ElGrid/main.vue';

const install = function(Vue, opts = {}) {
  [ButtonAction, ButtonAction, ElGrid].map(component => {
    Vue.component(component.name, component);
  });
};

export default {
  install,
  ButtonAction,
  ButtonDelete,
  ElGrid
};
