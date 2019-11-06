// // Imports

// // Actions

// const SET_NAME = "SET_NAME";
// const SET_WORKPLACE = "SET_WORKPLACE";

// // Action Creators

// function setName() {
//   return {
//     type: SET_NAME
//   };
// }

// function setWorkplace() {
//   return {
//     type: SET_WORKPLACE
//   };
// }

// // Reducer

// // const TIMER_DURATION = 1500;

// const initialState = {
//   name: "",
//   workplace: ""
// };

// function reducer(state = initialState, action) {
//   switch (action.type) {
//     case SET_NAME:
//       return { ...state, name: action.payload };
//     case SET_WORKPLACE:
//       return applySetWorkplace(state, action);
//     default:
//       return state;
//   }
// }

// // Reducer Functions

// // function applySetName(state, action) {
// //   return {
// //     ...state,
// //     name: action.name,
// //     workplace: action.workplace
// //   };
// // }

// function applySetWorkplace(state, action) {
//   return {
//     ...state,
//     name: action.name,
//     workplace: action.workplace
//   };
// }

// // Exports

// const actionCreators = { setName, setWorkplace };
// export { actionCreators };

// // Default

// export default reducer;
