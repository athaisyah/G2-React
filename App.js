import React from 'react';
/* NAVIGATION */
import {NavigationContainer} from '@react-navigation/native';
import NavStack from './navigation/ImagesNavigator';
/* STORE REDUX */
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import imagesReducer from './store/images-reducer';

const rootReducer = combineReducers({
  images: imagesReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NavStack />
      </NavigationContainer>
    </Provider>
  );
}
