import Vue from 'vue'

import * as timeFilters from './time'
import * as strFilters from './str'
import * as validateFilters from './validate'

let filters = {...timeFilters, ...strFilters,...validateFilters};

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
});

export default filters;
