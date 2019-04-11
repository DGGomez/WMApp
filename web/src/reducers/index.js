import { combineReducers } from 'redux';
import orderReducer from './orderReducer';
import auth from './userReducer';

const rootReducer = combineReducers({
   order: orderReducer,
   auth
});

export default rootReducer;
