import DeleteIcon from './DeleteIcon';
import DeliveryIcon from './DeliveryIcon';
import EditIcon from './EditIcon';
import LogoutIcon from './LogoutIcon';
import OrdersIcon from './OrdersIcon';

const icons = {
  DeleteIcon,
  DeliveryIcon,
  EditIcon,
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
