import Vue from 'vue';
import SvgIcon from 'components/SvgIcon'; // svg组件
import Element from 'element-ui';

import './static/svg';
import 'element-ui/lib/theme-chalk/index.css';

// register globally
Vue.component('svg-icon', SvgIcon);
Vue.use(Element);
