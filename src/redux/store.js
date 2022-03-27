import { createStore } from "redux";
import rootReducer from "./root-reducer";

const configureStore = (preloadedState) => {
  const store = createStore(rootReducer, preloadedState);
  return store;
};

export default configureStore;
