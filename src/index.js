import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "react-redux";
import { createStore } from "redux";
import AllReducers from "./reducer";

// import Firebase, { FirebaseContext } from "./config/firebase";

const store = createStore(
  AllReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    {/* <FirebaseContext.Provider value={new Firebase()}> */}
    <App />
    {/* </FirebaseContext.Provider> */}
  </Provider>,
  // </React.StrictMode>
  document.getElementById("root")
);
