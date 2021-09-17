import { RawFetchAction } from "./interface";
import { FETCH_START, FETCH_SUCCESS, FETCH_END } from "./types";

const initilaState: {
  loading: boolean;
  fetchData: { id: number; title: string; body: string; userId: number }[];
} = {
  loading: false,
  fetchData: [],
};

function rawReducer(state = initilaState, action: RawFetchAction) {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        fetchData: action.payload,
      };
    case FETCH_END:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}

export default rawReducer;
