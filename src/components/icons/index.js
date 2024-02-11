import LogoutIcon from './LogoutIcon';

const icons = {
  LogoutIcon,
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
