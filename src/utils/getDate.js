import moment from 'moment';
import 'moment/dist/locale/ru';

export default (date, format = 'LL') => {
  if (!date) {
    return '\u2014';
  }

  moment.locale('ru');
  return moment(date).format(format);
};
