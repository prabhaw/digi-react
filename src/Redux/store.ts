import { applyMiddleware, compose, createStore } from "redux";
import createMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const initialState = {};
const sagaMiddleware = createMiddleware();

export default function configureStore() {
  const middleware = [sagaMiddleware];
  const ENV = process.env.NODE_ENV;
  let composeEnhancer = compose;
  if (ENV !== "production") {
    const composeWithDevToolsExtension =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    if (typeof composeWithDevToolsExtension === "function") {
      composeEnhancer = composeWithDevToolsExtension;
    }
  }
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancer(applyMiddleware(...middleware))
  );
  sagaMiddleware.run(rootSaga);
  return { store };
}
