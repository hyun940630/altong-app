import { combineReducers } from "redux";
import { navigatorReducer } from "../navigation";

const reducer = combineReducers({
  navigator: navigatorReducer
});

export { reducer };
