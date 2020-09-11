import React from "react";
import ReactDOM from "react-dom";
import App from "./routes/App";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";

import reducers from "./reducers";

import "./assets/styles/App.css";

const store = createStore(
  reducers, // all reducers
  {}, // Initial state
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
