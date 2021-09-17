import { Action } from "redux";
type fetchDataType = {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
};

export interface ResponseGenerator {
  data: Array<fetchDataType>;
}

export interface SagaAction extends Action {
  type: string;
}

export interface RawFetchAction extends Action {
  type: string;
  payload?: Array<fetchDataType>;
}
