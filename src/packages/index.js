import '@/scss/style.scss';

import ButtonAction from './ButtonAction';
import ButtonDelete from './ButtonDelete';
import ElGrid from './ElGrid';

const install = function(Vue, opts = {}) {
  [ButtonAction, ButtonDelete, ElGrid].map(component => {
    Vue.component(component.name, component);
  });
};

export default {
  install,
  ButtonAction,
  ButtonDelete,
  ElGrid
};
