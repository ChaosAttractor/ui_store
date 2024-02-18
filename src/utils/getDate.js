import moment from 'moment';
import 'moment/dist/locale/ru';

export default (date, format = 'LL') => {
  moment.locale('ru');
  return moment(date).format(format);
};
