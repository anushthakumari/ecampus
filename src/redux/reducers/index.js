import {combineReducers} from '@reduxjs/toolkit';

import authReducer from './auth';
import tab_bar_visibility_reducer from './tab_bar_visibility';

export default combineReducers({
  auth: authReducer,
  tab_bar_visibility: tab_bar_visibility_reducer,
});
