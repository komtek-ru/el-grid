let props = {
  height: [String, Number],
  loading: {
    type: Boolean,
    default: false
  },
  maxHeight: [String, Number],
  showGridHeader: {
    type: Boolean,
    default: true
  },
  size: String,
  stripe: {
    type: Boolean,
    default: true
  },
  border: {
    type: Boolean,
    default: true
  },
  fit: {
    type: Boolean,
    default: true
  },
  showHeader: {
    type: Boolean,
    default: true
  },
  highlightCurrentRow: Boolean,
  currentRowKey: [String, Number],
  rowClassName: [String, Function],
  rowStyle: [String, Function],
  rowKey: [String, Function],
  emptyText: String,
  defaultExpandAll: Boolean,
  expandRowKeys: Array,
  defaultSort: Object,
  tooltipEffect: String,
  showSummary: Boolean,
  sumText: String,
  summaryMethod: Function,
  tableStyle: {
    type: String,
    default: 'width:100%;'
  },
  fetch: {
    type: Function
  },
  url: {
    type: String
  },
  method: {
    type: String,
    default: 'get',
    validator: value => {
      const methodTypes = ['get', 'post', 'put', 'delete'];
      return methodTypes.indexOf(value.toLowerCase()) !== -1;
    }
  },
  headers: {
    type: Object,
    default: () => {
      return {};
    }
  },
  listField: {
    type: String,
    default: 'data.list'
  },
  totalField: {
    type: String,
    default: 'data.total'
  },
  params: {
    type: Object,
    default: () => {
      return {};
    }
  },
  formOptions: {
    type: [Boolean, Object],
    default: false
  },
  payload: {
    type: Object,
    default: () => ({})
  },
  autoload: {
    type: Boolean,
    default: true
  },
  type: {
    type: String,
    default: 'remote',
    validator(value) {
      const types = ['remote', 'local'];
      const validType = types.indexOf(value) !== -1;
      if (!validType) {
        throw new Error(`Invalid type of '${value}'`);
      }
      return validType;
    }
  },
  data: {
    type: Array
  },
  dataHandler: {
    type: Function
  },
  columns: {
    type: Array,
    required: true
  },
  showPagination: {
    type: Boolean,
    default: true
  },
  pageSizes: {
    type: Array,
    default: () => {
      return [20, 30, 40];
    }
  },
  paginationLayout: {
    type: String,
    default: 'prev, pager, next, sizes, total'
  },
  pageIndexKey: {
    type: String,
    default: 'page'
  },
  pageSizeKey: {
    type: String,
    default: 'pageSize'
  },
  sortFieldKey: {
    type: String,
    default: 'sortField'
  },
  orderSortKey: {
    type: String,
    default: 'sortOrder'
  },
  orderAscKey: {
    type: String,
    default: 'ascending'
  },
  orderDescKey: {
    type: String,
    default: 'descending'
  },
  expandRowByClick: {
    type: Boolean,
    default: false
  }
};

export default props;
