import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import list from './list/reducer';

export default combineReducers({
  auth,
  user,
  list,
});
