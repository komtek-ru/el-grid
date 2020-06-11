export const formProps = {
  size: {
    type: String,
    default: 'small',
    validator: sizeValidator
  },
  showResetBtn: {
    type: Boolean,
    default: true
  },
  showIcon: {
    type: Boolean,
    default: true
  },
  iconClassName: {
    type: String,
    default: 'el-icon-search search-icon'
  },
  inline: {
    type: Boolean,
    default: true
  },
  fuzzy: {
    type: Boolean,
    default: true
  },
  labelWidth: Number,
  itemWidth: Number,
  submitHandler: Function,
  submitLoading: {
    type: Boolean,
    default: false
  },
  submitBtnText: {
    type: String,
    default: 'Найти'
  },
  resetBtnText: {
    type: String,
    default: 'Обновить таблицу'
  },
  forms: {
    type: Array,
    required: true
  }
};

function sizeValidator(value) {
  const methodTypes = ['large', 'small', 'mini'];
  const valid = methodTypes.indexOf(value.toLowerCase()) !== -1 || value === '';
  if (!valid) {
    throw new Error(`Size must be one of ['large', 'small', 'mini']`);
  }
  return valid;
}
