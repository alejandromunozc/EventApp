import React from "react";
import ReactDOM from "react-dom";
import App from "./routes/App";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";

import reducers from "./reducers";

import "./assets/styles/App.css";

const store = createStore(
  reducers, // all reducers // Eliminar comentarios
  {}, // Initial state // Eliminar comentarios
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
