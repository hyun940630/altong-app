import React, { Component } from "react";
import { Text } from "react-native";
import { connect } from "react-redux";
import { typeUsername } from "../reducers/actions";

// const SetUserInfoInput = connect(
//   state => ({
//     username: state
//   }),
//   dispatch => ({
//     onChangeText: text => {
//       dispatch(typeUsername(text));
//     }
//   })
// )(TextInput);

// const UserInfoInputComponent = ({ username }) => {
//   return <SetUserInfoInput value={username} />;
// };

// export default UserInfoInputComponent;

handleChange = e => {
  this.setState({ text: e.target.value });
};

const UserInfoText = () => {
  // mapStateToProps로 반환한 todo에 접근할 수 있음
  // const { text } = this.props;
  // mapDispatchToProps가 반환한 text를 dispatch함
  return <Text onChange={this.handleChange} />;
};

const mapStateToProps = state => {
  const { username } = state;
  return { username };
};
const mapDispathToProps = dispatch => {
  return {
    typeUsername: () => dispatch({ type: "TYPE_USERNAME" })
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(UserInfoText);
