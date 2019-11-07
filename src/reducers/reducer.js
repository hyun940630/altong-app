import { TYPE_USERNAME, TYPE_USERWORKPLACE } from "./actions";

const initialState = {
  username: "",
  userworkplace: ""
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case TYPE_USERNAME:
      return {
        ...state,
        username: action.username
      };
    case TYPE_USERWORKPLACE:
      return {
        ...state,
        workplace: action.workplace
      };
    default:
      return state;
  }
}

export default reducer;
