import Vue from 'vue';
import Inputmask from 'inputmask';

export default Vue.directive('mask', {
  bind(el, binding) {
    if (binding.value) {
      let options =
        binding.arg === 'datetime'
          ? {
              alias: 'datetime',
              inputFormat: binding.value,
              placeholder: binding.value
            }
          : binding.value;

      const selectorList = el.querySelectorAll('input');

      selectorList.length
        ? Array.from(selectorList, inputNode => new Inputmask(options).mask(inputNode))
        : new Inputmask(options).mask(el);
    }
  }
});
