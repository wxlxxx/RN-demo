import {combineReducers} from 'redux';
import theme from './theme';
import userinfo from './userinfo';
import attendancelist from './attendancelist';

// 1.创建reducer
const index = combineReducers({
  theme: theme,
  userinfo: userinfo,
  attendancelist: attendancelist,
});

export default index;
