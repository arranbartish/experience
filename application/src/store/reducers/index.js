import {routerReducer as routing} from 'react-router-redux';
import {combineReducers} from 'redux';
import user from './user/user.reducer';

const rootReducer = combineReducers({
  routing,
  user,
});

export default rootReducer;
