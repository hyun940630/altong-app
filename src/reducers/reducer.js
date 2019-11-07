// Actions
const INSERT_USERNAME = "INSERT_USERNAME";
const INSERT_USERWORKPLACE = "INSERT_USERWORKPLACE";

// Action Creators
const insertUsername = text => ({
  return: { type: INSERT_USERNAME, username: text }
});

const insertUserworkplace = text => ({
  return: { type: INSERT_USERWORKPLACE, userworkplace: text }
});

// Reducer

const initialState = {
  username: "",
  userworkplace: ""
};

// action을 보낼 때마다 자동으로 리듀서를 실행함
// 리덕스는 자동으로 액션을 리듀서로 보냄
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INSERT_USERNAME:
      return applyInsertUsername(state, action);
    case INSERT_USERWORKPLACE:
      return applyInsertUserworkplace(state, action);
    default:
      return state;
  }
};
console.log(reducer(initialState, applyInsertUsername), " : Current_State");

// Reducer Functions

function applyInsertUsername(state, action) {
  return {
    ...state,
    username: action.text
  };
}

function applyInsertUserworkplace(state, action) {
  return {
    ...state,
    userworkplace: action.text
  };
}

// Export

export const altongActions = {
  insertUsername,
  insertUserworkplace
};

export default reducer;
