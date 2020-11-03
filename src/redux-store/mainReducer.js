import { combineReducers } from "redux";

import { reducer as AuthReducer } from "./models/auth";
import { reducer as CommonReducer } from "./models/common";

export const mainReducer = combineReducers({
  auth: AuthReducer,
  common: CommonReducer,
});
