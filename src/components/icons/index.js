import LogoutIcon from './LogoutIcon';
import OrdersIcon from './OrdersIcon';

const icons = {
  LogoutIcon,
  OrdersIcon,
};

export default {
  install(Vue) {
    [icons].forEach((element) => {
      Object.keys(element).forEach((item) => {
        Vue.component(item, element[item]);
      });
    });
  },
};
