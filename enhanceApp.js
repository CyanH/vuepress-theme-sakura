import 'static/icons';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; // 默认主题

export default ({
  Vue // VuePress 正在使用的 Vue 构造函数
}) => {
  Vue.use(ElementUI);
};
