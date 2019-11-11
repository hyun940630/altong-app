// Actions
export const INSERT_USERINFO = "INSERT_USERINFO";
export const SET_USERINFO = "SET_USERINFO";

// Reducer

const initialState = {
  user: {
    username: "",
    userworkplace: ""
  }
};

// action을 보낼 때마다 자동으로 리듀서를 실행함
// 리덕스는 자동으로 액션을 리듀서로 보냄
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INSERT_USERINFO:
      console.log(state);
      return {
        ...state,
        user: {
          username: action.payload,
          userworkplace: action.payload
        }
      };
    case SET_USERINFO:
      return {
        ...state,
        user: {
          username,
          userworkplace
        }
      };
    default:
      return state;
  }
}

// Reducer Functions

// Action Creators
export const insertUserInfo = user => {
  return { type: INSERT_USERINFO, payload: user };
};

// export const setUserInfo = user => {
//   return { type: SET_USERINFO, payload: user };
// };

// Export

// export const actionCreators = {
//   insertUsername,
//   insertUserworkplace
// };

// export default reducer;
