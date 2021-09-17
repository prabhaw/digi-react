import { combineReducers } from "redux";
import rawReducer from "./FeatchRaw/reducer";

const rootReducer = combineReducers({
  raws: rawReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
