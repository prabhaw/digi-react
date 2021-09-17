import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "./Redux/store";

const { store } = configureStore();

const render = (Component: React.ComponentType<any>) => {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,

    document.getElementById("root")
  );
};

render(App);
