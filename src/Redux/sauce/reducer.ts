import { Types } from "./sauce.action";

import { createReducer } from "reduxsauce";

interface initialData {
  data: Array<{ id?: number; title?: string; body?: string; userId?: number }>;
}

const initialState: initialData = {
  data: [],
};

const authLoginSuccess = (
  state: initialData,
  action: {
    type: string;
    payload: Array<{
      id?: number;
      title?: string;
      body?: string;
      userId?: number;
    }>;
  }
) => {
  return { ...state, data: action.payload };
};

const authReducer = createReducer(initialState, {
  [Types.FETCH_SUCCESS]: authLoginSuccess,
});

export default authReducer;
