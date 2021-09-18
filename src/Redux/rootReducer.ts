import { combineReducers } from "redux";
import rawReducer from "./FeatchRaw/reducer";
import authReducer from "./sauce/reducer";

const rootReducer = combineReducers({
  raws: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
