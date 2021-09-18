import { createActions } from "reduxsauce";

export const { Types, Creators } = createActions({
  fetchRequest: null,
  fetchSuccess: ["payload"],
});

export default Creators;
