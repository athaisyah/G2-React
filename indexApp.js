//Dependencies
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {PersistGate} from 'redux-persist/integration/react';

import App from './App';
import {store, persistor} from './redux/stores/store';

// import AllReducers from './redux/reducers';
// const store = createStore(AllReducers);

class IndexApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <App />
        </PersistGate>
      </Provider>
    );
  }
}

export default IndexApp;
