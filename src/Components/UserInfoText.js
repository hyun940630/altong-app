import React, { Component } from "react";
import { StyleSheet, TextInput } from "react-native";

// handleChange = e => {
//   this.setState({ text: e.target.value });
// };

// const _handleChange = props => {
//   return { text: props };
// };

function UserInfoText(props) {
  return (
    <TextInput
      // autoFocus={autoFocus}
      // placeholder={placeholder}
      // style={style}
      // onChange={_handleChange}
      {...props}
    >
      {text}
    </TextInput>
  );
}

export default UserInfoText;
