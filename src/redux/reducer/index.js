import { SET_NAME } from "../actions/ActionTypes";

const initialState = {
  name: ""
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_NAME:
      return {
        name: state.name(action.payload)
      };
    default:
      return state;
  }
}

export default reducer;
