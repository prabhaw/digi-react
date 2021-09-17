import { ResponseGenerator } from "./interface";
import { REQUEST_FETCH, FETCH_END, FETCH_SUCCESS, FETCH_START } from "./types";

export const requestFetch = () => {
  return { type: REQUEST_FETCH };
};

export const fetchStart = () => {
  return { type: FETCH_START };
};

export const fetchSuccess = (response: ResponseGenerator) => {
  return { type: FETCH_SUCCESS, payload: response.data };
};

export const fetchEnd = () => {
  return { type: FETCH_END };
};
