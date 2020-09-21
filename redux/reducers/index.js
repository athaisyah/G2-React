import {combineReducers} from 'redux';
import AuthReducer from './authReducer';
import PhotoReducer from './photoReducer';

const AllReducers = combineReducers({
  authentication: AuthReducer,
  authphoto: PhotoReducer,
});

export default AllReducers;
