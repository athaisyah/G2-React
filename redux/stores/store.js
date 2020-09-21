import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import AsyncStorage from '@react-native-community/async-storage';
import AllReducers from '../reducers/index';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['navigation'],
};

const persistedReducer = persistReducer(persistConfig, AllReducers);

const store = createStore(
  persistedReducer, // pass the persisted reducer instead of authReducer to createStore
  applyMiddleware(), // add any middlewares here
);

const persistor = persistStore(store); // used to create the persisted store, persistor will be used in the next step

export {store, persistor};

// export default () => {
//   let store = createStore(persistedReducer);
//   let persistor = persistStore(store);
//   return {store, persistor};
// };

// const store = createStore(persistedReducer);
// const persistor = persistStore(store);
// export {store, persistor};
